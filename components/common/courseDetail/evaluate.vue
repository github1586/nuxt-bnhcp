<template>
  <div>
    <!-- 课程评价 -->
    <div class="cls_evel_zone">
      <!-- 标题 -->
      <div class="tit">
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
        <li v-for="(items, index) in this.courseDetail.evaluate" :key="index">
          <a href="javascript:">
            <img src="/img/head_portrait.png" width="25" height="25" alt="">
            <div class="evel_con">
              <p>
                  <span>匿名</span>
                  <span class="date_tip">{{courseDetail.end_date1}}</span>
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
                  <span class="content_learn">{{items}}</span>
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
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'courseDetail'
    ])
  }
}
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
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
.evel_list
  // margin-left: 1.5rem
  li
    padding: 0 1rem 1rem 0
    overflow: hidden
    border-bottom: 1px solid #f2f2f2
    margin: 8px 0 0 0
    a
      img
        border-radius: 50%
        float: left
      .evel_con
        margin-left: 33px
        p
          margin-bottom: 0
          font-size: 1.3rem
          &.teach_ping
            text-align: left
            span
              &.tip_more
                width: 100%
                height: 5px
                display: block
                text-align: center	
                background: url("/img/next_more.png") no-repeat center center
                background-size: 8px 5px
                padding: 10px 0
                &.on
                  background: url("/img/next_more_d.png") no-repeat center center
                  background-size: 8px 5px
              &.content_learn
                // height: 50px
                overflow: hidden
                word-break: break-all
                display: block
                font-size: 1.3rem
                color: $theme_gray333
                margin-top: 0.5rem
          span
            &.date_tip
              float: right
              color: $theme_gray666
        .ping
          overflow: hidden
          .stars
            float: left
            li
              border-bottom: none
              margin: 0 4px 0 0
              padding-right: 0
              float: left
              margin: 0 4px 0 0
              padding-right: 0
              width: 8px
              height: 8px
              background: url(/img/star.png)no-repeat 0 0
              background-size: 8px 8px
              &.on
                background: url(/img/star_on.png)no-repeat 0 0
                background-size: 8px 8px
.tit
		font-size: 1.4rem
		>p
			height: 35px
			line-height: 35px
			font-weight: bold
			i
				height: 14px
				border-left: 2px solid $theme_color
				display: inline-block
				margin-right: 11px
				position: relative
				top: 2px
.totle_ping
  float: right
  margin-top: -20px
.good_ping
  border-bottom: 1px solid #eee
  padding-bottom: 10px 
.cls_evel_zone
  margin-top: 10px
  padding: 0 10px
  background: #fff
  border-bottom: none
  //查看全部评论
.all_eval
	background-color: #fff
	padding: 10px 10px 10px 15px
	border-bottom: 1px solid #dcdcdc
	a
		font-size: 1.3rem
		color: $theme_color
		display: block
		width: 98px
		height: 25px
		background: #fff
		border: 1px solid $theme_color
		text-align: center
		line-height: 25px
		margin: 0 auto
		border-radius: 3px
		-webkit-tap-highlight-color: transparent
</style>
