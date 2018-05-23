<template>
  <div class="bar_down">
    <div class="icon_zone">
      <ul>
        <li class="li_first">
          <a href="/" class="index_one">首页</a>
        </li>
        <li>
          <a href="/classify" class="index_sec">分类</a>
        </li>
        <li class="li_last">
          <a href="/oneself" class="index_fous">我的</a>
        </li>
          <li class="">
          <a href="#" class="index_zixun">咨询</a>
        </li>
          <li class="">
          <a href="/shoppingCart" class="index_fen">购车</a>
        </li>
      </ul>
    </div>  
  </div>
</template>
<style lang="sass" scoped>
@import '~static/common/style.sass'
@keyframes mymove
  from 
	  height: 0
  to 
	  height: 240px
.bar_down
	width: 88px
	animation: mymove 0.5s ease-in forwards
	// height: 0
	position: fixed	
	overflow: hidden
	// display: none		
	top: 46px
	right: 9px
	z-index: 42111111196
	// 图标区域
	.icon_zone
		&::before
				content: ''
				display: block
				width: 0
				height: 0
				border: 5px solid transparent
				border-bottom-color: #0f0f15
				position: absolute
				top: -6px
				right: 13px
				z-index: 100000000
			
		position: relative				
		// display: none
		ul
			width: 100%
			position: absolute
			top: 4px
			right: 0
			background: #0f0f15
			padding: 0 15px
			border-radius: 5px
			
			li
				height: 30px
				width: 100%
				line-height: 30px
				border-bottom: 1px solid $theme_gray666
				text-align: left
				padding-left: 10px
				&:last-child
					border: 0
				a
					color: #fff
					font-size: 1.2rem
					&.index_one
						background: url("/img/icon_index_show.png") no-repeat left center
						background-size: 15px 12px
						padding-left: 18px
					
					&.index_sec
						background: url("/img/icon_classification-red.png") no-repeat left center
						background-size: 13px 13px
						padding-left: 18px
					
					&.index_third
						background: url("/img/icon_Schedule-red.png") no-repeat left center
						background-size: 11px 13px
						padding-left: 18px
					
					&.index_fous
						background: url("/img/icon_My-red.png") no-repeat left center
						background-size: 13px 12px
						padding-left: 18px
					
					&.index_zixun
						background: url("/img/icon_phone_1.png") no-repeat left center
						background-size: 13px 12px
						padding-left: 18px
					
					&.index_fen
						background: url("/img/icon_share_1.png") no-repeat left center
						background-size: 13px 12px
						padding-left: 18px
	// 1.2版本
	&.new
		width: 125px
		height: 0
		overflow: hidden
		position: fixed
		top: 35px
		right: 9px
		z-index: 42111111196
		// 图标区域
		.icon_zone
			position: relative				
			// 小箭头
			&:before
				border: 6px solid transparent
				border-bottom-color: #fff
        content: ""
        opacity: 0.9
        position: absolute
        top: -4px
        left: 105px
			// 列表
			ul
				width: 100%
				position: absolute
				top: 8px
				right: 0
				li
					height: 46px
					line-height: 46px
					background: rgba(255, 255, 255, 0.9)
					border: none
					text-align: left
					padding: 0 15px 0 15px
					&.li_first
						border-top-left-radius: 5px
						border-top-right-radius: 5px
					&.li_last
						border-bottom-left-radius: 5px
						border-bottom-right-radius: 5px
						border-bottom: none
					a
						width: 100%
						color: #484848
						font-size: 1.5rem
						border-bottom: 1px solid #ccc
						display: inline-block
						&.index_one
							background: url("/img/index_one_new.png") no-repeat 14px center
							background-size: 20px 20px
							padding-left: 50px
						&.index_sec
							background: url("/img/index_sec_new.png") no-repeat 15px center
							background-size: 20px 20px
							padding-left: 50px
						&.index_third
							background: url("/img/index_third_new.png") no-repeat 16px center
							background-size: 16px 20px
							padding-left: 50px
						&.index_fous
							background: url("/img/index_fous_new.png") no-repeat 16px center
							background-size: 18px 20px
							padding-left: 50px
						&.index_five
							background: url("/img/index_five_new.png") no-repeat 16px center
							background-size: 19px 19px
							padding-left: 50px
</style>
