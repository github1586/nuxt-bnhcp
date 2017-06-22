<template>
  <div class="container pad_l_r_5 white_bgc bor_t_b">
		<div class="cls_lei">
			<Headerchunk :headinfo="parentHeadinfo.headinfo"></Headerchunk>
			<ul class="cls_list">
				<li v-for="value in parentHeadinfo.course.classList">
					<nuxt-link to="listhome" class="con">
						<img :src=value.imgurl alt="" />
						<div class="topic_con_txt">{{value.classname}}</div>
					</nuxt-link>
				</li>
			</ul>
			<!-- 更多课程 -->
			<ul class="cls_more_class">
				<li v-for="value in parentHeadinfo.course.classMoreList">
					<nuxt-link to="listhome">
						<p><img :src=value.imgurl style="position: absolute; top:3px;" alt="" /></p>
						<span>{{value.classname}}</span>
					</nuxt-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import Headerchunk from '~components/common/Headerchunk.vue'
export default {
  props: ['parentHeadinfo'],
  components: {
    Headerchunk
  }
}
</script>
<style lang="sass" scoped>
  .cls_lei
    padding: 0 0 10px 0
    margin-top: 1rem
    .cls_list
      overflow: hidden
      li
        width: 50%
        float: left
        padding: 0 5px 0 0
        .topic_con_txt
          width: 100%
          height: 2.3rem
          font-size: 1.2rem
          line-height: 2.3rem
          text-align: center
          color: #fff
          background-color: rgba(0,0,0,0.6)
          position: absolute
          left: 0
          bottom: 0
        .con
          display: block
          overflow: hidden
          border: 1px solid #eee
          position: relative
          .topic_con_txt
            display: inline-block
            width: 100%
            text-align: center
          img
            width: 100%
        &.fr
          padding: 0 0 0 5px
        .time_dao
          margin-top: 5px
          p
            text-align: center
    .cls_more_class
      border-top: 1px solid #eee
      border-ledt: 1px solid #eee
      overflow: hidden
      margin: 8px 0 0 0
      li
        width: 50%
        float: left
        a
          position: relative
          height: 49px
          display: block
          font-size: 12px
          color: #666
          overflow: hidden
          border-bottom: 1px solid #eee
          border-right: 1px solid #eee
          span
            display: block
            margin: 0 80px 0 0
            line-height: 50px
            font-size: 1.3rem
            color: #333
            text-align: center
          p
            width: 26px
            margin-top: 5px
            float: right
            position: absolute
            top: 5px
            right: 28px
            img
              width: 100%
              position: absolute
              top: 5px
              right: 0px
</style>
