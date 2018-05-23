<template>
  <div class="cls_t_infor right_bar" @touchmove.prevent> 
		<div class="activeImg end_active"></div>
		<div class="cls_banner"><img src="/img/header_pic.jpg" alt=""></div>
		<p>
			<a @click="go()" class="back_page"></a>
			<a href="tel:400-40000000" class="icon_phone"></a>
			<a href="javascript:" @click="gobar()" class="more_con icon_btn"></a>
		</p>
		<div class="opa_abso">
			<img src="/img/opa_jx.png" alt="">
			<div class="le_rig">
				<span class="left_s">已报{{this.courseDetail.saled}}/{{this.courseDetail.total}}人</span>
				<span class="right_s">浏览量{{this.courseDetail.browse_number}}</span>
			</div>       
		</div>
    <pull-down v-show="isDisplayBar"></pull-down>
	</div>
</template>
<script>
import { mapState } from 'vuex'
import pullDown from '~/components/common/pullDown.vue'
export default {
  data () {
    return {
      isDisplayBar: false
    }
  },
  computed: {
    ...mapState([
      'courseDetail'
    ])
  },
  methods: {
    go () {
      this.$router.go(-1)
    },
    gobar () {
      this.isDisplayBar = !this.isDisplayBar
      document.body.scrollTop = 0
    }
  },
  components: {
    pullDown
  }
}
</script>
<style lang="sass" scoped>
// 课程详情区域
.cls_t_infor
	// height: 150px
	padding: 0
	margin: 0
	position: relative
	// 图片盛放容器
	.cls_banner
		position: relative
		height: 0
		padding-top: 62.5%
		background: #fff
		overflow: hidden
		position: relative
		img
			width: 100%
			position: absolute
			left: 0
			top: 0
		.groupClass
			position: absolute
			bottom: 41px
			right: 0
			width: 125px
			height: 68px
			&.groupSuccess
				background: url(/img/groupSuccess.png)no-repeat right bottom
				background-size: 100% 100% 
	.more_con
		width: 30px
		height: 30px
		background: url("/img/icon_more.png") no-repeat 0 0
		background-size: 30px 30px
		position: absolute
		top: 13px
		right: 13px	
		z-index: 1002
		-webkit-tap-highlight-color: transparent
	.icon_phone
		width: 30px
		height: 30px
		background: url("/img/icon_phone.png") no-repeat 0 0
		background-size: 30px 30px
		position: absolute
		top: 13px
		right: 48px	
		z-index: 1002
	.back_page
		width: 3rem
		height: 3rem
		background: url("/img/icon_back_page.png") no-repeat 0 0
		background-size: 30px 30px
		position: absolute
		top: 13px
		left: 13px	
		z-index: 1002
	//已成团
	.icon_have_make 
		width: 126px
		height: 58px
		background: url("/img/icon_have_make.png") no-repeat 0 0
		background-size: 126px 58px
		position: absolute
		bottom: 50px
		right: 0px
		z-index: 1009
	.opa_abso
		width: 100%
		position: absolute
		bottom: 0
		overflow: hidden
    height: 45px
		img
			width: 100%
			height: 35px
			line-height: 35px
			opacity: 0.5
		.le_rig
			width: 100%
			padding: 0 44px
			position: absolute
			bottom: 6px
      height: 100%
			span
				font-size: 1.3rem
				color: #fff
				display: inline-block
				&.left_s
					float: left
				&.right_s
					float: right
	.teacher_tou
		p
			width: 6rem
			height: 6rem
			position: absolute
			top: 50%
			left: 50%	
			z-index: 1002	
			-webkit-transform: translate(-50%)	
			-o-transform: translate(-50%)	
			-ms-transform: translate(-50%)	
			transform: translate(-50%)
			img
				width: 100%
				border: 2px solid #f7becb
				border-radius: 50%
			  margin-top: -4rem
			i
				background: url('/img/icon_bg_boy.png')no-repeat right top
				background-size: 1.9rem 
				display: inline-block
				width: 1.9rem
				height: 1.9rem
				position: absolute
				right: 0
				&.on
					background: url('/img/icon_child_gril.png')no-repeat right top
					background-size: 1.9rem 	
		h3
			position: absolute
			right: 50%
			top: 50%
			-webkit-transform: translate(50%)	
			-o-transform: translate(50%)	
			-ms-transform: translate(50%)	
			transform: translate(50%)
			margin-top: 2.3rem
			color: #fff
			b
				font-weight: normal
			span
				font-size: 1.5rem
		overflow: hidden
		height: 4rem
		>div
			width: 50%
			height: 100%
			.left_s
				margin-top: 0.9rem	
			.right_s
				line-height: 1.6rem
			float: left
			color: #fff
			text-align: center
		position: absolute
		bottom: 0
		left: 0
		width: 100%
		background: rgba(0, 0, 0, .2)
	//课程已结束
	.opa_top
		width: 100%
		position: absolute
		top: 0
		overflow: hidden
		img
			width: 100%
			height: 34px
			line-height: 34px
			opacity: 0.5
		.op_complete
			width: 100%
			position: absolute
			bottom: 6px
			text-align: center
			span	
				font-size: 1.3rem
				color: #fff
				display: inline-block
</style>
