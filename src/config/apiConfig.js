import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.NODE_ENV == 'development' ? devHost[0].proxy : proHost,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    params: {}
});
// request拦截器
instance.interceptors.request.use(
    config => {
        config.headers.Authorization = localStorage.getItem("AUT_TOKEN");
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
