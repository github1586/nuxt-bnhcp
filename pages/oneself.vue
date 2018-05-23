<template>
  <div>
    <div class="container">
      <div class="head_case_box">
          <div class="head_portrait">
              <p><img src="img/con_lft_tp.jpg" alt=""></p>
              <h2>小仙女豆豆</h2>
              <span class="pay_num">余额：&yen;102.32</span>
          </div>
      </div>
      <div class="my_order">
          <p>我的订单<a href="/orderList/index">查看全部订单</a></p>
          <ul>
              <li><a class="obligation" href="">待付款</a></li>
              <li><a class="evaluated" href="">待评价</a></li>
              <li><a class="call_off" href="">已取消</a></li>
          </ul>
      </div>
      <div class="my_business">
          <ul>
              <li><p class="my_child"><span>家长交流</span><a href="/chat/index">点击进入聊天室</a></p></li>
              <li><p class="my_pay"><span>我的钱包</span><a href="/myWallet/index">管理孩子信息</a></p></li>
              <li><p class="my_favorable"><span>我的优惠</span><a href="/discount/index">试听课程</a></p></li>
              <li><p class="my_set"><a href="/conf/index"><span>设置</span></a></p></li>
          </ul>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import myFooter from '~/components/home/Footertabs.vue'
export default {
  components: {
    myFooter
  }
}
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
.container
  padding: 0
  .head_case_box
    height: 16.9rem
    background: #fff url('/img/my_bg_img.png')no-repeat 0 0
    background-size: 100% 70%
    position: relative
    .head_portrait
      position: absolute
      top: 50%
      left: 50%
      -webkit-transform: translate(-50%,-42%)
      -ms-transform: translate(-50%,-42%)
      -o-transform: translate(-50%,-42%)
      transform: translate(-50%,-42%)
      text-align: center
      p
        width: 8rem
        height: 8rem
        border-radius: 50%
        overflow: hidden
        padding: 0.3rem
        background: rgba(220, 220, 220, 0.4)
        box-shadow: 0rem 0rem .2rem #ddd
        img
          width: 100%
          height: 100%
          border-radius: 50%
          padding: 0.3rem
          background: rgba(200, 200, 200, 0.4)
          // border:2px solid #fff
    .pay_num
      display: inline-block
      margin-top: 0.5rem  
  .my_order
    background: #fff
    margin-top: 1rem
    p
      height: 4.8rem
      line-height: 4.5rem
      border-bottom: 1px solid $theme_grayddd
      padding-left: 4rem
      font-size: 1.5rem
      background: url('/img/icon_my_order.png')no-repeat 1.3rem center
      background-size: 1.2rem 1.4rem 
      padding-right: 1rem
      a
        float: right
        font-size: 1.3rem
        padding-right: 1.5rem
        color: $theme_gray333
        background: url('/img/more_tip.png')no-repeat right center
        background-size: 0.8rem 0.7rem
        padding-top: 0.3rem
    ul
      overflow: hidden
      height: 7.5rem
      li
        width: 33.33%
        float: left
        text-align: center
        a
          display: inline-block
          padding-top: 5rem
          font-size: 1.3rem
        .obligation
          background: url('/img/icon_pay.png')no-repeat center 1.8rem
          background-size: 2.3rem
        .evaluated
          background: url('/img/icon_ping.png')no-repeat 1.1rem 1.8rem
          background-size: 2.3rem
        .call_off
          background: url('/img/icon_cancel.png')no-repeat 0.8rem 1.8rem
          background-size: 2.3rem
  .my_business
    margin-top: 1rem
    margin-bottom: 6rem
    ul
      border-top: 1px solid $theme_grayddd
      >:last-child
        margin-top: 1rem
      li
        height: 4.5rem
        padding: 0 1rem
        background: #fff
        border-bottom: 1px solid $theme_grayddd
        p
          line-height: 4.54rem
          padding-left: 3rem
          font-size: 1.4rem
          color: $theme_gray666
          font-weight: bold
          width: 100%
          overflow: hidden
        .my_child
          background: url('/img/icon_my_child.png')no-repeat 0.5rem 1.1rem
          background-size: 2rem 2rem
        .my_pay
          background: url('/img/icon_my_pay.png')no-repeat 0.5rem 1.1rem
          background-size: 2rem 2rem
        .my_favorable
          background: url('/img/icon_listen.png')no-repeat 0.5rem 1.1rem
          background-size: 2rem 2rem
        .my_set
          background: url('/img/icon_set.png')no-repeat 0.5rem 1.1rem
          background-size: 2rem 2rem 
        span
          float: left
        a
          float: right
          display: inline-block
          // position: relative
          // left: 160px
          padding-right: 1.5rem
          color: $theme_gray999
          background: url('/img/pay_go.png')no-repeat right center
          background-size: 0.5rem 0.8rem
          font-weight: normal
</style>
