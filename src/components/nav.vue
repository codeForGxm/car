<style lang="less" scoped>
.nav{
  height: 0.9rem;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1000px;
  border-bottom: 1px solid #FFFFFF;
  .logoBox{
    display: flex;
    height: 100%;
    align-items: center;
    margin-left: 3.6rem;
    .logo{
      width: 1.45rem;
      height: 0.4rem;
    }
    .phoneClass{
      color: #FFFFFF;
      font-size: 0.18rem;
    }
  }
  .linkBox{
    margin-left: 3.14rem;
    height: 100%;
    /deep/ .el-menu-item{
      height: 100%;
      font-size: 0.16rem;
      
    }
  }
}
</style>

<template>
  <div class="nav" @mouseenter="selectStyle">
    <div class="logoBox">
      <img src="../assets/logo@2x.png" alt="" class="logo">
      <p class="phoneClass">客服热线:010-87506918</p>
    </div>
      <el-menu :default-active="activeIndex" router mode="horizontal" class="linkBox" background-color='transparent' active-text-color='#ffffff' text-color='#ffffff'>
        <el-menu-item v-for='(item, index) in arr' :index="item.link" :key='index' :style="{backgroundColor:hoverColor}" >
          {{item.name}}
        </el-menu-item>
      </el-menu>
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
  },
  methods: {
    selectStyle() {
      console.log(1111)
      this.hoverColor = '#red'
    }
  }
}
</script>