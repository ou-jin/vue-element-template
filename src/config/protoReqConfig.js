import protoRoot from "@/configFile/proto/proto"
import protobuf from 'protobufjs'
import axios from 'axios'
import apiConfig from './protoApi/index'

// 基础response模板
let BaseResponse = protoRoot.lookupType("BaseResponse");

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
  console.log(option)
  // 根据参数配置请求模板和解析模板
   let requetProto = protoRoot.lookupType(option.requestTmp);
   let responseProto = protoRoot.lookupType(option.responseTmp);
  let api = createRequest()
  api.interceptors.request.use(
    config => {
      config.url = option.url;
      let data = Object.assign({},config.data)
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
      let res = BaseResponse.decode(buf);
      let resData = responseProto.decode(res.data.value);
      return resData
    },
    error => {
    }
  );

  return api
}

const getApiMap = ()=>{
  let apiList = {}
  apiConfig.forEach((s)=>{
    let key = Object.keys(s)[0]
    let val = s[key]
    apiList[key]= getApiInstance(val)
  })
  return apiList
}

getApiMap()

export default getApiMap()