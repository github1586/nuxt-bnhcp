<template>
  <div class="course_infor">
    <div class="tit">
      <p><i></i>课程信息</p>
    </div>
    <ul class="link_lists">
      <li class="link">
        <a href="javascript:">
          主讲老师：<span>{{this.courseDetail.teacherName}}</span>
        </a>
      </li>
      <li class="spe_no_back">
        <a href="javascript:">
          <span class="deal_with">课程安排：</span>
          <div class="study_time">
            <span class="time_s">{{this.courseDetail.open_date1}}至{{this.courseDetail.end_date1}}</span>
            <span>{{filterWeeks(this.courseDetail.goods_week)}}</span>
          </div>
        </a>
      </li>
      <li class="link no_bottom">
        <a href="javascript:;">
          <i>上课地点</i>：<span>{{this.courseDetail.address}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {filterWeek} from '../../../config/common.js'
export default {
  computed: {
    ...mapState([
      'courseDetail'
    ])
  },
  methods: {
    filterWeeks (value) {
      return filterWeek(value)
    }
  }
}
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
.course_infor
	background-color: #fff
	margin-top: 10px
	padding-left: 10px
	.tit
		font-size: 1.4rem
		border-bottom: 1px solid #dcdcdc
		height: 3.5rem
		margin-bottom: 3px
		&.on
			border: 0
		
		p
			height: 35px
			line-height: 3.5rem
			font-weight: bold
			i
				height: 14px
				border-left: 2px solid $theme_color
				display: inline-block
				margin-right: 11px
				position: relative
				top: 2px
	.link_lists
		margin-bottom: 0
		li
			&.spe_no_back
				background: none
				height: 54px
				position: relative
			&.no_bottom
				height: auto
				padding: 9px 0
				line-height: 18px
				border-bottom: none
				a
					i
						float: left
					span
						font-size: 1.3rem
						display: inline-block
						margin-left: 60px
						position: relative
						text-align: left
						margin-top: -19px
			.deal_with
				float: left
				line-height: 54px
			.right_plan
				float: right
			a
				.study_time
					margin-top: 7px
					float: left
					span
						font-size: 1.2rem
						display: block
						line-height: 20px
				color: $theme_gray666
				span
					color: #484848
					font-size: 1.4rem
					padding-left: 0
					&.right_plan
						height: 35px
						line-height: 35px
						float: right
						color: $theme_color
						position: absolute
						top: 0
						right: 10px
						font-size: 1.2rem
					&.deal_with
						color: $theme_gray666
					&.time_s
						font-size: 1.3rem
</style>
