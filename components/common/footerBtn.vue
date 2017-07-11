<template>
   <!-- 功能按钮 -->
  <div class="menu_fix_bottom">
      <div class="ctrl_btn">
          <a href="" class="bao">预约试听</a>
          <a href="" class="yue">立即报名</a>
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
    width: 50%
    height: 100%
    line-height: 50px
    text-align: center
    color: #fff
    font-size: 15px
  .yue
    background: $theme_color
  .bao
    background: $theme_fu_org
</style>
