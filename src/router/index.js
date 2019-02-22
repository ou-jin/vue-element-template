// import引入页面或组件时 路径 /XX/XX/XX.vue 要有vue后缀 如果文件夹下并不是只有一个vue文件时就会报错（默认import引入了文件下的同名js文件）
// meta.requiresAuth 页面是否需要授权验证
import Vue from 'vue'
import Router from 'vue-router'
import globalRoutes from './modules/globalRoutes'
import {routeFactory} from '../factory/routeFactory'
import axios from 'axios'
import utils from '../../static/js/utils'
Vue.use(Router)
axios.get('../static/json/routeConfig.json').then((s)=>{
    utils.setStorage('routeList',s.data.list)
    let list  = routeFactory(s.data.list)
    console.log(list)
    vueRouter.addRoutes(
        [{
            path: '/',
            name: 'index',
            component: resolve=>require(["@/views/index/index.vue"], resolve),
            children:list,
            redirect: '/pageOne' // 默认index重定向到home页面
        }]
    )
})
const vueRouter = new Router({
    mode: 'history',
    routes: [...globalRoutes]
})
vueRouter.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        // 从本地取token 如果存在则可以登录 如果不存在 则跳回到登录页
        if (localStorage.getItem('AUT_TOKEN')) {
            next()
        } else {
            console.log('没有权限，跳转到登陆')
           next('/login')
        }
    } else {
        next();
    }
})
export default vueRouter;
