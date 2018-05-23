<template>
  <div>
    <header id="header" class="header">
      <p>全部科目</p>
      <a href="/search/searchPage" class="search_clas"></a>
    </header>
    <div class="content_main">
      <div class="search_tab classification" style="display:block">
        <div class="left_area">
          <p v-for="(value,index) in classGrade.gradeOne"  :key="index" :data-id="value.gradeId"  :class="{activeCity: changeActivated == index}" @click="chooseActive(index,value.gradeId,value.class_name)" >{{value.class_name}}</p>
        </div>
        <div class="right_area">	
          <div class="right_area_d on">
            <div class="head_img" :style="{background: `url(/img/headImg/${this.currentId}.jpg)no-repeat center center`}">
              <p @click="chooseClass(currentclass, currentId, 1)" :key="this.currentId" :data-id="this.currentId"><nuxt-link to="/coursehome">全部{{this.currentclass}}课程</nuxt-link><span></span></p>
            </div>
						<div class="right_third" v-for="(items,index) in classGrade.gradeTwo" :key="index">
							<a  :class="{active: isActive == index}" href="javascript:;" :data-id="items.gradeTwoId" :data-pid="items.pid" class="switch_a area_r mar_l third_menu" @click="clickActive(index)">{{items.twoClass_name}}</a>
							<div class="third_menu_con" v-show="isActive == index">
								<ul>
                  <li :data-id="items.gradeTwoId" @click="chooseClass(items.twoClass_name, items.gradeTwoId, 2)"><nuxt-link to="/coursehome">全部</nuxt-link></li>
									<li  v-for="(item,indexs) in classGrade.gradeThree" v-if="item.pid == items.gradeTwoId" :key="indexs" :data-id="item.gradeThreeId" @click="chooseClass(item.threeClass_name,item.gradeThreeId,3)"><nuxt-link to='/coursehome'>{{item.threeClass_name}}</nuxt-link></li>
								</ul>
							</div>
						</div>
          </div>
        </div>
      </div>
    </div>
    <my-Footer></my-Footer>
  </div>
</template>
<script>
import axios from '~/plugins/axios'
import myFooter from '~/components/home/Footertabs.vue'
import {mapState, mapMutations} from 'vuex'
import {syncClass} from '../ajax/getData'
export default {
  async asyncData () {
    let { data } = await axios.get('/api/listhome')
    return {
      classGrade: data
    }
  },
  data () {
    return {
      // 变化的课程名字
      currentclass: '艺术',
      // 当前选中
      currentId: '15963587',
      // 分类数组
      classGrade: '',
      // 位置左侧是选中的id
      changeActivated: 0,
      isActive: ''
    }
  },
  created () {
    this.init()
  },
  computed: {
    ...mapState([
      'courseId', 'touchend', 'coursetype'
    ])
  },
  mounted () {
    this.changeActivated = 0
  },
  methods: {
    ...mapMutations([
      'COURSE_PARAMS', 'TOUCHEND', 'COURSE_TYPE', 'COURSE_ID'
    ]),
    init () {
    },
    // 定位左侧选中
    async chooseActive (index, id, name) {
      this.changeActivated = index
      // 获取右侧对应的数据
      this.classGrade = await syncClass(id)
      // 设置动态名字
      this.currentclass = name
      // 更画背景
      this.currentId = id
    },
    chooseClass (name, courseId, type) {
      // 兄弟页面传至
      this.COURSE_PARAMS(name)
      // 搜索课程id提交奥
      this.COURSE_ID(courseId)
      // 搜索课程类型嗯
      this.COURSE_TYPE(type)
      // 提交课程搜索状态改变
      this.TOUCHEND(false)
    },
    gradetwo (value) {
      this.COURSE_PARAMS(value)
    },
    // 三级分类选中展开
    clickActive (type) {
      this.isActive = type
    }
  },
  components: {
    myFooter
  }
}
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
#header
  p
    font-size: 1.7rem
    line-height: 35px
.header
	background: #fff
	border-bottom: 1px solid $theme_grayddd
	p
		color: $theme_gray333
	.search_clas
		display: inline-block
		width: 2rem
		height: 1.4rem
		background: url('/img/search_page.png')no-repeat center center
		background-size: 1.4rem 1.4rem
		position: absolute
		top: 0
		right: 0
		margin-top: 1.3rem
		margin-right: 1.5rem
.sidebar_mask
	width: 100%
	height: 100%
	background: #000
	opacity: 0.5
	position: fixed
	left: 0
	top: 0
	z-index: 1355
.content_main
	width: 100%
	height: 100%
	padding-top: 44px
	overflow: hidden
	position: absolute
	left: 0
	top: 0
	// padding-right: 20px
	.left_main
		float: left
		height: 100%
		overflow-y: scroll
		ul
			li
				width: 68px
				height: 50px
				line-height: 50px
				color: #fff
				font-size: 1.4rem
				background: $theme_color
				text-align: center
				margin-bottom: 1px				
				&.on
					background: #fff
					color: $theme_color
	.marsk_opcity
		display: none
	.right_main
		// width: 100%		
		height: 100%
		overflow-x: hidden
		overflow-y: scroll
		margin-left: 80px
		padding-right: 12px
		position: relative
		.right_main_up
			width: 100%
			height: 30px
			line-height: 30px
			text-align: center
			color: #fff
			font-size: 1.4rem
			background: $theme_color
			border-radius: 2px
		.right_down_zong
			.right_main_down
				width: 100%
				height: 100%
				// position: absolute
				margin-top: 20px
				.right_main_down_zone
					width: 100%
					padding-bottom: 20px
					&.no_t
						margin-top: 0
					p
						font-size: 1.4rem
					.classify_fir
						overflow: hidden
						margin-top: 6px
						ul
							overflow: hidden
							margin-right: -5px
							li
								width: 33.33%
								float: left
								padding: 0 5px 5px 0
								a
									width: 100%
									height: 30px
									line-height: 30px
									display: block
									text-align: center
									background: #fff
									color: #484848
									font-size: 1.3rem
									&.all_class
										color: $theme_color
.classification
  height: 100%
  .left_area
    min-height: 100% !important
    padding-bottom: 6.5rem
    a
      padding: 1.3rem 0 1.3rem 1rem
  .right_area
    min-height: 100% !important
    padding-bottom: 6.5rem

.left_area
	width: 25%
	height: 100%
	overflow: scroll
	float: left
	background: #fff
	p
		display: block
		text-align: center
		background: #f0f0f0
		font-size: 1.2rem
		height: 40px
		line-height: 40px
		-webkit-tap-highlight-color:rgba(255,0,0,0)
		&.activeCity
			background: #fff
			border-left: 2px solid #ef4040
			-webkit-tap-highlight-color:rgba(255,0,0,0)
.right_area
    float: right
    width: 75%
    overflow: scroll
    height: 100%
    background: #fff
    .right_area_d
      padding: 0 1rem
      .right_third
        .third_menu
          background: url(/img/area_no_new.png)no-repeat right 16px
          background-size: 1.3rem 0.6rem
          display: inline-block
          width: 100%
          padding: 1rem 0
          line-height: 1.4rem
          font-size: 1.3rem
          &.active
            background: url(/img/area_no_new_on.png)no-repeat right 16px
            background-size: 1.3rem 0.6rem
        ul
          overflow: hidden
          border-top: 1px solid #eee
          border-left: 1px solid #eee 
          li
            float: left
            border-right: 1px solid #eee
            border-bottom: 1px solid #eee
            width: 33.33%
            a
              display: inline-block
              width: 100%
              height: 100%
              text-align: center
              -webkit-tap-highlight-color: transparent
              &:active
                outline: none   
.right_area
  background: #fff
  ul
    li
      line-height: 44px
.head_img
  width: 100%
  height: 6rem
  background: url('/img/head_img_bj.jpg')no-repeat center center
  background-size: 100% 100%
  margin-top: 1.5rem
  position: relative
  p
    font-size: 1.8rem
    color: #fff
    font-weight: bold
    padding: 2rem 0
    position: relative
    padding-left: 50%
    a
      position: absolute
      color: #fff
      display: inline-block
      height: 100%
      -webkit-transform: translate(-50%)
      -ms-transform: translate(-50%)
      -o-transform: translate(-50%)
      transform: translate(-50%)
      display: inline-block
  span
    display: inline-block
    width: 1.7rem
    height: 1.7rem
    background: url('/img/icon_more_head.png')no-repeat center center
    background-size: 1.7rem
    margin-left: 1rem
    position: absolute
    top: 2.5rem
    right: 2rem
</style>
