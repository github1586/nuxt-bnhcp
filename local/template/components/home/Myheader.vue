<template>
  <header id="header" class="all_nav_zone">
  		<nuxt-link to="/listhome" class="city_change new">北京北京</nuxt-link>
		<a href="#" class="hed_login hed_fz">登陆</a>
		<!-- 输入框 -->
		<div class="input_box word_4">
			<input type="text" name="" id="" class="index_sear_inp" placeholder="搜索：课程、机构" />
		</div>
	</header>
</template>
<style lang="sass">
	header
		padding-top: 5px
		.city_change
			font-size: 15px 
			color: #fff 
			background: url(/img/city_change.png)no-repeat 51px 12px
			background-size: 12px 7px
			float: left
			padding: 6px 25px 0px 15px
			margin-top: 2px
			&.new
				background-position: right 14px
				padding-right: 15px
		.input_box
			&.word_2
				margin-left: 72px
				margin-right: 47px
			&.word_3
				margin-left: 87px
				margin-right: 47px
			&.word_4
				margin-left: 98px
				margin-right: 60px
			margin: 5px 70px 0 88px		
		.index_sear_inp
			width: 100%
			height: 25px
			font-size: 12px
			line-height: 25px
			color:#fff
			border-radius: 70px
			background: url(/img/index_header_sear.png) no-repeat 7px center #a20407
			background-size: 14px 14px
			&::-webkit-input-placeholder 
				color: #fff
			:-moz-placeholder 
				color: #fff 
			::-moz-placeholder 
				color: #fff 
			:-ms-input-placeholder 
				color: #fff 
			padding: 5px 0 5px 26px
		.hed_login
			width: 32px
			height: 33px
			line-height: 33px
			text-align: right
			font-size: 15px
			color: #fff
			float: right
			margin: 2px 13px 0 0
			&.login
				background: url(/img/index_has_login.png) no-repeat 14px center
				background-size: 12px 15px
</style>
