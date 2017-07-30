<template>
   <!-- 功能按钮 -->
  <div class="menu_fix_bottom">
      <div class="ctrl_btn">
          <nuxt-link to="/subscribe/index" class="yu">预约试听</nuxt-link>
          <a to="" @click="addCarts()" class="bao" :class="{disabled: disabled}">加入购物车</a>
          <nuxt-link to="/submitOrder/index" class="yue">立即报名</nuxt-link>
      </div>
      <layer-msg v-show="isCart" :msg="this.layerMSg"></layer-msg>
  </div>
  
</template>
<script>
import {postCourseId, isexistCart} from '../../ajax/getData'
import layerMsg from '~components/layer/layerMsg.vue'
export default {
  data () {
    return {
      layerMSg: '',
      isCart: false,
      disabled: false
    }
  },
  mounted () {
    this.isexist()
  },
  props: ['addCart'],
  methods: {
    async addCarts () {
      if (this.disabled) { // 禁用之后 不能点击
        return
      }
      let data = await postCourseId(this.$route.query.id)
      this.layerMSg = data.msg
      this.isCart = true
      if (data.status) { // 加入购物车之后禁用按钮
        this.disabled = true
      }
    },
    async isexist () {
      let data = await isexistCart(this.$route.query.id)
      if (data.status) { // 如果存在购物车 禁用按钮
        this.disabled = true
      }
    }
  },
  components: {
    layerMsg
  }
}
</script>

<style lang="sass" scoped>
@import '~static/common/style.sass'
.menu_fix_bottom
	width: 100%
	position: fixed
	left: 0
	bottom: 0
	z-index: 19881121
	.ctrl_btn
		height: 50px
    width: 100%
  a
    display: inline-block
    width: 33.333%
    height: 100%
    line-height: 50px
    text-align: center
    color: #fff
    font-size: 15px
  .yu
    background: #f8f8f8
    color: $theme_color
  .yue
    background: $theme_color
  .bao
    background: $theme_fu_org
    &.disabled
      background: $theme_graybbb
</style>
