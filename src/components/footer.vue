<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: guoxiaomin
 * @Email: 1093556028@qq.com
 * @Date: 2019-08-20 15:55:50
 * @LastEditors: guoxiaomin
 * @LastEditTime: 2019-08-20 16:16:59
 -->
<style lang="less" scoped>
.footerBox{
  background: #2B2B2B;
  height: 4rem;
  width: 100%;
  position: relative;
  .navInfo{
    display: flex;
    justify-content: center;
    .module{
      padding-top: 0.69rem;
      margin-left: 1rem;
      .name{
        font-size: 0.24rem;
        color: #FFFFFF;
        font-weight:400;
      }
      .subLinkBox{
        margin-top: 0.45rem;
        .subItem{
          color: #BABABA;
          font-size: 0.18rem;
          font-weight:400;
          padding-top: 0.2rem;
        }
      }
    }
  }
  .address{
    position: absolute;
    bottom: 0.4rem;
    font-size: 0.18rem;
    color: #BABABA;
    width: 100%;
    text-align: center;
  }
}
</style>
<template>
<div class="footerBox">
  <div class="navInfo">
    <div class="module" v-for="(moduleItem, index) in arr" :key="index">
      <p class="name">{{moduleItem.name}}</p>
      <div class="subLinkBox">
        <p class="subItem" v-for="(item, subIndex) in moduleItem.sub" :key="subIndex">
          {{item}}
        </p>
      </div>
    </div>
  </div>
  <p class="address">
    <span class="cn">地址：北京市丰台区城南大道1座1509室</span>
    <span class="en" style="marginLeft:0.12rem;">Dingsheng Hengji Investment Co.,Ltd</span>
  </p>
</div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          name: '关于我们',
          sub: [
            '.公司介绍',
            '.联系我们'
          ]
        },
        {
          name: '安全保障',
          sub: [
            '.实体经营',
            '.合规资质',
            '.信息安全'
          ]
        },
        {
          name: '我要出借',
          sub: [
            '.合作共赢'
          ]
        },
        {
          name: '客服专线',
          sub: [
            '.010-87506918',
            '.客服服务时间09:00-18:00'
          ]
        }
      ]
    }
  },
}
</script>