import protoRoot from "@/configFile/proto/proto"
import protobuf from 'protobufjs'
import axios from 'axios'
import apiConfig from './protoApiConfig'
import { isArray } from "util";

// 基础response模板
let BaseResponse = protoRoot.lookupType("BaseResponse");
let PageResponse = protoRoot.lookupType("PageResponse");

const createRequest = (option) => {
  return axios.create({
    timeout: 10000,
    method: "post",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/octet-stream",
      'token': localStorage.getItem("token")
    },
    baseURL: process.env.NODE_ENV == 'development' ? process.env.API_HOST : HOST,
    responseType: "arraybuffer"
  });
}
const getApiInstance = (option) => {
  // 根据参数配置请求模板和解析模板
  let requetProto = protoRoot.lookupType(option.requestTmp);
  let responseProto = protoRoot.lookupType(option.responseTmp);
  let api = createRequest()
  api.interceptors.request.use(
    config => {
      config.url = option.url;
      let data = Object.assign({}, config.data)
      config.data = new Blob([requetProto.encode(requetProto.create(data)).finish()], { type: 'buffer' });
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  api.interceptors.response.use(
    response => {
      const buf = protobuf.util.newBuffer(response.data);
      let res = PageResponse.decode(buf);
      if (res.IsSuccess) {
        if (isArray(res.data)) {
          let resList = res.data.map((s) => {
            return responseProto.decode(s.value)
          })
          return resList
        }
        return responseProto.decode(res.data);
      }
      this.$message(res.Message)
    },
    error => {
    }
  );

  return api
}

const getApiMap = async () => {
  let apiList = {}
  let d = await apiConfig()
  d.forEach((s) => {
    let key = Object.keys(s)[0]
    let val = s[key]
    apiList[key] = getApiInstance(val)
  })
  return apiList
}

getApiMap()

export default getApiMap()