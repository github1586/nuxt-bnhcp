<template>
  <div>
    <header id="header" class="header">
      <nuxt-link to="/" class="header_back"></nuxt-link>
      <div class="header_sear_sel">
        <div class="drop_down" data-role="selectFang">
          <span data-role="sel_txt" class="sel_txt">课程</span>
          <ul data-role="sel_list" class="sel_list">
            <li>课程</li>
            <li>机构</li>
          </ul>
        </div>
        <div class="header_sear_box">
          <input type="" placeholder="搜索课程、机构" class="header_sear_txt" />
          <a href="javascript: "></a>
        </div>
      </div>
    </header>
    <div class="container full">
      <div class="order_sort">
        <!-- 选项卡头部 -->
        <ul class="order_sort_u clearfix">
          <li @click="activeSort('location')">
            <a :class="{on: serachBy == 'location'}" href="javascript:" class="tab_swi_a">位置</a>
          </li>
          <li @click="activeSort('class')">
            <a :class="{on: serachBy == 'class'}" href="javascript:" class="tab_swi_a">分类</a>
          </li>
          <li @click="activeSort('sort')">
            <a :class="{on: serachBy == 'sort'}" href="javascript:" class="tab_swi_a">排序</a>
          </li>
          <li @click="activeSort('filter')">
            <a :class="{on: serachBy == 'filter'}" href="javascript:" class="tab_swi_a">筛选</a>
          </li>
        </ul>
          <!-- 搜索选项卡 -->
        <div class="search_tabs">
            <!-- 单个选项卡 -->
          <transition name="showlist">
            <div class="search_tab" id="citylocation" v-show="serachBy == 'location'">
              <div class="left_area">
                <p v-for="(value,index) in cityArr"  :key="index"  :class="{activeCity: changeActivated == index}" @click="chooseActive(index)" >{{value}}</p>
              </div>
              <div class="right_area">
                <div class="right_area_d">
                  <div class="rigth_third">
                    <a href="javascript:;" class="switch_a area_r mar_l">全部</a>
                  </div>
                  <div class="right_third">
                    <a href="javascript:;" class="switch_a area_r mar_l third_menu on">双榆树</a>
                    <div class="third_menu_con current">
                      <ul>
                        <li><a href="javascript:;">雅思</a></li>
                        <li><a href="javascript:;">SAT</a></li>
                        <li><a href="javascript:;">托福</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">ACT</a></li>
                      </ul>
                    </div>
                  </div>
                </div>	
              </div>
            </div>
          </transition>
          <transition name="showlist">
            <div class="search_tab" id="courseClass" v-show="serachBy == 'class'">
              <div class="left_area">
                <p v-for="(value,index) in classArr"  :key="index"  :class="{activeCity: changeActivated == index}" @click="chooseActive(index)" >{{value}}</p>
              </div>
              <div class="right_area">
                <div class="right_area_d">
                  <div class="rigth_third">
                    <a href="javascript:;" class="switch_a area_r mar_l">全部</a>
                  </div>
                  <div class="right_third">
                    <a  :class="{active: isActive == 1}" href="javascript:;" class="switch_a area_r mar_l third_menu" @click="clickActive(1)">双榆树</a>
                    <div class="third_menu_con" v-show="isActive == 1">
                      <ul>
                        <li><a href="javascript:;">雅思</a></li>
                        <li><a href="javascript:;">SAT</a></li>
                        <li><a href="javascript:;">托福</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">ACT</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="right_third">
                    <a :class="{active: isActive == 2}" href="javascript:;" class="switch_a area_r mar_l third_menu" @click="clickActive(2)">双榆树</a>
                    <div class="third_menu_con" v-show="isActive == 2">
                      <ul>
                        <li><a href="javascript:;">雅思</a></li>
                        <li><a href="javascript:;">SAT</a></li>
                        <li><a href="javascript:;">托福</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">ACT</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="right_third">
                    <a :class="{active: isActive == 3}" href="javascript:;" class="switch_a area_r mar_l third_menu" @click="clickActive(3)">中关村</a>
                    <div class="third_menu_con" v-show="isActive == 3">
                      <ul>
                        <li><a href="javascript:;">雅思</a></li>
                        <li><a href="javascript:;">SAT</a></li>
                        <li><a href="javascript:;">托福</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">ACT</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="right_third">
                    <a :class="{active: isActive == 4}" href="javascript:;" class="switch_a area_r mar_l third_menu" @click="clickActive(4)">中关村</a>
                    <div class="third_menu_con" v-show="isActive == 4">
                      <ul>
                        <li><a href="javascript:;">雅思</a></li>
                        <li><a href="javascript:;">SAT</a></li>
                        <li><a href="javascript:;">托福</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">ACT</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="right_third">
                    <a :class="{active: isActive == 5}" href="javascript:;" class="switch_a area_r mar_l third_menu" @click="clickActive(5)">中关村</a>
                    <div class="third_menu_con" v-show="isActive == 5">
                      <ul>
                        <li><a href="javascript:;">雅思</a></li>
                        <li><a href="javascript:;">SAT</a></li>
                        <li><a href="javascript:;">托福</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">ACT</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="right_third">
                    <a :class="{active: isActive == 6}" href="javascript:;" class="switch_a area_r mar_l third_menu">中关村</a>
                    <div class="third_menu_con" v-show="isActive == 6" @click="clickActive(6)">
                      <ul>
                        <li><a href="javascript:;">雅思</a></li>
                        <li><a href="javascript:;">SAT</a></li>
                        <li><a href="javascript:;">托福</a></li>
                        <li><a href="javascript:;">留学预科</a></li>
                        <li><a href="javascript:;">ACT</a></li>
                      </ul>
                    </div>
                  </div>
                </div>	
              </div>
            </div>
          </transition>
          <transition name="showlist">
            <div class="search_tab min_hieght" v-show="serachBy == 'sort'"> 
              <ul class="localtion_list sort_list">
                <li><i class="icon_bg_1"></i><a href="">智能排序</a></li>
                <li><i class="icon_bg_2"></i><a href="">离我最近</a></li>
                <li><i class="icon_bg_3"></i><a href="">人气最高</a></li>
                <li><i class="icon_bg_4"></i><a href="">老师好评</a></li>
                <li><i class="icon_bg_5"></i><a href="">价格最高</a></li>
                <li><i class="icon_bg_6"></i><a href="">价格最低</a></li>
              </ul>
            </div>
          </transition>
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
                      <li v-for="(items,index) in item.classlist" class="staus" :key="items.id" @click="selectClassIds(indexs,index,items.id)">
                        <span :class="{on: selectScreen[indexs].classlist[index].status}">{{items.name}}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- 底部操作区 -->
                <div class="bottom_ctrl">
                  <div class="cls_num"><span>10000</span>门课程</div>
                  <div class="reset" data-role="reset">重置</div>
                  <div class="ok">确认</div>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <transition name="showcover"> 
          <div class="back_cover" v-show="serachBy"></div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  // import Updownload from '~components/common/Updownload.vue'
  export default {
    data () {
      return {
        changeActivated: 0,
        cityArr: '',
        classArr: '',
        serachBy: null,
        isActive: '',
        selectScreen: [],
        screen: [
          {
            title: '班级类型',
            classlist: [
              {name: '免费试听', id: 'cdvd65v4568d8v4515'},
              {name: '随时插班', id: 'cdvdvcs6456d65v8d8v4515'},
              {name: '随时退班', id: 'cdvd6554654vfdv4515'},
              {name: '未开课', id: 'cdvd65e456456dff8v4515'}
            ]
          },
          {
            title: '活动优惠',
            classlist: [
              {name: '连报优惠', id: 'cdvd65464565v8d8v4515'},
              {name: '限时团购', id: 'cdvd45645754645667vcsd2165v8d8v4515'},
              {name: '折扣', id: 'cdvd65645654646756dsfgd8v4515'},
              {name: '立减', id: 'cdvd455456456565vfdv4515'}
            ]
          },
          {
            title: '上课时间',
            classlist: [
              {name: '周一', id: 'cdvd4545534546365v8d8v4515'},
              {name: '周二', id: 'cdvdv454csd4545665v23238d8v4515'},
              {name: '周三', id: 'cdvd4365dsf456456gd8v23224515'},
              {name: '周四', id: 'cdvd45635435464565vfdv4515'},
              {name: '周五', id: 'cdv5435d65ed546546ff8v4515'},
              {name: '周六', id: 'cdv3554d65ed456546ff8v4515'},
              {name: '周日', id: 'cdvd54646456645645665edff8v4515'}
            ]
          },
          {
            title: '具体时间',
            classlist: [
              {name: '上午', id: '576ut76547654erty'},
              {name: '下午', id: 'cdvdvcsdefe45654645654df65546v8d8v4515'},
              {name: '晚上', id: 'cdvd6fefew67456576f5dsfgd8v4515'}
            ]
          },
          {
            title: '价格区间',
            classlist: [
              {name: '0~1000', id: '576ut56765765erty'},
              {name: '1000~3000', id: '5767567uterty'},
              {name: '3000~5000', id: '576u756756terty'},
              {name: '5000~7000', id: '576u65756te76567rty'},
              {name: '7000~9000', id: '576ut76567erty'},
              {name: '9000以上', id: '576ut67567erty'}
            ]
          }
        ]
      }
    },
    created () {
      this.init()
    },
    mounted () {
      this.chooseActive()
    },
    methods: {
      init () {
        this.classArr = ['艺术', '其它', '体育', '语言', '留学', '小学', '小升初', '初中', '中考', '高中', '益智', '高考', '学前', '营地', '其它']
        this.cityArr = ['海淀区', '西城区', '朝阳区', '朝阳区', '西城区', '朝阳区', '西城区', '朝阳区', '丰台区', '丰台区', '丰台区', '东城区', '石景山']
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
      chooseActive (index) {
        this.changeActivated = index
      },
      // 展示对应的下拉分类
      async activeSort (type) {
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
      selectClassIds (indexs, index, id) {
        // 改变选中的状态反转
        this.selectScreen[indexs].classlist.splice(index, 1, {status: !this.selectScreen[indexs].classlist[index].status, id})
      }
    }
  }
</script>
<style lang="sass" scoped>
header
  background: #fff
  border-bottom: 1px solid #b2b2b2
  .header_back
    background: url('/img/icon_back_red.png')no-repeat
    background-size: 10px 16px
  .header_sear_sel
    margin-top: 2px
    margin-left: 43px
    margin-right: 10px
    padding-bottom: 2px
    .drop_down
      width: 48px
      height: 30px
      font-size: 1.2rem
      line-height: 30px
      color: #474747
      text-align: left
      background: url(/img/header_drop_down.png) no-repeat 36px center #eee
      background-size: 8px 5px
      float:left
      position: relative
      padding: 0 0 0 8px
      border-top-left-radius: 50px 
      border-bottom-left-radius: 50px
      .sel_list
        width: 50px
        background: #fff
        text-align: center
        border: 1px solid #eee
        border-radius: 0.3rem
        display: none
        padding: 5px 0
        position: absolute
        left: 0
        top: 25px
    .header_sear_box
      margin-left: 48px
      margin-top: -30px
      position: relative
      a
        position: absolute
        display: none
        top: 5px
        right: 5px
        width: 14px
        height: 14px
        border-radius: 50%
        background: url('/img/icon_close.png')no-repeat center center
        background-size: 14px 14px
        &.on
          display: block
      .header_sear_txt
        width: 100%
        height: 30px
        font-size: 1.2rem
        color:#474747
        background: #f5f5f5 url("/img/search_page.png") no-repeat 5px 9px
        background-size: 14px 13px
        border-top-right-radius: 50px
        border-bottom-right-radius: 50px
        border-left: 1px solid #ccc
        display: block
        padding: 0 0 0 25px
.order_sort
  width: 100%
  height: 46px
  line-height: 44px
  border-bottom: 1px solid #d9d9d9
  background: #fff
  margin: 0 0 10px 0
  position: relative
  z-index: 1100
  .order_sort_u
    width: 100%
    overflow: hidden
    border-bottom: 1px solid #ccc
    .search_tab
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
              float: right
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
    &.three
      li
        width: 33.33%
    li
      width: 25%
      float: left
      background: url("/img/smart_line.png") no-repeat right center
      background-size: 1px 20px
      text-align: center
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
      a
        font-size: 1.4rem
        text-decoration: none
        color: #484848
        display: inline-block
        height: 100%
        background: url("/img/sorting_01.png") no-repeat right 19px	
        background-size: 10px 5px
        padding-right: 12px
        -webkit-tap-highlight-color: transparent
        &.on
          color: #ef3f41
          background-image: url("/img/sorting_02.png")
          background-position: right 19px
.search_tabs
  position: relative
  overflow: hidden
  width: 100%
  .search_tab
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
            float: right
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
.showlist-enter-active, .showlist-leave-active
  transition: all .3s
  transform: translateY(0)
.showlist-enter, .showlist-leave-active
  opacity: 0
  transform: translateY(-100%)
.showcover-enter-active, .showcover-leave-active
  transition: opacity .3s
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
              &:active
                outline: none     
.back_cover
  position: fixed
  width: 100%
  height: 100%
  z-index: 10
  background-color: rgba(0,0,0,0.3)                      
</style>
