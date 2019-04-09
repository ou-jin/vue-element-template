import 'babel-polyfill'
import axios from 'axios'
import qs from 'qs'
import lodash from 'lodash'
import {Message} from 'element-ui'
import Router from '../../config/routerConfig'

const generateApiMap = (map) => {
    let facade = {}
    lodash.forEach(map, function (value, key) {
        facade[key] = toMethod(value)
    })
    return facade
}

const toMethod = (options) => {
    options.method = options.method || 'post'
    return (params = {}, config = {}) => {
        // if (window.localStorage.getItem(options.flag?options.flag+'USER_INFO':'USER_INFO')) {
        //     params.UserInfo = JSON.parse(window.localStorage.getItem(options.flag?options.flag+'USER_INFO':'USER_INFO'));
        // }

        // var newParams = {input: JSON.stringify(params)};

        return sendApiInstance(options.method, options.url,options.host, params, config)
    }
}

// 创建axios实例
const createApiInstance = (config = {}, method, url,host) => {
    var _config = {
        withCredentials: true, // 跨域
        baseURL: host?host:process.env.NODE_ENV == 'development' ? process.env.API_HOST:HOST,
    };
    config = lodash.merge(_config, config);
    console.log(config)
    return axios.create(config);
}

// 检查返回值
const errCheck = (code, message, data) => {
    if (code == 200 && data.isSuccess) {
        return true
    }
    return false
}

const sendApiInstance = (method, url,host, params, config = {}) => {
    let flag = Router.history.current.name==='FreeAuthReport'||Router.history.current.params.auth_obj?'FREE_':''
    if (!url) {
        return
    }
    if (window.localStorage.getItem(flag?flag+'USER_INFO':'USER_INFO')) {
        params.UserInfo = JSON.parse(window.localStorage.getItem(flag?flag+'USER_INFO':'USER_INFO'));
    }
    params =  {input: JSON.stringify(params)};

    let instance = createApiInstance(config, method, url,host);

    instance.interceptors.request.use(
        config => {
            // 不需要设置token的，设置为空
            if (url.indexOf('gettoken') > -1 || url.indexOf('registeruser') > -1) {
                config.headers.Authorization = "";
            }
            else { // 其他所有需要token的，从本地获取token
                // config.headers.Authorization = localStorage.getItem("AUT_TOKEN");
                config.headers.Authorization = localStorage.getItem(flag?flag+"AUT_TOKEN":"AUT_TOKEN");
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        response => {
            let {status, statusText, data} = response;
            if (errCheck(status, statusText, data) && data) {
                if(data.newToken) localStorage.setItem(flag?flag+"AUT_TOKEN":"AUT_TOKEN", data.newToken)
                return Promise.resolve(data)
            } else {
                return Promise.reject(data).then().catch(res => {
                    var options = {
                        message: res.message,
                        center: true
                    };
                    Message.error(options);
                })
            }
        },
        error => {
            //  console.log('报错内容返回值',error.response, error.message);
            return Promise.reject(error).then().catch(res => {
                if (error.response.status == 401) {
                    /*
                    * 如果登录时间过长 则检测超时状态码401
                    * 清空本地local存储 并且跳转回login页面
                    * */
                    Message.error({
                        message: '登录过期请重新登录',
                        center: true,
                        showClose: true,
                        duration: 2000,
                        onClose: () => {
                            localStorage.clear(); // 清空本地缓存
                            // location.reload(); // 返回登录页时强制刷新
                            Router.push({'path': '/login'});
                        }
                    });
                }
                else {
                    var options = {
                        message: error.response.status + ':' + error.message,
                        center: true
                    };
                    Message.error(options);
                }

            })
        }
    );

    if (method === 'get') {
        params = {
            params: params
        }
    }
    if (method === 'delete') {
        params = {
            params: params
        }
    }
    if (method === 'post') {
        params = qs.stringify(params);
    }
    if (method === 'put') {
        params = qs.stringify(params);
    }
    return instance[method](url, params, config)
}

export default {
    generateApiMap
}
