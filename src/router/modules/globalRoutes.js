const globalRoutes = [
    { path: '/login', component:resolve=>require(["@/views/login/login.vue"], resolve), name: 'login', meta: { title: '登录' , requiresAuth: false} }
]
export default globalRoutes