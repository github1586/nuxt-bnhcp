<template>
  <div>
    <!-- 课程评价 -->
    <div class="cls_evel_zone">
      <!-- 标题 -->
      <div class="tit on">
        <p><i></i>家长评价</p>
      </div>
      <div class="good_ping">
        <div class="evaluat_zo">
          <ul>
            <li class="on"></li>
            <li class=""></li>
            <li class=""></li>
            <li class=""></li>
            <li class=""></li>
          </ul>
          <span><i>4.5</i>分</span>
        </div>
        <span class="totle_ping">共10条评价</span>
      </div>
      <!-- 评论内容 -->
      <ul class="evel_list">
        <li>
          <a href="javascript:">
            <img src="/img/head_portrait.png" width="25" height="25" alt="" />
            <div class="evel_con">
              <p>
                  <span>家长A</span>
                  <span class="date_tip">2015-11-20</span>
              </p>
              <div class="ping">
                  <ul class="stars">
                      <li class="on"></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                  </ul>
              </div>      
              <p class="teach_ping">
                  <span class="content_learn">挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好好挺好挺好</span>
              </p>  
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/img/head_portrait.png" width="25" height="25" alt="" />
            <div class="evel_con">
              <p>
                <span>家长A</span>
                <span class="date_tip">2015-11-20</span>
              </p>
              <div class="ping">
                <ul class="stars">
                  <li class="on"></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>  
              <p class="teach_ping">
                <span class="content_learn">挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好</span>
              </p>  
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="all_eval">
      <a href="javascript:">查看全部评论</a>
    </div>
  </div>
</template>
<script>

</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
.cls_evel_zone
  margin-top: 10px
  padding: 0 10px
  background: #fff
  border-bottom: none
  // 标题
  .tit
    font-size: 1.4rem
		border-bottom: 1px solid #dcdcdc
		&.on
			border: 0
  &.fenxiao
    box-shadow: none
    border-bottom: 1px solid #dcdcdc
  .good_ping
    position: relative
    border-bottom: 1px solid $theme_grayddd
    padding-bottom: 12px
    .totle_ping
      position: absolute
      top: 3px
      right: 0
      font-size: 1.2rem
      margin-right: 1rem
.evaluat_zo
	span
		font-size: 1.8rem
		color: $theme_fu_org
		font-weight: bold
	ul
		overflow: hidden
		margin-top: 0.6rem
		float: left
		li
			width: 15px
			height: 15px
			background: url("/img/evaluat_star.png") no-repeat center center
			background-size: 16px 15px
			float: left
			margin-right: 5px
			&.on
				background-image: url("/img/evaluat_star_on.png")
</style>
