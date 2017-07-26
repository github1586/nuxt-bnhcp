<template>
  <div class="c_detail">
    <div class="class_pay">
      <p class="jp_class">{{this.courseDetail.name}}</p>
      <p class="pad_p">
        <span class="price_sp"><i>¥</i>{{this.courseDetail.cost}}</span>
        <span class="price_original"><i>¥</i>{{this.courseDetail.mall_cost}}</span>
      </p>
      <div class="have_class" :class="{ zhao: this.courseDetail.isClass === '1',
																				man: this.courseDetail.isClass === '2',
																				xia: this.courseDetail.isClass === '3',
																				jie: this.courseDetail.isClass === '4',
																				shang: this.courseDetail.isClass === '5',
																				}" ></div>
    </div>
    <div class="bottom_con">
      <div class="cls_mark">
        <ul>
          <li v-show="this.courseDetail.retreat_rule == 1"><span>随时退班</span></li>
					<li v-show="this.courseDetail.is_transfer == 1"><span>随时插班</span></li>
					<li v-show="this.courseDetail.is_audition == 1"><span>免费试听</span></li>
        </ul>       
      </div>
      <div class="box_time tao">
        <p class="zhe"><span>{{this.courseDetail.end_date1}}</span><span class="on">{{this.courseDetail.class_time_names}}</span>前报名，享9.8折优惠</p>
        <i class="more_three"></i>
      </div> 
    </div>
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
.c_detail
	background-color: #fff
	.class_pay
		position: relative
		padding-left: 15px
		.jp_class
			color: $theme_gray666
			font-size: 1.5rem
			padding: 6px
			max-width: 60%
			text-overflow: ellipsis
			overflow: hidden
			white-space: nowrap
		.pad_p
			padding: 6px 0 5px 0
			span
				&.price_sp
					color: $theme_color
					font-size: 1.7rem
					i
						font-size: 1.1rem
						margin-right: 3px
						font-weight: bold
				&.price_original
					color: $theme_graybbb
					text-decoration: line-through
					padding-left: 5px
		.have_class
			width: 85px
			height: 68px
			background: url("/img/no_class.png") no-repeat 0 0
			background-size: 85px 68px
			position: absolute
			top: 0px
			right: 20px
			&.man_no
				background: url("/img/man_no.png") no-repeat 0 0
				background-size: 85px 68px
			&.man
				background: url("/img/man.png") no-repeat 0 0
				background-size: 85px 68px
			&.zhao
				background: url("/img/zhao.png") no-repeat 0 0
				background-size: 85px 68px
			&.shang
				background: url("/img/shang.png") no-repeat 0 0
				background-size: 85px 68px
			&.xia
				background: url("/img/xiajia.png") no-repeat 0 0
				background-size: 85px 68px
			&.jie
				background: url("/img/jie_class.png") no-repeat 0 0
				background-size: 85px 68px
	.sold_out  
		background:url("/img/sold_out.png") no-repeat 0 0
		background-size: 67px 53px
	.cls_mark
		border-bottom: 1px solid #dcdcdc
		padding: 12px 0 12px 15px
  ul
    overflow: hidden
    width: 100%
    float: left
    li
      float: left
      margin-right: 0.5rem
      span
        display: inline-block
        width: 100%
        padding-left: 1.5rem
        font-size: 1.3rem
        background: url('/img/icon_class_clas.png')no-repeat 0 1px
        background-size: 1.1rem 1.1rem
      &.on
        float: right
		img
			padding-right: 10px
	.bottom_con
		// height:79px
		background: #fafafa
		border-top: 1px solid transparent
		>div
			height: 40px
		
		>:nth-child(1)
			margin-top: 3px
		.box_time
			// padding: 13px 0 13px 15px
			padding: 10px
			position: relative
			&.zhe
				&::before
					content: '折'
					display: inline-block
					width: 14px
					height: 14px
					line-height: 1.6rem
					background: $theme_fu_org
					font-size: 1rem
					color: #fff
					border-radius: 3px
					text-align: center
					position: relative
					top: -1px
				
			
			&.jian
				&::before
					content: '减'
					display: inline-block
					width: 14px
					height: 14px
					line-height: 1.6rem
					background: #f36337
					font-size: 1rem
					color: #fff
					border-radius: 3px
					text-align: center
					position: relative
					top: -1px
				
			
			&.tuan
				&::before
					content: '团'
					display: inline-block
					width: 14px
					height: 14px
					line-height: 1.6rem
					background: $theme_fu_org
					font-size: 1rem
					color: #fff
					border-radius: 3px
					text-align: center
					position: relative
					top: -1px
			&.tao
				&::before
					content: '套'
					display: inline-block
					width: 14px
					height: 14px
					line-height: 14px
					background: $theme_color
					font-size: 10px
					color: #fff
					border-radius: 3px
					text-align: center
					position: relative
					top: -1px
			p
				font-size: 1.2rem 
				display: inline-block
				span
					margin-right: 10px
					&.on
						margin-right: 0
			.more_three
				float: left
				display: inline-block
				width: 30px
				height: 100%
				background: url('/img/icon_more_three.png')no-repeat 0px center
				background-size: 19px 4px 
				position: absolute
				top: 0
				right: 10px
  // 课程详情--即将开抢
	.hav_admissions 
		width: 67px
	    height: 53px
	    background: url(/img/icon_admissions.png) no-repeat 0 0
	    background-size: 67px 53px
	    position: absolute
	    top: 20px
	    right: 20px
</style>
