<template>
  <!-- 营销活动 -->
	<div class="container pad_l_r_5 white_bgc bor_t_b">
		<div class="cls_lei">
			<Headerchunk :headinfo="headinfo"></Headerchunk>
			<ul class="cls_list">
				<li>
					<a href="123" class="con" id="dao_acti1">
						<img src="img/favorable_1.jpg" alt="" />
						<div  class="topic_con_txt">
              <span>钢琴精品课</span>
            </div>
					</a>
					<div id="time_dao_ing1" class="time_dao">
						<p>
							<span>距开抢<i>5</i>天</span>
							<span class="hour">24</span>:
							<span class="minte">52</span>:
							<span class="second">23</span>
						</p>
          </div>
				</li>
				<li class="fr">
					<a href="javascript:;" class="con" id="dao_acti2">
						<img src="img/favorable_2.jpg" alt="" />
						<div  class="topic_con_txt">
            <span>钢琴精品课</span>
          </div>
					</a>
					<div id="time_dao_ing2" class="time_dao">
						<p>
							<span>距开抢<i>5</i>天</span>
							<span class="hour">24</span>:
							<span class="minte">52</span>:
							<span class="second">23</span>
						</p>
          </div>
				</li>
			</ul>
		</div>
    <!-- 时间隐藏域 -->
    <!-- 当前服务器时间 -->
    <input type="hidden" name="" value="2016-06-22-21-00-00-000" id="time_service" />
    <!-- 活动开始时间 -->
    <!--<input type="hidden" name="" value="2016-06-22-22-0" id="time_start1" />-->
    <!--<input type="hidden" name="" value="2016-06-22-22-2" id="time_start2" />-->
    <!-- 活动结束时间 -->
    <input type="hidden" name="" value="2016-06-22-21-3" id="time_end1" />  
    <input type="hidden" name="" value="2016-06-22-21-2" id="time_end2" />   
		<!--初始化24小时-->
		<input type="hidden" name="" value="2016-06-23-21-0" id="time_start24" />  
    <!--<input type="hidden" name="" value="2016-06-22-21-3" id="time_end24" />-->
	</div>
</template>
<script>
import Headerchunk from '~components/common/Headerchunk.vue'
export default {
  data () {
    return {
      headinfo: {
        before: '更多优惠',
        after: '限时抢报',
        imgurl: 'img/icon_time.png'
      }
    }
  },
  components: {
    Headerchunk
  }
}
</script>
<style lang="sass" scoped>
  .cls_lei
    padding: 0 0 10px 0
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
</style>
