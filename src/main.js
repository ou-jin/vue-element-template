// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css'
// 更换element主题
import '../static/scss/index.scss'
import '../static/element-ui-theme/index.js'
// 自动加载icon
import '../src/config/iconConfig'
import components from  '../src/config/pluginConfig'
import Vue from 'vue'
import App from './App'
import router from '../src/config/routerConfig'
import ElementUI from 'element-ui'
import store from '../src/config/vuexConfig'
import mixin from '../src/config/mixinConfig'
import utils from '../src/config/generalMethod'
import db from '../src/config/dbConfig'
import VueRouter from 'vue-router'; 
import http from '../src/config/jsonApi/index'
import api from '../src/config/protoApi/protoReqConfig'
import 'babel-polyfill'
import absElementUi from 'abs_element_ui'
Vue.use(absElementUi)// abs_element_ui组件库
Vue.use(VueRouter) // 路由
Vue.use(components) //全局组件
Vue.use(ElementUI, {size: 'small'}) // element-ui
Vue.prototype.db = db //innerDb
Vue.prototype.$bus = new Vue() // eventBus
Vue.prototype.http = http // json格式http请求
Vue.prototype.fcn= utils //全局通用方法
Vue.mixin(mixin) // mixin
api.then(x=>{
    Vue.prototype.api =  x // proto格式http请求
    new Vue({
        el: '#app',
        router,
        store,
        components: {App},
        template: '<App/>'
    })
}).catch(x=>{
    new Vue({
        el: '#app',
        router,
        store,
        components: {App},
        template: '<App/>'
    })
})
   