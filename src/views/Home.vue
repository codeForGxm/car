<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: guoxiaomin
 * @Email: 1093556028@qq.com
 * @Date: 2019-08-20 10:38:02
 * @LastEditors: guoxiaomin
 * @LastEditTime: 2019-08-20 15:55:23
 -->
<style lang="less" scoped>
.home{
  .banner{
    width: 100%;
    height: 9rem;
    background: url(../assets/bannerBj@2x.png) no-repeat;
    background-size: 100% 100%;
    // position: relative;
    display: flex;
    // align-items: center;
    justify-content: center;
    align-items: center;
    .introduce{
      color: #FFFFFF;
      .txt1{
        font-weight: Bold;
        font-size: 0.6rem;
        line-height: 0.8rem;
      }
      .txt2{
        font-weight: bold;
        font-size: 0.48rem;
        line-height: 0.8rem;
      }
      .btnBox{
        border: 1px solid #FFFFFF;
        text-align: center;
        width: 1.91rem;
        height: 0.6rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.07rem;
        .txt{
          font-size: 0.18rem;
          color: #FFFFFF;
          margin-left: 0.11rem;
        }
        .icon{
          width: 0.18rem;
          height: 0.26rem;
        }
      }
    }
    .car{
      width: 7.61rem;
      height: 5.66rem;
      margin-left: 0.1rem;
    }
  }
  .serverBox{
    width: 100%;
    height: 9rem;
    background: url('../assets/bannerYz@2x.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    padding-top: 0.98rem;
    box-sizing: border-box;
    .leftBox{
      .serverIcon{
        width: 0.47rem;
        height: 0.49rem;
      }
      .title{
        font-weight: bold;
        font-size: 0.6rem;
        color: #333333;
        margin-top: 0.33rem;
        .red{
          width: 0.22rem;
          height: 0.22rem;
          background: #FD371C;
          border-radius: 50%;
          display: inline-block;
          margin-left: 0.05rem;
        }
      }
      .enTitle{
        font-size: 0.36rem;
        color: #ffffff;
        font-weight:400;
        margin-top: 0.31rem;
      }
      .goodnessList{
        margin-top: 1.11rem;
        display: flex;
        .line{
          .item{
            .cn{
              color: #000000;
              font-size: 0.18rem;
              font-weight: bold;
            }
            .en{
              font-size: 0.24rem;
              color:#FFFFFF;
              font-weight:400;
            }
          }
          .item1{
            margin-top: 0.4rem;
          }
        }
        .line1{
          margin-left: 0.66rem;
        }
      }
      .contactBox{
        font-size: 0.22rem;
        color: #333333;
        line-height: 0.22rem;
        height: 0.22rem;
        margin-top: 0.92rem;
        .icon{
          width: 0.38rem;
          height: 0.22rem;
          margin-left: 0.11rem;
          vertical-align: middle;
        }
      }
    }
    .rightBox{
      margin-left: 1.59rem;
      padding-top: 0.78rem;
      .line{
        display: flex;
        .item{
          width: 3.04rem;
          height: 3.04rem;
          background-size: 100% 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .mainTxt{
            font-weight: bold;
            font-size: 0.24rem;
            color: #FFFFFF;
            margin-top: 0.16rem;
          }
          .subTxt{
            font-size: 0.18rem;
            color: #FFFFFF;
            font-weight:400;
            margin-top: 0.11rem;
          }
        }
        .item1{
          background: url('../assets/imageMk@2x.png') no-repeat;
          .icon{
            width: 0.76rem;
            height: 0.87rem;
          }
        }
        .item2{
          background: url('../assets/imageFk@2x.png') no-repeat;
          .icon{
            width: 0.87rem;
            height: 0.73rem;
          }
        }
        .item3{
          background: url('../assets/imageEd@2x.png') no-repeat;
          .icon{
            width: 0.84rem;
            height: 0.59rem;
          }
        }
        .item4{
          background: url('../assets/imageZy@2x.png') no-repeat;
          .icon{
            width: 0.88rem;
            height: 0.64rem;
          }
        }
      }
    }
  }
  .processBox{
    width: 100%;
    height: 8.99rem;
    background: url('../assets/bannerSq@2x.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    .title{
      margin-left: 3.6rem;
      padding-top: 0.99rem;
      .zh{
        color: #333333;
        font-size: 0.6rem;
        font-weight: bold;
      }
      .en{
        color: #333333;
        font-size: 0.36rem;
        font-weight:400;
        line-height: 0.48rem;
        padding-left: 0.05rem;
      }
    }
    .steps{
      display: flex;
      align-items: center;
      padding: 1.37rem 4.47rem 0 4.8rem;
      .step{
        width: 0.8rem;
        height: 0.8rem;
        border: 0.08rem solid #FD371A;
        border-radius: 50%;
        color: #FD371A;
        font-size: 0.36rem;
        font-weight: bold;
        text-align: center;
        line-height: 0.8rem;
        .num{
          width: 100%;
          height: 100%;
        }
        .txt{
          font-size: 0.24rem;
          color: #333333;
          font-weight:bold;
          margin-top: 0.36rem;
          text-align: center;
          white-space : nowrap;
        }
      }
      .line{
        background: #FD371A;
        flex-grow: 1;
        height: 0.08rem;
      }
    }
    .contactUs{
      position: absolute;
      right: 3.59rem;
      bottom: 1.01rem;
      .ctIcon{
        width: 1.97rem;
        height: 0.79rem;
      }
      .phone{
        color: #333333;
        font-size: 0.24rem;
        font-weight: bold;
        width: 1.97rem;
        text-align: center;
        margin-top: 0.13rem;
      }
    }
  }
}
</style>

<template>
  <div class="home">
    <div class="banner">
      <div class="introduce">
        <p class="txt1">签约客户赎车后</p>
        <p class="txt2">即可领取精美伴</p>
        <p class="txt2">手礼一份</p>
        <div class="btnBox">
          <img src="../assets/iconSb@2x.png" alt="" class="icon">
          <span class="txt">联系我们</span>
        </div>
      </div>
      <img src="../assets/carQy@2x.png" alt="" class="car">
    </div>
    <div class="serverBox">
      <div class="leftBox">
        <img src="../assets/iocnHg@2x.png" alt="" class="serverIcon">
        <p class="title">
          <span class="t">一站式专业服务</span>
          <span class="red t"></span>
        </p>
        <div class="enTitle">
          <p>CONVENIENCE</p>
          <p>SERVICE</p>
        </div>
        <div class="goodnessList">
          <div v-for="(line, lineIndex) in goodness" :key="lineIndex" :class="['line', 'line'+lineIndex ]">
            <div :class="['item', 'item'+index]" v-for="(item, index) in line" :key="index">
              <p class="cn">{{item.name}}</p>
              <p class="en" style="marginTop:0.11rem;">{{item.en}}</p>
            </div>
          </div>
        </div>
        <div class="contactBox">
          <span class="txt">联系我们</span>
          <img src="../assets/iconJtz@2x.png" alt="" class="icon"> 
        </div>
      </div>
      <div class="rightBox">
        <div class="line">
          <div class="item item1">
            <img src="../assets/iconMk@2x.png" alt="" class="icon">
            <span class="mainTxt">门槛低</span>
            <span class="subTxt">有车就能做</span>
          </div>
          <div class="item item2">
            <img src="../assets/iconFk@2x.png" alt="" class="icon">
            <span class="mainTxt">放款快</span>
            <span class="subTxt">手续便捷当天放款</span>
          </div>
        </div>
         <div class="line">
          <div class="item item3">
             <img src="../assets/iconEd@2x.png" alt="" class="icon">
             <span class="mainTxt">额度高</span>
             <span class="subTxt">十万抵十万</span>
          </div>
          <div class="item item4">
             <img src="../assets/iconZy@2x.png" alt="" class="icon">
             <span class="mainTxt">专业安全</span>
             <span class="subTxt">期限灵活不押车</span>
          </div>
        </div>
      </div>
    </div>
    <div class="processBox">
      <div class="title">
        <p class="zh">申请流程</p>
        <p class="en" style="marginTop:0.19rem;">APPLICATION</p>
        <p class="en">PROCESS</p>
      </div>
      <div class="steps">
        <div class="step">
          <p class="num">1</p>
          <p class="txt">电话沟通</p>
        </div>
        <div class="line"></div>
        <div class="step">
          <p class="num">2</p>
          <p class="txt">提交资料</p>
        </div>
        <div class="line"></div>
        <div class="step">
          <p class="num">3</p>
          <p class="txt">签约</p>
        </div>
        <div class="line"></div>
        <div class="step">
          <p class="num">4</p>
          <p class="txt">完成办理</p>
        </div>
      </div>
      <div class="contactUs">
        <img src="../assets/buttonLx@2x.png" alt="" class="ctIcon">
        <p class="phone">010-87506918</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      goodness: [
        [{
          name: '专业',
          en: 'SPECIALITY'
        },
        {
          name: '高效',
          en: 'HIGH EFFICIENCY'
        }],
        [{
          name: '安全',
          en: 'SAFETY'
        },
        {
          name: '便捷',
          en: 'CONVENIENT'
        }]
      ]
    }
  }
}
</script>
