// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css'
import '../static/scss/index.scss'
import '../static/element-ui-theme/index.js'
// import '../theme/index.css'
import Vue from 'vue'
import App from './App'
import router from '../src/config/routerConfig'
import ElementUI from 'element-ui'
import store from '../src/config/vuexConfig'
import components from '../src/config/pluginConfig'
import mixin from '../src/config/mixinConfig'
import http from './api/index.js'
import utils from '../static/js/utils'
import VueRouter from 'vue-router'; 
Vue.use(VueRouter)
Vue.use(components)
Vue.use(ElementUI, {size: 'small'})
Vue.prototype.$bus = new Vue()
Vue.prototype.http = http
Vue.prototype.local=localStorage
Vue.prototype.fcn= utils//工具类
Vue.config.productionTip = false
Vue.mixin(mixin)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
