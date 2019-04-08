// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css'
// 更换element主题
import '../static/scss/index.scss'
import '../static/element-ui-theme/index.js'
import Vue from 'vue'
import App from './App'
import router from '../src/config/routerConfig'
import ElementUI from 'element-ui'
import store from '../src/config/vuexConfig'
import components from '../src/config/pluginConfig'
import mixin from '../src/config/mixinConfig'
import http from './api/index.js'
import utils from '../src/config/generalMethod'
import VueRouter from 'vue-router'; 
import api from '../src/config/protoReqConfig'
import 'babel-polyfill'
Vue.use(VueRouter) // 路由
Vue.use(components) //全局组件
Vue.use(ElementUI, {size: 'small'}) // element-ui
Vue.prototype.$bus = new Vue() // eventBus
Vue.prototype.http = http // json格式http请求
Vue.prototype.api = api // proto格式http请求
Vue.prototype.fcn= utils //全局通用方法
Vue.mixin(mixin) // mixin
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
