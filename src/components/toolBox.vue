<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: guoxiaomin
 * @Email: 1093556028@qq.com
 * @Date: 2019-08-20 18:02:29
 * @LastEditors: guoxiaomin
 * @LastEditTime: 2019-08-20 18:55:12
 -->
<style lang="less" scoped>
.box{
  width: 6.05rem;
  height: 5.04rem;
  box-sizing: border-box;
  padding: 0.72rem 0.91rem 0 1rem;
  color: #ffffff;
  position: relative;
  .mainTitle{
    font-size: 0.36rem;
  }
  .subTitle{
    font-size: 0.3rem;
    margin-top: 0.26rem;
  }
  .introduce{
    margin-top: 0.34rem;
    font-size: 0.18rem;
    line-height: 0.36rem;
  }
  .btn{
    border:1px solid rgba(255,255,255,1);
    width:4.13rem;
    height:0.62rem;
    font-size: 0.24rem;
    line-height: 0.62rem;
    text-align: center;
    font-weight:400;
    position: absolute;
    bottom: 0.56rem;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
  }
}
</style>
<template>
  <div class="box" :style="{background:txt.color, color: txt.fontColor}">
    <p class="mainTitle">{{txt.mainTitle}}</p>
    <p class="subTitle">{{txt.subTitle}}</p>
    <p class="introduce">{{txt.introduce}}</p>
    <div class="btn" :style="{borderColor:txt.fontColor}">立即申请</div>
  </div>
</template>
<script>
export default {
  props: {
    txt: {
      type: Object,
      default: () => { 
        return {
          color: 'rgba(253,55,26, 0.7)',
          fontColor: '#ffffff',
          mainTitle: '房抵贷',
          subTitle: '房屋抵押银行贷款',
          introduce: '汽车贷款，额度高放款快、申请材料简单。目前有GPS不押车和押车等多种服务模式可供选择。'
        }
      }
    }
  }
}
</script>