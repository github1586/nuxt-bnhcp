<template>
  <div>
    <div>
      <course-header v-on:keyup.13="submits()"></course-header>
      <div class="container full">
        <div class="order_sort">
          <!-- 选项卡头部 -->
          <ul class="order_sort_u clearfix">
            <li class="tabslist">
              <a :class="{on: serachBy == 'location'}" href="javascript:" @click="activeSort('location')" class="tab_swi_a">{{location}}</a>
              <transition name="showlist">
                <div class="search_tab" id="citylocation" v-show="serachBy == 'location'">
                  <div class="left_area">
                    <p v-for="(value,index) in cityArr"  :key="index"  :class="{activeCity: changeActivated == index}" @click="chooseActive(index,'','location')" >{{value}}</p>
                  </div>
                  <div class="right_area">
                    <div class="right_area_d">
                      <div class="rigth_third">
                        <a href="javascript:;" class="switch_a area_r mar_l third_menu">全部</a>
                      </div>
                      <div class="right_third">
                        <a href="javascript:;" class="switch_a area_r mar_l third_menu on">双榆树</a>
                        <div class="third_menu_con current">
                          <ul>
                            <li><a href="javascript:;">雅思</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>	
                  </div>
                </div>
              </transition>
            </li>
            <li class="tabslist" >
              <a :class="{on: serachBy == 'class'}" href="javascript:" @click="activeSort('class')" class="tab_swi_a">{{this.coursenames}}</a>
              <transition name="showlist">
                <div class="search_tab" id="courseClass" v-show="serachBy == 'class'">
                  <div class="left_area">
                    <p v-for="(value,index) in classGrade.gradeOne"  :key="index" :data-id="value.gradeId"  :class="{activeCity: changeActivated == index}" @click="chooseActive(index,value.gradeId,value.class_name)" >{{value.class_name}}</p>
                  </div>
                  <div class="right_area">
                    <div class="right_area_d">
                      <div class="rigth_third">
                        <p @click="chooseClass(gradeOneName, currentId, 1)"><a class="switch_a area_r mar_l third_menu">全部</a></p>
                      </div>
                      <div class="right_third" v-for="(items,index) in classGrade.gradeTwo" :key="index">
                        <a  :class="{active: isActive == index}" href="javascript:;" :data-id="items.gradeTwoId" :data-pid="items.pid" class="switch_a area_r mar_l third_menu" @click="clickActive(index)">{{items.twoClass_name}}</a>
                        <div class="third_menu_con" v-show="isActive == index">
                          <ul>
                            <li @click="chooseClass(items.twoClass_name, items.gradeTwoId, 2)"><a href="javascript:;">全部</a></li>
                            <li v-for="(item,indexs) in classGrade.gradeThree" v-if="item.pid == items.gradeTwoId" :key="indexs" @click="chooseClass(item.threeClass_name, item.gradeThreeId, 3)"><nuxt-link to="/coursehome" :class="{on: coursenames === item.threeClass_name}">{{item.threeClass_name}}</nuxt-link></li>
                          </ul>
                        </div>
                      </div>
                    </div>	
                  </div>
                </div>
              </transition>
            </li>
            <li class="tabslist">
              <a :class="{on: serachBy == 'sort'}"  @click="activeSort('sort')" href="javascript:" :sortByType = "this.sort" class="tab_swi_a">{{this.sort}}</a>
              <transition name="showlist">
                <div class="search_tab min_hieght" v-show="serachBy == 'sort'"> 
                  <ul class="localtion_list sort_list">
                    <li v-for="(item, index) in sortArr" :key="index" :data-sort="item.sortType" @click="courseListSort(item.name, item.sortType)"><i :class="item.classname"></i><a href="javascript:;">{{item.name}}</a></li>
                  </ul>
                </div>
              </transition>
            </li>
            <li class="tabslist">
              <a :class="{on: serachBy == 'filter'}" @click="activeSort('filter')" href="javascript:" class="tab_swi_a">{{filter}}</a>
              <transition name="showlist">
                <div class="search_tab" v-show="serachBy == 'filter'">
                  <!-- 筛选菜单 -->
                  <div class="sidebar shai">
                    <!-- 主体 -->
                    <div class="main">
                      <div class="qujian_zone" v-for="(item, indexs) in screen" :key="indexs">
                        <div class="info_tit">
                          <h3><span></span>{{item.title}}</h3>
                        </div>
                        <ul class="staus_sele">
                          <li v-for="(items,index) in item.classlist" class="staus" :key="items.id" :filter-id="items.id" @click="selectClassIds(indexs,index,items.id)">
                            <span :class="{on: selectScreen[indexs].classlist[index].status}">{{items.name}}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!-- 底部操作区 -->
                    <div class="bottom_ctrl">
                      <div class="cls_num"><span>10000</span>门课程</div>
                      <div class="reset" data-role="reset" @click="reset()">重置</div>
                      <div class="ok" @click="clicOk()">确认</div>
                    </div>
                  </div>
                </div>
              </transition>
            </li>
          </ul>
            <!-- 搜索选项卡 -->
          <div class="search_tabs">
          </div>
          <transition name="showcover"> 
            <div class="back_cover" v-show="serachBy"></div>
          </transition>
        </div>
        <div class="courselist">
          <course-list :courseIdType="coursenames" :sortByType="sort" :filterChange="filterChangeStatus" :selectScreen="selectScreen"></course-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from '~/plugins/axios'
  import courseList from '~/components/common/courselist.vue'
  import courseHeader from '~/components/common/courseHeader.vue'
  import {mapState, mapMutations} from 'vuex'
  import {syncClass, filter, courselist, getleckCourse} from '../ajax/getData'
  export default {
    async asyncData () {
      let { data } = await axios.get('/api/listhome')
      return {
        classGrade: data
      }
    },
    data () {
      return {
        // 位置左侧是选中的id
        changeActivated: 0,
        // 城市数组
        cityArr: '',
        // 一级选中名字
        gradeOneName: '艺术',
        // 当前列表请求类型
        currentType: '1',
        coursenames: '分类',
        // 请求条数
        offset: 0,
        // 课程列表数组
        couresListArr: [],
        // 分类数组
        classGrade: '',
        // 当前选中的分类课程
        currentId: '15963587',
        // 展示下拉的控制变量
        serachBy: null,
        isActive: '',
        // 选中筛选的数组 保存状态
        selectScreen: [],
        // 筛选数组
        filterArr: '',
        // 筛选的请求来的展示数据
        screen: '',
        // 位置
        location: '位置',
        // 课程分类
        courseClass: '分类',
        // 排序
        sort: '排序',
        // 筛选
        filter: '筛选',
        // 筛选状态
        filterChangeStatus: false,
        // 排序
        sortArr: [
          {classname: 'icon_bg_1', name: '智能排序', sortType: '1'},
          {classname: 'icon_bg_2', name: '离我最近', sortType: '2'},
          {classname: 'icon_bg_3', name: '人气最高', sortType: '3'},
          {classname: 'icon_bg_4', name: '老师好评', sortType: '4'},
          {classname: 'icon_bg_5', name: '价格最高', sortType: '5'},
          {classname: 'icon_bg_6', name: '价格最低', sortType: '6'}
        ]
      }
    },
    async beforeMount () {
    },
    components: {
      axios,
      courseList,
      courseHeader
    },
    created () {
      this.init()
    },
    computed: {
      ...mapState([
        'courseId', 'touchend', 'coursename', 'coursetype', 'courseSort'
      ])
    },
    mounted () {
      this.changeActivated = 0
      this.isSort()
      // 把vuex状态赋值到页面内变量 显示当前搜索项 这样子组件 才可以监听值的变化
      this.coursenames = this.coursename
      // 当从分类页面进来的时候 分类页面提交了搜索课程 级别  到列表页 赋值
      this.currentType = this.coursetype
    },
    methods: {
      ...mapMutations([
        'COURSE_PARAMS', 'COURSE_ARR', 'TOUCHEND', 'COURSE_ID', 'COURSE_TYPE', 'COURSE_SORT'
      ]),
      submits () {
        alert(1)
      },
      init () {
        this.cityArr = ['海淀区', '西城区', '朝阳区', '朝阳区', '西城区', '朝阳区', '西城区', '朝阳区', '丰台区', '丰台区', '丰台区', '东城区', '石景山']
      },
      async filterdata () {
        this.screen = await filter()
        // 筛选数组状态赋值 取反
        this.screen.forEach((item) => {
          // 每次外循环 声明空变量
          let listobj = {classlist: []}
          item.classlist.forEach((items, index) => {
            // push每个选项对应的状态
            listobj.classlist.push({status: false, id: items.id})
          })
          // 把每块push进去
          this.selectScreen.push(listobj)
        })
      },
      // 定位左侧选中
      async chooseActive (index, id, name) {
        // if (type === 'location') {
        //   this.changeActivated = index
        //   return
        // }
        this.changeActivated = index
        // 获取右侧对应的数据
        this.classGrade = await syncClass(id)
        // 给当前课程分类赋值
        this.currentId = id
        // 当前选中的一级名子赋值
        this.gradeOneName = name
      },
      async getcourse (type) {
        this.offset = 0
        let data = await courselist(this.offset, this.courseId, type, this.courseSort, this.selectScreen)
        // 提交数据 -》课程列表 状态管理
        this.COURSE_ARR(data)
        this.showLoading = false
      },
      reset () {
        // 重置按钮事件
        this.selectScreen.map((items) => {
          items.classlist.map((item) => {
            item.status = false
          })
        })
      },
      clicOk () {
        this.filterChangeStatus = !this.filterChangeStatus
        this.serachBy = null
      },
      // 选中课程thatn分类
      chooseClass (value, courseId, type) {
        this.serachBy = null
        // 兄弟页面传至
        this.COURSE_PARAMS(value)
        // 搜索课程id提交奥
        this.COURSE_ID(courseId)
        this.coursenames = this.coursename
        // 搜索课程类型嗯
        this.COURSE_TYPE(type)
        // 提交课程搜索状态改变
        this.TOUCHEND(false)
        // offset 归零
        this.offset = 0
        // 赋值当前列表请求currentType
        this.currentType = type
        // 获取筛选
        this.getcourse(type)
      },
      // tabs排序方式
      isSort () {
        switch (this.courseSort) {
          case '1':
            this.sort = '智能排序'
            break
          case '2':
            this.sort = '离我最近'
            break
          case '3':
            this.sort = '人气最高'
            break
          case '4':
            this.sort = '老师好评'
            break
          case '5':
            this.sort = '价格最高'
            break
          case '6':
            this.sort = '价格最低'
            break
          default:
            this.sort = '排序'
            break
        }
      },
      // 排序课程
      courseListSort (name, type) {
        // 提交vuex的排序状态
        this.COURSE_SORT(type)
        // 提交课程搜索状态改变
        this.TOUCHEND(false)
        // offset 归零
        this.offset = 0
        // 排序类别赋值
        this.sort = name
        // 点击排序重新请求一次
        this.getcourse(this.currentType)
        // 关闭下拉列表
        this.serachBy = null
      },
      // 展示对应的下拉分类
      async activeSort (type) {
        if (type === 'filter' && this.screen.length === 0) {
          // 调用渲染数据
          this.filterdata()
        }
        if (this.serachBy !== type) {
          this.serachBy = type
        } else {
          this.serachBy = null
        }
      },
      // 三级分类选中展开
      clickActive (type) {
        this.isActive = type
      },
      // 筛选点击选中
      selectClassIds (indexs, index, id, filterId) {
        // 改变选中的状态反转
        if (id.indexOf('^') === -1) {
          this.selectScreen[indexs].classlist.splice(index, 1, {status: !this.selectScreen[indexs].classlist[index].status, id})
        } else {
          // 移除第五组的所有状态 然后取反
          this.selectScreen[4].classlist.map((item) => {
            item.status = false
          })
          this.selectScreen[indexs].classlist.splice(index, 1, {status: !this.selectScreen[indexs].classlist[index].status, id})
        }
      },
      async updateData () {
        this.TOUCHEND(false)
        let data = await getleckCourse(this.$route.query.name, 0)
        // 提交数据 --》状态管理
        this.COURSE_ARR(data)
        // 小于15条 限时暂无更多
        if (data.data.length < 15 && data.data.length !== 0) {
          this.TOUCHEND(true)
          return false
        }
      }
    },
    watch: {
      '$route': 'updateData'
    }
  }
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
.courselist
  margin-top: 44px
.order_sort
  width: 100%
  height: 46px
  line-height: 44px
  border-bottom: 1px solid #d9d9d9
  background: #fff
  margin: 0 0 10px 0
  position: fixed
  z-index: 1100
  .order_sort_u
    width: 100%
    position: relative
    // overflow: hidden
    .tabslist
      width: 25%
      float: left
      background: url("/img/smart_line.png") no-repeat right 12px
      background-size: 1px 20px
      &.last
        background-image: none
        position: relative
        // 机构，课程选项
        .select_menu
          width: 80px
          font-size: 1.2rem
          background-color: #fff
          border-radius: 2px
          display: none
          padding: 10px 0
          margin: 0 0 0 -40px
          position: absolute
          left: 50%
          right: 0
          a
            height: 30px
            line-height: 30px
            display: block
            background: none
            padding-right: 0
            &.on
              color: #ef3f41
              background: none
      >a
        font-size: 1.4rem
        text-decoration: none
        color: #484848
        display: inline-block
        height: 100%
        width: 100%
        text-overflow: ellipsis
        overflow: hidden
        white-space: nowrap        
        text-align: center
        background: url("/img/sorting_01.png") no-repeat 85% 19px	
        background-size: 10px 5px
        padding-right: 12px
        -webkit-tap-highlight-color: transparent
        border-bottom: 1px solid #ccc
        &.on
          color: #ef3f41
          background-image: url("/img/sorting_02.png")
          background-position: 85% 19px
      .search_tab
        position: absolute
        top: 45px
        left: 0
        width: 100%
        z-index: 100
        .localtion_list
          background: #fff
          overflow-y:scroll
          min-height: 250px
          max-height: 350px
          li
            height: 45px
            border-bottom: 1px solid 
            margin-left: 33px
            position: relative
            i
              float: left
              display: none
              width: 14px
              height: 11px
              background: url('/img/ok_go.png')no-repeat
              background-size: 15px 
              position: absolute
              top: 16px
              left: -20px
              &.on
                display: inline-block
            a
              display: inline-block
              float: left
              width: 85%
              height: 100%
              font-size: 1.4rem
              -webkit-tap-highlight-color: transparent
              position: relative
              &.on
                color:#ef4040
            
            span
              float:left
              font-size: 1.4rem
              &.on
                color:#ef4040
        .sort_list
          max-height: 300px
          li
            border-bottom: 1px solid #bbb
            i
              display: block
              width: 17px
              height: 17px
              top: 12px
              left: -23px
            a
              font-size: 1.4rem
              display: inline-block
              float: left

          .icon_bg_1
            background: url('/img/icon_sort_lisrt.png')no-repeat
            background-size: 17px 17px 
          
          .icon_bg_2
            background: url('/img/icon_me_jin.png')no-repeat
            background-size: 17px 17px 
          
          .icon_bg_3
            background: url('/img/icon_mast_star.png')no-repeat
            background-size: 17px 17px 
          
          .icon_bg_4
            background: url('/img/icon_teacher_good.png')no-repeat
            background-size: 17px 17px 
          
          .icon_bg_5
            background: url('/img/icon_pay_big.png')no-repeat
            background-size: 17px 17px 
          
          .icon_bg_6
            background: url('/img/icon_pay_big.png')no-repeat
            background-size: 17px 17px
        .sidebar
          max-height: 360px
          min-height: 360px
          overflow-y: scroll
          &.shai
            width: 100%
            background: #fff
            // 主体区域
            .main
              max-height: 100%
              overflow-y: auto
              // padding: 17px 0 10px 15px
              padding-bottom: 4.5rem
              .info_tit
                h3
                  height: 30px
                  background: #eee
                  line-height: 30px
                  span
                    display: inline-block
                    height: 12px
                    margin-right: 8px
                    border-left: 2px solid #ef4040
                    position: relative
                    top: 2px
              .staus_sele
                overflow: hidden
                border-bottom: 1px solid #eee
                padding: 5px 10px 5px 0px
                li
                  width: 25%
                  padding-left: 10px
                  float: left
                  &.on
                    span
                      color: #fff
                      background: #e4393c
                  span
                    text-align: center
                    border: 1px solid #e4393c
                    border-radius: 2px solid #eee
                    display: inline-block
                    width: 100%
                    height: 100%
                    line-height: 26px 
                    border-radius: 50px
                    border-color: #bbb
                    color: #333
                    font-size: 1.1rem
                    &.on
                      border-color: #e4393c 
                      background: #fde8e8
                      color: #e4393c
            // 区间选择
            // --公共部分
            .qujian_zone
              .title
                padding: 0 15px 0 0
                margin: 10px 0 8px 0
                p
                  font-size: 1.4rem
                  color: #484848
                  background: url(/img/shai_arrow.png) no-repeat right center
                  background-size: 13px 8px
                  padding: 0 15px 0 0
              // 时间区域
              .time_zone
                .time_tit
                  overflow: hidden
                  margin: 0 0 14px 0
                  .num_box,span
                    display: inline-block
                    float:left
                  .num_box
                    width: 65px
                    height: 25px
                    line-height: 25px
                    background: #eee
                    padding: 0 5px
                  span
                    color: #999
                    margin: 2px 4px 0 4px
              // 底部操作区
            .bottom_ctrl
              width: 100%
              height: 50px
              overflow: hidden
              background: #e7e7e7
              position: absolute
              left: 0
              bottom: 0
              .cls_num,.reset,.ok
                font-size: 1.4rem
                line-height: 42px
                text-align: center
                float: left
              .cls_num
                width: 50%
                color: #888
                line-height: 50px
                span
                  color: #888
              .reset
                background: #fff
                color: #999
                width: 80px
                height: 35px
                border: 1px solid #ddd
                line-height: 35px
                float: left
                margin-top: 7px
                margin-right: 10px
                border-radius: 3px
              .ok
                background: #ef4040
                color: #fff
                width: 80px
                height: 35px
                border: 1px solid #ef4040
                line-height: 35px
                margin-top: 7px
                float:right
                margin-right: 10px
                border-radius: 3px

.courselist
  position: relative
  top: 52px
.search_tabs
  position: relative
  overflow: hidden
  width: 100%
.showlist-enter-active, .showlist-leave-active
  transition: all .2s
  transform: translateY(0)
.showlist-enter, .showlist-leave-active
  opacity: 0
  transform: translateY(-100%)
.showcover-enter-active, .showcover-leave-active
  transition: opacity .2s
.showcover-enter, .showcover-leave-active
  opacity: 0
#courseClass,#citylocation
  height: 33rem
  // overflow: hidd
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
              &.on
                color: $theme_color
              &:active
                outline: none     
.back_cover
  position: fixed
  width: 100%
  height: 100%
  z-index: 10
  background-color: rgba(0,0,0,0.3)
.index-enter-active, .index-leave-active
  transition: opacity 0.1s
.index-enter, .index-leave-active
  opacity: 0            
</style>
