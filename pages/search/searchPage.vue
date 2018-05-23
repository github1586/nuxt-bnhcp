<template>
<div class="body"> 
  <course-header></course-header>
  <div class="full">
    <div class="hot_sear container">
      <div class="sear_con">
        <ul>
          <li><a href="">魅力舞蹈课</a></li>
          <li><a href="">舞动奇迹舞蹈课</a></li>
          <li><a href="">新星舞蹈少儿班</a></li>
        </ul>
      </div>
    </div>
    <div class="container latest_search">
      <p class="search_text">搜索历史</p>
      <ul>
        <li v-for="(item, index) in historys" :key="index">
					<a href="javascript:">{{item}}</a><span @click="deleteClose()"></span>
				</li>
      </ul>
    </div>
    <div class="clear_btn_contain" >
      <div class="clear_btn" @click="clearHistory()">清空搜索历史</div>
    </div>
  </div>
</div>
</template>
<script>
import courseHeader from '~/components/common/courseHeader.vue'
import {removeStore, getStore} from '../../config/common.js'
export default {
  data () {
    return {
      historys: []
    }
  },
  methods: {
    clearHistory () {
      removeStore('history')
      this.historys = []
    },
    deleteClose () {
    }
  },
  // computed: {
  //   history: function () {
  //     if (getStore('history')) { // 获取搜索记录
  //       this.historys = JSON.parse(getStore('history'))
  //       this.$forceUpdate()
  //     } else {
  //       this.historys = []
  //     }
  //     return !!this.historys.length
  //   }
  // },
  mounted () {
  },
  components: {
    courseHeader
  },
  head: {
    bodyAttrs: {
      class: 'fff'
    }
  }
}
</script>
<style lang="sass" scoped>
.body
  padding-top: 44px
  background: #fff
.full
  height: 100%  
.hot_sear
	min-height: 78px
	overflow: hidden
	border-bottom: #eaeaea
	.sear_tit
		font-size: 1.4rem
		color: #474747
		padding-top: 15px
	.sear_con
		ul
			li
				height: 34px
				border-bottom: 1px solid #eee
				a
					line-height: 20px
					font-size: 1.2rem
					color: #474747
					text-align: left
					border-radius: 5px
					display: inline-block
					width: 100%
					height: 100%
					line-height: 34px
					padding-left: 44px
					background: url("/img/search_page.png")no-repeat 22px 10px
					background-size: 15px 15px 
					-webkit-tap-highlight-color: transparent
.latest_search
	margin-top: 41px
	padding-left: 15px
	padding-right: 15px
	.search_text
		font-size: 1.4rem
		background-size: 5px 2px
		padding-bottom: 15px
	ul
		li
			height: 42px
			border-bottom: 1px solid #eee
			position: relative
			a
				display: inline-block
				width: 100%
				height: 100%
				line-height: 42px
				padding-left: 32px
				background: url('/img/icon_histersh.png')no-repeat 10px 15px
				background-size: 12px 12px
				-webkit-tap-highlight-color: transparent
			span
				position: absolute
				right: 6px
				width: 40px
				height: 100%
				background: url('/img/icon_close_histere.png')no-repeat 20px 15px
				background-size: 9px 9px 
/*------ 清除历史按钮 ------*/
.clear_btn_contain
	padding: 0 15px 0 15px
	margin: 15px 0 0 0
	.clear_btn
		height: 40px
		font-size: 1.4rem
		color: #474747
		line-height: 40px
		text-align: center
		background: #fff
		border-radius: 5px
</style>
