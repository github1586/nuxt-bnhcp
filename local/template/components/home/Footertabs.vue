<template>
  <div class="bottom_tabs">
		<p class="top_line"></p>
		<div class="tabs_list">
			<ul>
				<li class="tabs_one">
					<a href="javascript:"></a>
					<span>首页</span>
				</li>
				<li class="tabs_two">
					<a href="javascript:"></a>
					<span>分类</span>
				</li>
				<li class="tabs_three">
					<a href="javascript:"></a>
					<span>课表</span>
				</li>
				<li class="tabs_four">
					<a href="/"></a>
					<span>我的</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<style lang="sass">
  .bottom_tabs
    position: fixed
    left: 0
    bottom: 0
    width: 100%
    .top_line
      height: 10px
      background: #eee
      border-bottom: 1px solid #b2b2b2
    ul
      height: 60px
      background: #fff
      li
        width: 25%
        float: left
        position: relative
        a
          display: inline-block
          height: 50px
          width: 100%
          -webkit-tap-highlight-color:transparent
        span
          display: inline-block
          width: 100%
          text-align: center
          position: absolute
          bottom: 0
          left: 0
          &.on
            color: #f15757
      .tabs_one
        a
          background: url('/img/icon_tab_home.png')no-repeat center 10px
          background-size: 19px 20px 
          &.on
            background: url('/img/icon_tab_home_on.png')no-repeat center 10px
            background-size: 19px 20px
      .tabs_two
        a
          background: url('/img/icon_tab_class.png')no-repeat center 10px
          background-size: 19px 20px 
          &.on
            background: url('/img/icon_tab_class_on.png')no-repeat center 10px
            background-size: 19px 20px 
      .tabs_three
        a
          background: url('/img/icon_tab_line.png')no-repeat center 10px
          background-size: 19px 20px 
          &.on
            background: url('/img/icon_tab_line_on.png')no-repeat center 10px
            background-size: 19px 20px 
      .tabs_four
        a
          background: url('/img/icon_tab_my.png')no-repeat center 10px
          background-size: 19px 20px 
          &.on
            background: url('/img/icon_tab_my_on.png')no-repeat center 10px
            background-size: 19px 20px 
</style>
