<template>
  <div class="coureslist_container">
    <ul v-load-more="loaderMore" v-if="courseArr.length">
      <router-link tag='li' :to="{path: 'courseDetail/index', query: {id: items.courseId} }" :data-id="items.courseId" :key="index" v-for="(items, index) in courseArr">
        <div class="ser_rel_list new">
          <!-- 单节课-普通 -->
          <div class="ser_rel_con">
            <div class="content_txt_box">
              <b href="#" class="con_l">
                <img :src="'/img/teacherHead/'+items.teacher_actor" height="20%" width="100%">
                <i class="name_teac">{{items.teacherName}}</i>
              </b>
              <ul class="con_r on" style="width:80%;padding-left:6px;">
                <li class="tit_h1">
                  <h1>
										<i>{{items.name}}</i>
										<span class="zhe" v-if="items.is_discountRate === '1'"></span>
										<span class="tuan" v-if="items.is_groupPurchase === '1'"></span>
										<span class="jian" v-if="items.is_minus === '1'"></span>
										<span class="hui" v-if="items.is_discount === '1'"></span>
									</h1>
                </li>
                <li class="school_name">{{items.institutionsName}}({{items.campusesName}})</li>
                <li class="str_end_time"><span>{{items.open_date1}}</span>至<span>{{items.end_date1}}</span></li>
                <li class="week_time">{{filterWeeks(items.goods_week)}}</li>
                <li class="totle_mon on" :class="{tuan: items.is_signup == 2}">&yen;<span>{{items.mall_cost}}</span><i>&yen;{{items.cost}}</i></li>
                <li class="meybe_class">
                  已报<span>{{items.saled}}</span>/<i>{{items.total}}</i>人
                  <p>{{items.district}}</p>
                </li>
                <li class="line_gray"></li>
                <li>
                  <div class="cls_mark">
                    <ul>
                      <li v-show="items.retreat_rule == 1"><span>随时退班</span></li>
                      <li v-show="items.is_transfer == 1"><span>随时插班</span></li>
                      <li v-show="items.is_audition == 1"><span>免费试听</span></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </router-link>
    </ul>
		<no-content :content="noContent" v-show="this.courseArr.length===0"></no-content>
		<p class="empty_data" v-show="this.touchend">没有更多课程</p>
		<transition name="loading">
			<loading v-show="showLoading"></loading>
		</transition>
	</div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import {loadMore} from '../mixin/mixin.js'
import loading from './loading.vue'
import noContent from '~/components/common/no_content/no_content.vue'
import {courselist, getleckCourse} from '../../ajax/getData.js'
import {filterWeek} from '../../config/common.js'
export default {
  data () {
    return {
      // 请求条数
      offset: 0,
      // 是否可以请求
      preventRepeatreuqest: false,
      // 模糊查询的当前请求条数 0
      likeOffset: 0,
      // 是否显示加载动画
      showLoading: true,
      // 无内容是否显示
      isDisplayNo: false,
      // 无内容样式
      noContent: {
        class: 'class',
        name: '你要找的课，臣妾做不到呀'
      }
    }
  },
  mounted () {
    if (this.$route.query.name) {
      this.likeCourse()
    } else {
      this.initData()
    }
  },
  props: ['courseIdType', 'sortByType', 'filterChange', 'selectScreen'],
  mixins: [loadMore],
  computed: {
    ...mapState([
      'courseId', 'courseArr', 'touchend', 'coursetype', 'courseSort'
    ])
  },
  components: {
    loading,
    noContent
  },
  methods: {
    ...mapMutations([
      'COURSE_ARR', 'TOUCHEND', 'COURSE_TYPE'
    ]),
    setStyle (data) {
      // 如果数据为空 把空样式显示改为 true
      if (data.data.length === 0) this.isDisplayNo = true
      if (data.data.length < 12) this.TOUCHEND(false)
      // 提交课程列表
      this.COURSE_ARR(data)
      this.showLoading = false
    },
    async likeCourse () {
      let data = await getleckCourse(this.$route.query.name, this.likeOffset)
      this.setStyle(data)
    },
    async initData () {
      this.offset = 0
      let data = await courselist(this.offset, this.courseId, this.coursetype, this.courseSort, this.selectScreen)
      this.setStyle(data)
    },
    filterWeeks (value) {
      return filterWeek(value)
    },
    // 获取老师头像
    getTeacherHead () {
      var randnum = parseInt(Math.random() * (100 - 0))
      randnum = randnum < 10 ? '0' + randnum : randnum
      var url = `/img/teacherHead/1_tpl_${randnum}.jpg`
      return url
    },
    controllerLoad () {
      if (this.touchend) {
        return
      }
      // 到达底部防止重复加载
      if (this.preventRepeatreuqest) {
        return
      }
      // 更改变量为true 禁止再次加载
      this.preventRepeatreuqest = true
      // loading显示
      this.showLoading = true
      if (this.$route.query.name) { // 判断谁加offset
        this.likeOffset += 15
      } else {
        this.offset += 15
      }
    },
    setData (data) {
      // 提交数据 --》状态管理
      this.COURSE_ARR(data)
      // 恢复控制变量为false
      setTimeout(() => {
        this.preventRepeatreuqest = false
        // 恢复控制变量为false
        this.showLoading = false
      }, 2000)
      // 小于15条 限时暂无更多
      if (data.data.length < 15) {
        this.TOUCHEND(true)
        return false
      }
    },
    // 加载到底部加载更多
    async likeLoadMore () {
      this.controllerLoad() // 设置变量是否可以再次加载
      let data = await getleckCourse(this.$route.query.name, this.likeOffset)
      // 提交数据 --》状态管理
      this.setData(data)
    },
    // 加载到底部加载更多
    async filterLoadMore () {
      this.controllerLoad() // 设置变量是否可以再次加载
      let data = await courselist(this.offset, this.courseId, this.coursetype, this.courseSort, this.selectScreen)
      // 提交数据 --》状态管理
      this.setData(data)
    },
    loaderMore () { // 加载更多的方法
      if (this.$route.query.name) {
        this.likeLoadMore() // 如果有参数 就查询走模糊查询
      } else {
        this.filterLoadMore() // 然则 查询筛选的把
      }
    },
    initOffset () {
      this.offset = 0
      this.TOUCHEND(false)
    }
  },
  watch: {
    courseIdType: function (value) {
      this.initOffset()
      // this.isDisplayNo = false
    },
    sortByType: function (value) {
      this.initOffset()
    },
    filterChange: function (value) {
      this.initData()
      this.TOUCHEND(false)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~static/common/style.sass'
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
							.zhe
								&:after
									content: '折'
									display: inline-block
									width: 16px
									height: 16px
									line-height: 17px
									background: #ff780b
									font-size: 1rem
									color:#fff
									border-radius: 3px
									text-align: center
									position: relative
									top: -7px
							.hui
								&:after
									content: '慧'
									display: inline-block
									width: 16px
									height: 16px
									line-height: 17px
									background: #e4393c
									font-size: 1rem
									color:#fff
									border-radius: 3px
									text-align: center
									position: relative
									top: -7px
							.tao
								&:after
									content: '套'
									display: inline-block
									width: 16px
									height: 16px
									line-height: 1.8rem
									background:  #ef4040
									font-size: 1rem
									color:#fff
									border-radius: 3px
									text-align: center
									position: relative
									top: -7px
							.tuan
								&:after
									content: '团'
									display: inline-block
									width: 16px
									height: 16px
									line-height: 17px
									background: #f36337
									font-size: 1rem
									color:#fff
									border-radius: 3px
									text-align: center
									position: relative
									top: -7px
							.jian
								&:after
									content: '减'
									display: inline-block
									width: 16px
									height: 16px
									background: #ef4040
									font-size: 1rem
									color: #fff
									border-radius: 3px
									text-align: center
									margin-left: 3px
									position: relative
									line-height: 17px
									top: -7px
									left: -2px
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
					.week_time
						background: url('/img/icon_week_day.png')no-repeat 0 0
						background-size: 12px 12px 
					.totle_mon
						color: #ef4040
						&.on
							&:before
								content: '抢报价'
								display: inline-block
								width: 40px
								height: 15px
								font-size: 1rem
								color: #ef4040
								border: 1px solid #ef4040
								text-align: center
								border-radius: 5px
								margin-right: 3px
								line-height: 16px
								position: relative
								top: -2px
						&.tuan
							&:before
								content: '团报价'
								display: inline-block
								width: 40px
								height: 15px
								font-size: 1rem
								color: #ef4040
								border: 1px solid #ef4040
								text-align: center
								border-radius: 5px
								margin-right: 3px
								line-height: 16px
								position: relative
								top: -2px
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
			width: 20%
			float: left
			padding: 15px 0 0 0
			position: relative
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
	opacity: 0
</style>
