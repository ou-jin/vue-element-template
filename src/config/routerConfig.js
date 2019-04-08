import page from '../configFile/pageConfig'
import Router from 'vue-router'
// 定义全局route组件
const globalRoutes = [
    { path: '/login', component:resolve=>require(["@/views/login/login.vue"], resolve), name: 'login', meta: { title: '登录' , requiresAuth: false} },
]
// 定义生成主页面组件
const mainRoutes = []
getRouteList(page)
localStorage.setItem('routeList',JSON.stringify(mainRoutes))
const vueRouter = new Router({
    mode: 'history',
    routes: [...globalRoutes]
})
vueRouter.addRoutes(
    [{
        path: '/',
        name: 'index',
        component: resolve=>require(["@/views/index/index.vue"], resolve),
        children:[...mainRoutes, { path: '/web', component:resolve=>require(["@/components/webComponent.vue"], resolve), name: 'web'}],
        redirect: '/pageOne' // 默认index重定向到home页面
    }]
)
vueRouter.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        next()
        if (localStorage.getItem('AUT_TOKEN')) {
            next()
        } else {
            console.log('没有权限，跳转到登陆')
        //    next('/login')
        }
    } else {
        next();
    }
})
// 根据配置生成route对象集合
function getRouteList (list){
    list.forEach((s)=>{
        if(s.children){
            getRouteList(s.children)
        }
        if(s.url){
            let route = {
                path: s.url,
                component:resolve=>require(["@/views"+s.url+"/index.vue"], resolve),
                name: s.url.replace('/', ''),
                meta: s.meta
            }
            mainRoutes.push(route)
        }
    })
}
export default vueRouter;
