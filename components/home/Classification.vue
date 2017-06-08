<template>
  <div class="icon_link_zone" id="icon_link_zone">
			<ul class="icon_link_box">
				<li>
					<ul class="icon_link">
						<li>
							<a href="">
								<img width="40" src="img/class_art_icon.png" alt="" />
								<p>艺术</p>
							</a>
						</li>
						<li>
							<a href="">
								<img width="40" src="img/class_tiyu_icon.png" alt="" />
								<p>体育</p>
							</a>
						</li>
						<li>
							<a href="">
								<img width="40" src="img/class_yuyan_icon.png" alt="" />
								<p>语言</p>
							</a>
						</li>
						<li>
							<a href="">
								<img width="40" src="img/class_liuxue_icon.png" alt="" />
								<p>留学</p>
							</a>
						</li>
							<li>
							<a href="">
								<img width="40" src="img/class_xiao_icon.png" alt="" />
								<p>小学</p>
							</a>
						</li>
						<li>
							<a href="">
								<img width="40" src="img/class_sheng_icon.png" alt="" />
								<p>小升初</p>
							</a>
						</li>
						<li>
							<a href="">
								<img width="40" src="img/class_chuzhong_icon.png" alt="" />
								<p>初中</p>
							</a>
						</li>
						<li>
							<a href="">
								<img width="40" src="img/class_zhongkao_icon.png.png" alt="" />
								<p>中考</p>
							</a>
						</li>
						<li>
							<a href="">
								<img width="40" src="img/class_gao_icon.png" alt="" />
								<p>高中</p>
							</a>
						</li>
						<li>
							<a href="">
								<img width="40" src="img/class_sheng_icon.png" alt="" />
								<p>更多</p>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
</template>
<script>

</script>
<style lang="sass">
  .icon_link_zone
     position: relative
     .meun_link
        overflow: hidden
        position: absolute
        left: 50%
        bottom: 6px
        margin-left: -12px
        li
          width: 6px
          height: 6px
          background: url(/img/banner03.png) no-repeat 0 0
          float: left
          margin: 0 6px 0 0
          &.on
            background-image: url(/img/banner01.png)
  .icon_link
    man-height: 16rem
    overflow: hidden
    background: #fff
    padding: 1.3rem 0 0 0
    li
      width: 20%
      float: left
      text-align: center
      margin: 0 0 1.3rem 0
      a
        dispaly: block
      p
        font-size: 1rem
        color: #484848
        margin: 7px 0 0 0
</style>
