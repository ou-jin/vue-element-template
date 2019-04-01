// 为满足开发环境跨域，将自动根据devUrl列表生成对应代理,默认以devHost[0].proxy为默认url
const devHost = [{proxy:'/api',url:'http://192.168.1.31:5000/api/'}]
const proHost = 'http://192.168.1.31:5000/api/'