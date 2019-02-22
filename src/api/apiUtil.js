import axios from 'axios'
import lodash from 'lodash'
import { Message } from 'element-ui'
import Router from '../router/index'
import { Loading } from 'element-ui';
const baseUrl = serverConfig.baseUrl;
// 生成全屏loading示例
let loadingInstance = {}
const generateApiMap = (map) => {
    let facade = {}
    lodash.forEach(map, function (value, key) {
        facade[key] = toMethod(value);
    })
    return facade;
}

const toMethod = (options) => {
    options.method = options.method || 'post';
    return (params = {}, attachedParams, config = {}) => {
        params = lodash.extend(params, attachedParams);
        return sendApiInstance(options.method, options.url, Object.assign(params,{'OrganizationID':localStorage.getItem('OrganizationID')}), config)
    }
}

const createApiInstance = (config = {}, method, url) => {
    var _config = {
        withCredentials: true, // 跨域
        baseURL: baseUrl
    }
    config = lodash.merge(_config, config);
    return axios.create(config);
}

const errCheck = (code, message, data) => {
    // if (data.isSuccess) {
    //     return true
    // }
    return true
    // if (code == 200 && data.status == 0) {
    //     return true
    // }
}

const sendApiInstance = (method, url, params, config = {}) => {

    if (!url) return;
    let instance = createApiInstance(config, method, url);
    instance.interceptors.request.use(
        config => {
            // 在请求时打开loading
            loadingInstance = Loading.service({ fullscreen: true });
            config.headers.Authorization = localStorage.getItem('AUT_TOKEN');
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    )

    instance.interceptors.response.use(
        response => {
             // 请求结束后关闭loading
            loadingInstance.close();
            let { status, statusText, data } = response;
            if (errCheck(status, statusText, data) && data) {
                // 后台请求每次response都会包含一个新的token 刷新token防止浏览中途登录过期
                if (data.token) localStorage.setItem('AUT_TOKEN', data.token)
                return Promise.resolve(data);
            } else {
                return Promise.reject(data).then().catch(res => {
                    let options = { message: res.desc, duration: 1000 };
                    Message.error(options);
                })
            }
            //    return response
        },
        error => {
            return Promise.reject(error).then().catch(res => {
                if (error.response.status == 401) {
                    // 如果登录时间过长 则检测超时状态码401 清空本地local存储 并且跳转回login页面
                    Message.error({
                        message: '登录过期请重新登录',
                        showClose: true,
                        duration: 1000,
                        onClose: () => {
                            localStorage.clear(); // 清空本地localStorage缓存
                            sessionStorage.clear(); // 清空本地sessionStorage缓存
                            Router.push({ 'path': '/login', query: { redirect: window.location.host } });
                        }
                    });
                } else {
                    // 服务端报错 处理
                    var options = { message: '服务端出错, 请稍后再试', duration: 1000 };
                    Message.error(options);
                }
            })
        }
    )

    if (method === 'get' || method === 'delete') {
        params = {
            params: params,
        }
    }
    return instance[method](url, params, config)
}

export default {
    generateApiMap
}
