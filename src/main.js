/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: guoxiaomin
 * @Email: 1093556028@qq.com
 * @Date: 2019-08-20 10:38:02
 * @LastEditors: guoxiaomin
 * @LastEditTime: 2019-08-20 11:05:10
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './static/css/global.css'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
