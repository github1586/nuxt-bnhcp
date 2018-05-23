<template>
  <div class="body">
    <header-top :name="this.name" :back="this.back" :className="this.className" :backgroundColor="this.backgroundColor"></header-top>
    <!-- 剩余时间 -->
    <div class="time_leave">
      <computed-time :time="this.time"></computed-time>
    </div>
    <div class="menu_infor_box">
      <div class="menu_infor">
        <p>订单号码：<span>{{orderData.orderId}}</span></p>
        <p>购买课程：<span>{{orderData.orderName}}</span></p>
        <p>订单金额：<span>￥<i>{{orderData.total}}</i></span></p>
      </div>
    </div>
    <!-- 具体支付方式 -->
    <div class="pay_ways_zone" data-role="radio_bank">
      <div class="pay_way money_pay">选择支付方式</div>
      <div @click="select(0)" class="pay_way">
        <div class="pay_bank" :class="{on: this.weixin === true}">
          <p class="pay_wei"></p>
          <div class="pay_infor">
              <h1>微信支付</h1>
          </div>
        </div>
      </div>
      <div @click="select(1)" class="pay_way last">
        <div :class="{on: this.zhi === true}" class="pay_bank" id="zhi">
          <p class="pay_zhi"></p>
          <div class="pay_infor">
              <h1>支付宝支付</h1>
          </div>
        </div>
      </div>
    </div>
    <yes-btn @click.native="success()" :val="this.val"></yes-btn>
  </div>
</template>
<script>
import headerTop from '~/components/common/header.vue'
import yesBtn from '~/components/common/subscribe/yesbtn.vue'
import computedTime from '~/components/common/computedTime.vue'
import {paySuccess} from '../../ajax/getData.js'
import {mapState} from 'vuex'
import {getStore} from '../../config/common.js'
export default {
  data () {
    return {
      name: '确认订单',
      className: 1,
      backgroundColor: 1,
      back: 0,
      val: '确认支付',
      weixin: false,
      zhi: true,
      time: '300'
    }
  },
  computed: {
    ...mapState([
      'orderData'
    ])
  },
  methods: {
    select (value) {
      if (value === 1) {
        this.zhi = true
        this.weixin = false
      } else {
        this.weixin = true
        this.zhi = false
      }
    },
    async success () {
      let phone = getStore('user') // 拿到用户手机号
      console.log(this.orderData)
      let result = await paySuccess(this.orderData.orderId, phone)
      if (result.status) {
        this.$router.push({path: '/paySuccess/index'})
      }
    }
  },
  components: {
    headerTop,
    yesBtn,
    computedTime
  }
}
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
.body
  margin-top: 44px
// 支付剩余时间和订单详情
.time_leave
  background: #7d8590
  text-align: center
  padding: 10px 0 10px 0
  span
    font-size: 1.5rem
    color: #fff
    display: inline-block
    background: url(/img/time_leave.png) no-repeat left center
    background-size: 18px 18px
    padding: 0 0 0 25px
// 订单详情
.menu_infor_box
  background: url(/img/ding_bgc.png) repeat-x left bottom
  background-size: 14px 10px
  padding: 0 0 10px 0
  margin: 0 0 8px 0
.menu_infor
  background: #fff
  padding: 10px 15px 8px 12px
  p
    font-size: 1.2rem
    color: #484848
    margin: 0 0 7px 0
    span
      padding: 0 0 0 1px
.pay_ways_zone
  .pay_way
    background: #fff
    border-top: 1px solid #dcdcdc
    padding: 1.3rem 15px 1.3rem 12px
    height: 60px
    &.money_pay
      padding-top: 12px
      padding-bottom: 12px
      font-size: 1.2rem
      span
        color: #cf1b1b
    &.last
      border-bottom: 1px solid #dcdcdc
  .pay_bank
    overflow: hidden
    background: url(/img/kid_radio.png) no-repeat right center
    background-size: 16px 16px
    &.on
        background-image: url(/img/kid_radio_on.png)
    .pay_bank_new
        background: #f0f0f0 url('/img/pay_icon_bank_new.png')no-repeat center center
        background-size: 2.3rem 1.8rem 
    .pay_wei
        background: #f0f0f0 url('/img/pay_icon_wei.png')no-repeat center center
        background-size: 2.3rem 1.8rem 
    .pay_zhi
        background: #f0f0f0 url('/img/pay_icon_zhi.png')no-repeat center center
        background-size: 2.3rem 1.8rem 
    >p
      float: left
      width: 50px
      height: 34px
      img
        margin: 3px 0 0 0
        text-align: center
    .pay_infor
      margin: 0 0 0 62px
      // 账户余额
      &.full
        position: relative
        h1
          float: left
        p
          position: absolute
          top: 1.1rem
          right: 3rem
          font-size: 1.2rem
          a
            color: $theme_color
      h1
        font-size: 1.4rem
        color: #484848
        line-height: 3.4rem
        p
          font-size: 1.2rem
          color: #999
          span
            font-size: 1.2rem
            color: #59cfd3
            border: 1px solid #59cfd3
            border-radius: 1px
            padding: 0 2px
</style>
