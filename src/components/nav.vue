<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: guoxiaomin
 * @Email: 1093556028@qq.com
 * @Date: 2019-08-20 10:38:02
 * @LastEditors: guoxiaomin
 * @LastEditTime: 2019-08-20 14:02:31
 -->

<style lang="less" scoped>
.header{
  height: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #FFFFFF;
  .logoBox{
    display: flex;
    height: 100%;
    align-items: center;
    .logo{
      width: 1.45rem;
      height: 0.4rem;
    }
    .phoneClass{
      color: #FFFFFF;
      font-size: 0.18rem;
      margin-left: 0.14rem;
    }
  }
  .nav{
    display: flex;
    color: #FFFFFF;
    font-size: 0.16rem;
    margin-left: 2.56rem;
    .tab-item{
      margin-left: 0.58rem;
      cursor: pointer;
      .tab-link{
        line-height: 0.88rem;
      }
    }
    
    .activity{
      .tab-link{
        border-bottom: 2px solid #ffffff;
      }
    }
  }
}
</style>

<template>
  <div class="header">
    <div class="logoBox">
      <img src="../assets/logo@2x.png" alt="" class="logo">
      <p class="phoneClass">| 客服热线:010-87506918</p>
    </div>
    <div class="nav">
      <router-link v-for='(item, index) in arr' :key='index' tag="div" :class="['tab-item',($route.name == item.toRouter)?'activity':'']" :to='{name: item.toRouter}' replace>
        <div class="tab-link">{{item.name}}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '/',
      hoverColor: '',
      arr: [
        {
          name: '首页',
          link: '/',
          toRouter: 'Home'
        },
        {
          name: '我要借钱',
          link: '/outMoney',
          toRouter: 'OutMoney'
        },
        {
          name: '我要出借',
          link: '/enterMoney',
          toRouter: 'EnterMoney'
        },
        {
          name: '关于我们',
          link: '/about',
          toRouter: 'About'
        }
      ]
    }
  }
}
</script>