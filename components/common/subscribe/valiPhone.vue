<template>
  <div class="reser_number">
    <ul>
      <li>
        手机号
        <input type="number" name="" id="" placeholder="请输入手机号码"/>
      </li>
      <li class="check_code_zone ting">
        校验码
        <input type="text" name="" id="" placeholder="请输入校验码" class="code_inp"/>
        <!-- 图片盒子 -->
        <div class="chec_img_box">
          <img src="/img/check_code_agin.png" width="41" height="6" alt="" class="code_agin" />
        </div>
      </li>
      <li>
        验证码
        <input type="text" name="" id="" placeholder="请输入验证码" class="code_inp"/>
        <span>获取验证码</span>
      </li>
    </ul>
  </div>
</template>
<script>
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
.reser_number
		margin-top: 12px
		border-top: 1px solid #dcdcdc
		background-color: #fff
		&.tel_reser
			height: 45px
			line-height: 45px
			text-align: center
			color: $theme_gray999
			border-bottom: 1px solid #dcdcdc
		ul
			li
				height: 45px
				line-height: 45px
				color: $theme_gray999
				padding: 0 15px
				border-bottom: 1px solid #dcdcdc
				position: relative
				input
					height: 44px
					color: #484848
					padding-left: 20px
					font-size: 1.5rem
					line-height: 20px
					&.code_inp
						padding-left: 35px
				span
					width: 100px
					height: 31px
					line-height: 31px
					background-color: #e0a607
					color: #fff
					font-size: 1.5rem
					display: block
					position: absolute
					right: 15px
					bottom: 7px
					text-align: center
					border-radius: 5px
</style>
