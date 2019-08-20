<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: guoxiaomin
 * @Email: 1093556028@qq.com
 * @Date: 2019-08-20 18:41:15
 * @LastEditors: guoxiaomin
 * @LastEditTime: 2019-08-20 18:53:30
 -->
<style lang="less" scoped>
.introBox{
  padding-top: 1.37rem;
  .line{
    background: #FD371A;
    width: 0.52rem;
    height: 0.08rem;
  }
  .TxtBox{
    display: flex;
    color: #ffffff;
    margin-top: 0.43rem;
    .left{
      font-weight: bold;
      font-size: 1.2rem;
    }
    .right{
      margin-left: 0.1rem;
      .sm{
        padding-top: 0.2rem;
        font-size: 0.18rem;
        font-weight:400;
        margin-left: 0.1rem;
      }
      .bg{
        margin-top: 0.2rem;
        font-size: 0.6rem;
        font-weight: bold;
      }
    }
  }
}
</style>
<template>
   <div class="introBox">
      <div class="line"></div>
      <div class="TxtBox" :style="{color: outInfo.fontColor}">
        <p class="left">{{outInfo.leftTxt}}</p>
        <div class="right">
          <p class="sm">{{outInfo.rightSm}}</p>
          <p class="bg">{{outInfo.rightBg}}</p>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    outInfo: {
      type: Object,
      default: () => {
        return {
          leftTxt: '有车',
          rightSm: '资金周转 极速放款',
          rightBg: '就能贷',
          fontColor: '#ffffff'
        }
      }
    }
  }
}
</script>