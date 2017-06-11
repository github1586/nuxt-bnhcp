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
          <li>
            <a href="javascript:" class="tab_swi_a">位置</a>
          </li>
          <li>
            <a href="javascript:" class="tab_swi_a">分类</a>
          </li>
          <li>
            <a href="javascript:" class="tab_swi_a">排序</a>
          </li>
          <li>
            <a href="javascript:" class="tab_swi_a">筛选</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
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
</style>
