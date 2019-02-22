// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css'
import '../static/js/iconConfig'
import '../static/scss/index.scss'
import '../static/element-ui-theme/index.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import store from './vuex'
import components from './plugins/components.js'
import mixin from './mixin/index.js'
import http from './api/index.js'
import utils from '../static/js/utils'
import fcnTemplate from '../src/factory/fcnTemplate'
Vue.use(components)
Vue.use(ElementUI, {size: 'small'})
Vue.use(VueAxios, axios)
Vue.prototype.$bus = new Vue()
Vue.prototype.http = http
Vue.prototype.local=localStorage
Vue.prototype.fcn= utils//工具类
Vue.prototype.tep=new fcnTemplate()//事件模板类
Vue.config.productionTip = false
Vue.mixin(mixin)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>',
    data: {
        bus: new Vue()
    }
})
