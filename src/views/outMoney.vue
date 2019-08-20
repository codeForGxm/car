<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: guoxiaomin
 * @Email: 1093556028@qq.com
 * @Date: 2019-08-20 10:38:02
 * @LastEditors: guoxiaomin
 * @LastEditTime: 2019-08-20 19:09:14
 -->
 <style lang="less" scoped>
   .outMoneyBox{
     .topInfo{
       width: 100%;
       height: 9rem;
       background: url('../assets/bannerYc@2x.png') no-repeat;
       background-size: 100% 100%;
       display: flex;
       padding-top: 2.7rem;
       box-sizing: border-box;
       justify-content: center;
       .box1{
         margin-left: 1.61rem;
       }
     }
     .module2{
       width: 100%;
       height: 8.99rem;
       background: url('../assets/backgroundXy@2x.png') no-repeat;
       background-size: 100% 100%;
       display: flex;
       padding-top: 2.7rem;
       box-sizing: border-box;
       justify-content: center;
     }
   }
 </style>
<template>
  <div class="outMoneyBox">
    <div class="topInfo module1">
      <OutInfo></OutInfo>
      <ToolBox class="box1"></ToolBox>
    </div>
    <div class="module2">
      <ToolBox class="box2" :txt='moudule2Txt'></ToolBox>
      <OutInfo :outInfo='moudule2Out' style="marginLeft:0.94rem;"></OutInfo>
    </div>
    <div class="module3">
       <OutInfo :outInfo='moudule3Out'></OutInfo>
       <ToolBox class="box3" :txt='moudule3Txt'></ToolBox>
    </div>
    <div class="module4">
       <ToolBox class="box4" :txt='moudule4Txt'></ToolBox>
       <OutInfo :outInfo='moudule4Out'></OutInfo>
    </div>
  </div>
</template>
<script>
import OutInfo from '../components/outInfo'
import ToolBox from '../components/toolBox'
export default {
  name: 'OutMoney',
  components: {
    OutInfo,
    ToolBox
  },
  data() {
    return {
      moudule2Txt: {
        color: 'rgba(204,204,204,1)',
        fontColor: '#333333',
        mainTitle: '信用贷',
        subTitle: '1-3年期低息高额纯信用贷',
        introduce: '低息高额，无抵押，最高100万纯信用产品。只需立即申请即可预约专业信贷经理定制化信贷方案。5分钟申请,2分钟放款'
      },
      moudule2Out: {
        fontColor: '#000000',
        leftTxt: '信用',
        rightSm: '门槛低 额度高',
        rightBg: '无抵押'
      },
      moudule3Txt: {
        color: 'background:rgba(253,55,26,0.7)',
        fontColor: '#ffffff',
        mainTitle: '房抵贷',
        subTitle: '房屋抵押银行贷款',
        introduce: '有房产证就能贷，可贷评估值的80%。对接多个银行的多款产品，利息低、更专业省、更省心。只需立即申请即可预约专业信贷经理定制化适合您的贷款方案。'
      },
      moudule3Out: {
        fontColor: '#ffffff',
        leftTxt: '有房',
        rightSm: '房屋抵押 银行贷款',
        rightBg: '就能贷'
      },
      moudule4Txt: {
        color: 'background:rgba(51,51,51,0.7)',
        fontColor: '#FFFFFF',
        mainTitle: '房抵贷',
        subTitle: '房屋二次抵押贷款',
        introduce: '房产已抵押还能再贷款，原贷款不必还请，提前还款无违约金。只需立即申请即可预约专业信贷经理定制化适合您的贷款方案。'
      },
      moudule4Out: {
        fontColor: '#000000',
        leftTxt: '信用',
        rightSm: '门槛低 额度高',
        rightBg: '二次抵押'
      }
    }
  },
}
</script>
