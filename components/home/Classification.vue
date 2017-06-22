<template>
  <div class="icon_link_zone" id="icon_link_zone">
			<ul class="icon_link">
				<li v-for="value in indexClass">
					<nuxt-link to="/listhome" :data-id="value.classPid">
						<img width="40" :src="value.showClassImg" alt="" />
						<p>{{value.showClassName}}</p>
					</nuxt-link>
				</li>
			</ul>
		</div>
</template>
<script>
export default {
  props: ['indexClass']
}
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
        display: block
      p
        font-size: 1rem
        color: #484848
        margin: 7px 0 0 0
</style>
