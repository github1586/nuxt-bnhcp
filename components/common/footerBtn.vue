<template>
   <!-- 功能按钮 -->
  <div class="menu_fix_bottom">
      <div class="ctrl_btn">
          <nuxt-link to="/subscribe/index" class="yu">预约试听</nuxt-link>
          <nuxt-link to="/subscribe/index" class="bao">加入购物车</nuxt-link>
          <nuxt-link to="/subscribe/index" class="yue">立即报名</nuxt-link>
      </div>
  </div>
</template>
<style lang="sass" scoped>
@import '~static/common/style.sass'
.menu_fix_bottom
	width: 100%
	position: fixed
	left: 0
	bottom: 0
	z-index: 19881121
	.ctrl_btn
		height: 50px
    width: 100%
  a
    display: inline-block
    width: 33.333%
    height: 100%
    line-height: 50px
    text-align: center
    color: #fff
    font-size: 15px
  .yu
    background: #f8f8f8
    color: $theme_color
  .yue
    background: $theme_color
  .bao
    background: $theme_fu_org
</style>
