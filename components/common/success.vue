<template>
  <div class="menu_ding_box">
    <div class="order_result">
      <h3 class="h3_order">{{this.title}}</h3>
      <a class="success_ok" @click="orderList()">完成</a>
    </div>
    <div class="menu_ok mar_less">
      <img src="/img/icon_alert_scs.png" width="110" height="110" alt="" />
      <span>{{this.title}}</span>
      <p class="ping_con mar_t line_less">如有任何问题可拨打100-111-1234</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title'],
  methods: {
    orderList () {
      this.$router.push({path: '/orderList/index'})
    }
  }
}
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
.pay
  height: 100%
  background: #fff
header
  padding-top: 6px
  background: #fff
  border-bottom: 1px solid #bbb
  .header_back
    background: url(/img/icon_back_red.png) no-repeat
    background-size: 10px 16px
  .sel_txt,.right_gu
    color: $theme_gray666 
  .sel_txt
    display: inline-block
    width: 100%
  .drop_down
    position: relative
  .right_gu
    color: $theme_gray666
    font-size: 1.5rem
    margin-right: 1rem
    position: absolute
    top: 0
    right: 0
/* 订单结果页面 */
.menu_ding_box
  background: #fff
  // .border(@color:#dcdcdc)
  border-radius: 2px
  height: 100%
  .menu_ok
    text-align: center
    background-size: 4px 2px
    margin-top: 1rem
    height: 100%
    span
      font-size: 2.2rem
      color: #333
      display: block
      padding: 10px 0 0 0
      &.suc_ti
        font-size: 1.8rem
        font-weight: bold
    p
      color: #999999
      font-size: 1.2rem
      &.tip_support
        padding: 35px 0 0 0
      
      &.phone_contact
        padding: 19px 0 0 0
    .ping_con
      font-size: 1.2rem
      color: #999
      line-height: 22px
      padding: 0px 12px
      text-align: center
      &.mar_t
        margin: 3px 0 0 0
      
      &.line_less
        line-height: 18px
        &.mar_t
          margin-top: 8px
  .order_result
    position: relative
    border-bottom: 1px solid $theme_grayddd
    .h3_order
        text-align: center
        font-size: 1.7rem
        // margin: 1rem 0
        height: 44px
        line-height: 44px
        font-weight: normal
    .success_ok
      float: right
      position: absolute
      top: 1.4rem
      right: 1rem
      font-size: 1.5rem
</style>
