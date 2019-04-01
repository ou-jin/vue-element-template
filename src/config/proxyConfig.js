
(function () {
    let proxy = {}
    devHost.forEach(e => {
        let rewrite = {}
        rewrite['^' + e.proxy] = '/'
        proxy[e.proxy] = {
            target: e.url,
            secure: true, // 如果是https接口 需要配置这个参数
            changeOrigin: true
        }
        proxy[e.proxy] = Object.assign(proxy[e.proxy], { 'pathRewrite': rewrite })
    });
}())