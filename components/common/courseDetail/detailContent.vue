<template>
  <div class="detail_content">
    <div class="tit">
      <p><i></i>课程概述</p>
    </div>
    <ul class="link_u">
      <li class="link">
        <p>所属校区</p>
        <ul>
          <li>天天钢琴</li>
        </ul>
      </li>
      <li class="">
        <p>适学人群</p>
        <ul>
          <li>{{this.courseDetail.person}}</li>
        </ul>
      </li>
      <li>
        <p class="target_teach">教学目标</p>
        <ul class="teach_ping">
          <li class="content_learn">{{this.courseDetail.teachingTarget}}</li>
          <li class="tip_more" data-role="hide_show" style="display: none">516568546</li>
        </ul>  
      </li>
      <li>
        <p class="target_teach">课程亮点</p>
        <ul class="teach_ping_zone">
          <li class="content_learn">{{this.courseDetail.couresStar}}</li>
          <li class="tip_more" data-role="hide_show" style="display: none">1565</li>
        </ul>  
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'courseDetail'
    ])
  }
}
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
.detail_content
	margin-top: 10px
	padding-left: 10px
	padding-bottom: 10px
	// overflow: hidden
	.role_team
		margin-top: 1.0rem
		li
			margin-top: 1.2rem
			p
				font-size: 1.2rem
				&.on
					&::after
						content: ""
						display: block
						width: 3px
						height: 3px
						background: $theme_gray999
						float: left
						position: relative
						top: 0.5rem
						margin-right: 0.5rem
		  :first-child
			p
				color: $theme_gray999
	&.fenxiao
		border: none
		border-bottom: 1px solid #eee
		box-shadow: none
	
	.tit
		font-size: 1.4rem
		p
			height: 35px
			font-weight: bold
			i
				height: 14px
				border-left: 2px solid $theme_color
				display: inline-block
				margin-right: 11px
				position: relative
				top: 2px
	.link_u
		margin-top: 12px
		>li
			margin-bottom: 12px
			p
				font-size: 1.3rem
				color: $theme_fu_org
			ul
				margin-top: 10px
				li
					&::before
						content: ''
						display: inline-block
						width: 4px
						height: 4px
						background: $theme_gray333
						border-radius: 50%
						margin-right: 5px
						position: relative
						top: -2px
					margin-top: 5px
					font-size: 1.3rem
		:last-child
			margin-bottom: 5px
.detail_content
	background: #fff
	// 标题
	.tit
		height: 3.5rem
		font-size: 1.4rem
		color: #474747
		// line-height: 35px;
		border-bottom: 1px solid #f2f2f2
		p
			line-height: 3.5rem
		a
			line-height: 3.7rem
</style>
