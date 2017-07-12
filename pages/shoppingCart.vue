<template>
  <div class="containers">
    <div class="herder">
      <p>购物车</p>
    </div>
    <div class="order_cart">
      <ul>
        <li>
					<div class="title_school">
						<h3>小佳教育培训机构</h3>
					</div>
          <div class="ser_rel_list new">
            <!-- 单节课-普通 -->
            <div class="ser_rel_con">
              <div class="content_txt_box">
                <ul class="con_r on" style="width:75%;padding-left:6px;">
                  <li class="tit_h1">
                    <h1>
                      <i>1564846</i>
                      <span class="zhe"></span>
                      <span class="tuan"></span>
                      <span class="jian"></span>
                      <span class="hui"></span>
                    </h1>
                  </li>
                  <li class="school_name">该法电视广告(该法电视广告该法电视广告)</li>
                  <li class="str_end_time"><span>2017-05-06</span>至<span>2017-08-06</span></li>
                  <li class="totle_mon">&yen<span>600</span><i>&yen300</i></li>
                  <li class="meybe_class">
                    已报<span>30</span>/<i>20</i>人
                    <p>20</p>
                  </li>
                  <li class="line_gray"></li>
                  <li>
                    <div class="cls_mark">
                      <ul>
                        <li><span>随时退班</span></li>
                        <li><span>随时插班</span></li>
                        <li><span>免费试听</span></li>
                      </ul>
                    </div>
                  </li>
                </ul>
								<b href="#" class="con_l">
                  <img src='/img/teacherHead/1_tpl_00.jpg' height="20%" width="100%">
                  <i class="name_teac">古呐博博</i>
                </b>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="no_content" v-show="no_content">
      <i class="icon menu"></i>
      <p class="margin_left_p">购物车为空,快
        <nuxt-link to="/coursehome">去选课</nuxt-link>吧</p>
    </div>
    <footer-tab></footer-tab>
  </div>
</template>

<script>
  import footerTab from '~components/home/Footertabs.vue'
  export default {
    data () {
      return {
        no_content: false
      }
    },
    components: {
      footerTab
    }
  }
</script>

<style lang="sass" scoped>
@import '~static/common/style.sass'
.containers
  .herder
    @include  wh(100%, 4.5rem)
    background: #f8f8f8
    p
      text-align: center
      line-height: 4.5rem
      font-size: 1.6rem
.no_content
  @include center
  margin-top: -6rem
  a
    color: $theme_color
.title_school
	margin: 0.5rem 0
	background: $theme_color
	color: #fff
	line-height: 3.5rem	
	padding-left: 3.3rem
.ser_rel_list
	.ser_rel_con
		background: #fff
	&.new
		padding: 0
		.ser_rel_con
			&.man_no
				background:#fff url("/img/man_no.png") no-repeat 96% 1rem
				background-size: 85px 68px
			&.man
				background:#fff url("/img/man.png") no-repeat 96% 1rem
				background-size: 85px 68px
			&.zhao
				background:#FFF url("/img/zhao.png") no-repeat 96% 1rem
				background-size: 85px 68px
			&.shang
				background:#fff url("/img/shang.png") no-repeat 96% 1rem
				background-size: 85px 68px
			&.xia
				background:#fff url("/img/xiajia.png") no-repeat 96% 1rem
				background-size: 85px 68px
			&.jie
				background: #fff url("/img/jie_class.png") no-repeat 96% 1rem
				background-size: 85px 68px
      border-bottom: 1px solid #dcdcdc
			border-top: 1px solid #dcdcdc
			-webkit-box-shadow: none
			box-shadow: none
			padding: 0 10px
			margin: 0 0 10px 0
			.content_txt_box
				overflow: hidden
				.con_r
					float: right
					li
						margin-bottom: 0.7rem
						font-size: 1.2rem
					.tit_h1
						h1
							font-size: 1.6rem
							margin-top: 19px
							i
								display: inline-block
								overflow: hidden
								max-width: 70%
								text-overflow: ellipsis
								white-space: nowrap
							span
								display: inline-block
								margin-top: 0.5rem
								margin-left: 3px
					.school_name
						text-overflow: ellipsis
						max-width: 200px
						white-space: nowrap
						overflow: hidden
					.school_name,.str_end_time,.week_time
						padding-left: 18px
						background: url('/img/icon_school.png')no-repeat 0 0
						background-size: 12px 12px 
						&.on
							background: url('/img/icon_tab_my.png')no-repeat 0 0
							background-size: 12px 12px
					.str_end_time
						background: url('/img/icon_clock_.png')no-repeat 0 0
						background-size: 12px 12px 
					.totle_mon
						color: #ef4040
						span
							font-size: 1.6rem
						i
							color: #999
							text-decoration: line-through
							margin-left: 5px
					.meybe_class
						span
							color: #ef4040
						p
							float: right
					.line_gray
						border-top: 1px solid #eee
						&.on
							width: 100%
		// 左部分内容
		.con_l
			width: 18%
			float: right
			padding: 15px 0px 0 0
			position: relative
			right: -3px
			.name_teac
				position: absolute
				bottom: 0
				left: 0
				background: #ef4040
				display: inline-block
				width: 100%
				color: #fff
				text-align: center
				opacity: 0.8
				font-size: 1rem
				height: 1.5rem
				line-height: 1.7rem
			img
				border: 1px solid #eee
			p
				font-size: 1.2rem
				text-align: center
				color: #666
				margin: 6px 0 0 0
				span
					color: #cf1b1b
.cls_mark
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
.empty_data
		@include sc(1rem, #666)
		text-align: center
		line-height: 2rem
.loading-enter-active, .loading-leave-active
	transition: opacity 1s
.loading-enter, .loading-leave-active
</style>
