<template>
	<div class="container pad_l_r_5 white_bgc bor_t_b">
		<div class="cls_lei recommend_school">
			<Headerchunk :headinfo="headinfo"></Headerchunk>
			<ul class="cls_list">
				<li class="fl">
					<a href="123" class="con" id="dao_acti1">
						<img src="img/tui_school.png" alt="" />
					</a>
					<p>杰睿学校(海..</p>
				</li>
				<li class="">
					<a href="javascript:;" class="con" id="dao_acti2">
						<img src="img/tui_school.png" alt="" />
					</a>
					<p>杰睿学校(海..</p>
				</li>
				<li class="">
					<a href="123" class="con" id="dao_acti1">
						<img src="img/tui_school.png" alt="" />
					</a>
					<p>杰睿学校(海..</p>
				</li>
				<li class="">
					<a href="javascript:;" class="con" id="dao_acti2">
						<img src="img/tui_school.png" alt="" />
					</a>
					<p>杰睿学校(海..</p>
				</li>
			</ul>
		</div>           
	</div>
</template>
<script>
import Headerchunk from '~components/common/Headerchunk.vue'
export default {
  data () {
    return {
      headinfo: {
        before: '推荐学校',
        after: '更多学校',
        imgurl: 'img/icon_jigou.png'
      }
    }
  },
  components: {
    Headerchunk
  }
}
</script>

<style lang="sass">
		.cls_list
			overflow: hidden
			margin-left: 2px
			padding-bottom: 1.5rem
			li
				width: 25%
				height: 25%
				float: left
				padding: 0 5px 0 0
				.con
					display: block
					overflow: hidden
					border: 1px solid #eee
					position: relative
					img
						width: 100%
				&.fr
					padding: 0 0 0 5px
				>p
					width: 100%
					text-align: center
					margin-top: 5px
					white-space: nowrap
</style>
