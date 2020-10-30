// 注册全局组件
import Vue from 'vue'
import BackTop from '../components/BackTop/BackTop'
import AccountLogin from '../components/accountLogin/AccountLogin'
import PhoneLogin from '../components/phoneLogin/phoneLogin'

Vue.component('backTop', BackTop)
Vue.component('accountLogin', AccountLogin)
Vue.component('phoneLogin', PhoneLogin)