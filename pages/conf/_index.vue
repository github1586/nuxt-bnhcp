<template>
<div>
  <top-hrader :name="this.name" :back="this.back" :className="this.className" :backgroundColor="this.backgroundColor"></top-hrader>  
  <div class="container full">
		<ul class="">
			<li>
				<a href="">支付密码 <span>设置</span></a>
			</li>
			<li>
				<a href="">常见问题</a>
			</li>
			<li>
				<a href="">意见反馈</a>
			</li>
			<li>
				<a href="">关于我们</a>
			</li>
		</ul>
	</div>
  <yes-btn :val="this.val"></yes-btn>
</div>
</template>
<script>
import topHrader from '~/components/common/header.vue'
import yesBtn from '~/components/common/subscribe/yesbtn.vue'
export default {
  data () {
    return {
      name: '设置',
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
  padding-top: 45px
  ul
    background: #fff
    li
      height: 4.5rem
      padding: 1.5rem 1rem
      border-bottom: 1px solid $theme_grayf0
      a
        font-size: 1.5rem
        span
          font-size: 1.2rem
          float: right
          background: url('/img/arrow_qian.png')no-repeat right center
          background-size: 0.5rem 0.8rem 
          padding-right: 1rem
          -webkit-tap-highlight-color: transparent
</style>
