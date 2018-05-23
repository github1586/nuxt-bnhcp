<template>
<div>
  <top-hrader :name="this.name" :back="this.back" :className="this.className" :backgroundColor="this.backgroundColor"></top-hrader>  
  <div class="container">
    <h3>当前余额（元）</h3>
    <h1>88888.88</h1>
  </div>
  <yes-btn :val="this.val"></yes-btn>
  <p class="info_box_case">若需体现，查看余额明细，请下载<i>报哪好APP</i></p>
</div>
</template>
<script>
import topHrader from '~/components/common/header.vue'
import yesBtn from '~/components/common/subscribe/yesbtn.vue'
export default {
  data () {
    return {
      name: '确认订单',
      className: 1,
      backgroundColor: 1,
      back: 0,
      val: '保存'
    }
  },
  components: {
    topHrader,
    yesBtn
  }
}
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
.container
  padding: 0
  h3
    height: 5rem
    background: #353c41
    color: #fff
    padding-left: 1rem
    line-height: 7rem
    font-size: 1.5rem
  h1
    height: 16rem
    background: #353c41
    color: #fff
    font-weight: bold
    font-size: 6.3rem
    line-height: 11rem
    padding-left: 1rem
.btn_padding
  margin-top: 1rem
  width: 100%
  padding: 0 1rem
.info_box_case
  float: right
  font-size: 1.1rem
  margin-right: 1rem
  margin-top: 0.8rem
  i
    color: $theme_color
</style>
