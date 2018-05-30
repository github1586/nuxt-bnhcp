<template>
   <!-- 功能按钮 -->
  <div class="menu_fix_bottom">
      <div class="ctrl_btn">
          <a @click="islongin(2)"  class="yu" :class="{disabled: disabledYu}" >预约试听</a>
          <a to="" @click="addCarts()" class="bao" :class="{disabled: disabledCart}">加入购物车</a>
          <a @click="islongin(1)" class="yue" :class="{disabled: disabledAdd}">立即报名</a>
      </div>
      <layer-msg v-show="isCart" :msg="this.layerMSg"></layer-msg>
  </div>
</template>
<script>
import {postCourseId, isexistCart} from '../../ajax/getData'
import {getStore} from '../../config/common.js'
import layerMsg from '~/components/layer/layerMsg.vue'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      layerMSg: '',
      isCart: false,
      disabledCart: false,
      disabledYu: false,
      disabledAdd: false,
      users: ''
    }
  },
  mounted () {
    this.isexist()
    this.btnStyle()
  },
  computed: {
    ...mapState([
      'courseDetail'
    ])
  },
  props: ['addCart'],
  methods: {
    async addCarts () {
      if (this.disabledCart) { // 禁用之后 不能点击
        return
      }
      this.users = getStore('user') // 得到用户的帐号
      if (this.users) {
        var data = await postCourseId(this.$route.query.id, this.users)
        this.layerMSg = data.msg
      } else {
        this.$router.push({path: '/login'}) // 没有登录就去登录把  少年
        return
      }
      this.isCart = true
      if (data.status) { // 加入购物车之后禁用按钮
        this.disabledCart = true
      }
    },
    async isexist () {
      let data = await isexistCart(this.$route.query.id)
      if (data.status) { // 如果存在购物车 禁用按钮
        this.disabledCart = true
      }
    },
    islongin (value) {
      if (!getStore('user')) {
        this.$router.push({path: '/login'}) // 没有登录就去登录把  少年
      } else {
        if (this.disabledAdd) { // 是否禁用啊  如果是 你就别再跳转了 好吧
          return
        } else {
          if (value === 1) {
            let id = JSON.parse(getStore('courseDetail')).courseId // 路由带走当前的id
            this.$router.push({path: '/submitOrder/index', query: {id: id}}) // 跳转提交订单
          } else {
            this.$router.push({path: '/subscribe/index'}) // 跳转预约试听
          }
        }
      }
    },
    btnStyle () {
      if (this.courseDetail.isClass === '3' || this.courseDetail.isClass === '4') {
        this.disabledCart = true
        this.disabledYu = true
        this.disabledAdd = true
      } else if (this.courseDetail.isClass === '2') { // 如果满班 就不能购买和预约试听
        this.disabledYu = true
        this.disabledAdd = true
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
    float: left
  .yu
    background: #f8f8f8
    color: $theme_color
    &.disabled
      background: $theme_grayf0
  .yue
    background: $theme_color
    &.disabled
      background: $theme_graybbb
  .bao
    background: $theme_fu_org
    &.disabled
      background: $theme_graybbb
</style>
