/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: guoxiaomin
 * @Email: 1093556028@qq.com
 * @Date: 2019-08-20 10:38:02
 * @LastEditors: guoxiaomin
 * @LastEditTime: 2019-08-20 11:30:14
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import OutMoney from './views/outMoney.vue'
import EnterMoney from './views/enterMoney.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/outMoney',
      name: 'OutMoney',
      component: OutMoney
    },
    {
      path: '/enterMoney',
      name: 'EnterMoney',
      component: EnterMoney
    }
  ]
})
