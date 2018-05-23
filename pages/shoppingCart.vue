<template>
  <div class="containers">
    <div class="herder">
      <p class="cart">购物车</p><span class="white" @click="deleteClass()">{{this.deleteTxt}}</span>
    </div>
    <div class="order_cart" v-if="cartList.length">
      <ul>
        <li  v-for="(item, index) in cartList" :key="index">
					<div class="title_school"  @click="cartSelect(index, item.courseId, item.id)" :class="{on: cartSelectStatus[index].status}">
						<h3>{{item.campusesName}}</h3>
					</div>
          <div class="ser_rel_list new">
            <!-- 单节课-普通 -->
            <div class="ser_rel_con">
              <div class="content_txt_box" :class="{on: cartSelectStatus[index].status}">
                <router-link tag='ul' :to="{path: 'courseDetail/index', query: {id: item.courseId}}" class="con_r on" style="width:75%;padding-left:6px;">
                  <li class="tit_h1">
                    <h1>
                      <i>{{item.name}}</i>
                      <span class="zhe"></span>
                      <span class="tuan"></span>
                      <span class="jian"></span>
                      <span class="hui"></span>
                    </h1>
                  </li>
                  <li class="school_name">{{item.address}}</li>
                  <li class="str_end_time"><span>{{item.open_date1}}</span>至<span>{{item.end_date1}}</span></li>
                  <li class="totle_mon">&yen;<span>{{item.cost}}</span><i>&yen;{{item.mall_cost}}</i></li>
                  <li class="meybe_class">
                    已报<span>{{item.saled}}</span>/<i>{{item.total}}</i>人
                  </li>
                  <li class="line_gray"></li>
                  <li>
                    <div class="cls_mark">
                      <ul>
												<li v-show="item.retreat_rule == 1"><span>随时退班</span></li>
												<li v-show="item.is_transfer == 1"><span>随时插班</span></li>
												<li v-show="item.is_audition == 1"><span>免费试听</span></li>
                      </ul>
                    </div>
                  </li>
                </router-link>
								<b href="#" class="con_l" @click="cartSelect(index, item.courseId)">
                  <img :src="'/img/teacherHead/' + item.teacher_actor" height="20%" width="100%">
                  <i class="name_teac">{{item.teacherName}}</i>
                </b>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="no_content" v-else>
      <i class="icon menu"></i>
      <p class="margin_left_p">购物车为空,快
        <nuxt-link to="/coursehome">去选课</nuxt-link>吧</p>
    </div>
		<div class="computed">
			<div class="left_select">
				<h3 @click="allSelect()" :class="{on: isAllSelect}">全选</h3>
				<div class="price" v-show="isDelete">
					<p>合计：<span>￥{{this.total}}</span></p>
					<b>不含教材费</b>
				</div>
			</div>
			<input class="settlement" type="button" @click="deleteCartClass()" :value="btnVal">
		</div>
    <footer-tab :cartNum="cartNumStatus"></footer-tab>
  </div>
</template>

<script>
import footerTab from '~/components/home/Footertabs.vue'
import {mapState, mapMutations} from 'vuex'
import {getCartList, deleteCart} from '../ajax/getData.js'
import {getStore} from '../config/common.js'
export default {
  data () {
    return {
      no_content: false, // 没有内容的组件
      total: 0, // 总价
      cartList: [], // 购物车列表
      cartSelectStatus: [],
      isAllSelect: false,
      btnVal: '马上结算',
      isDelete: true,
      deleteTxt: '编辑',
      cartNumStatus: false
    }
  },
  computed: {
    ...mapState([
      'cart'
    ])
  },
  mounted () {
    this.getCart()
  },
  methods: {
    ...mapMutations([
      'CART'
    ]),
    addPrice (arr) { // 计算总价
      this.total = 0 // 清空价格
      arr.forEach(function (element) {
        this.total += element.cost
      }, this)
    },
    async getCart () {
      let user = getStore('user') // 获取用户信息
      if (user) { // 存在的化就去请求购物车列表
        let data = await getCartList(user)
        this.cartList = data.result
        this.cartNumStatus = this.cartList.length
        this.initCartStatus() // 记住状态
      } else { // 然则 你去登录把 或者注册的
        this.$router.push({path: '/login'})
      }
    },
    initCartStatus () { // 初始化购物车数据状态
      this.cartList.forEach(function (element, index) {
        this.cartSelectStatus.push({status: false, id: element.courseId, cartId: element.id}) // 全部未选中
      }, this)
    },
    cartSelect (index, id, cartId) { // 点击选中
      this.cartSelectStatus.splice(index, 1, {status: !this.cartSelectStatus[index].status, id, cartId})
      if (this.cartSelectStatus[index].status) {
        this.total += parseInt(this.cartList[index].cost)
      } else {
        this.total -= parseInt(this.cartList[index].cost)
        this.isAllSelect = false // 如果在全选情况下  有一个不是选中 全选就不选中了啊
      }
    },
    deleteClass () { // 编辑购物车
      if (this.isDelete) {
        this.deleteTxt = '完成'
        this.btnVal = '删除'
        this.isDelete = false
      } else {
        this.deleteTxt = '编辑'
        this.btnVal = '马上结算'
        this.isDelete = true
      }
    },
    async deleteCartClass () { // 删除购物车
      let deleteArr = [] // 需要删除的课程
      // 遍历选中的
      this.cartSelectStatus.forEach(function (element) {
        if (element.status) {
          deleteArr.push(element.cartId)
        }
      }, this)
      if (!this.isDelete) {
        if (!deleteArr.length) return
        let data = await deleteCart(deleteArr)
        if (data.status) {
          for (let i = 0, bool = true; i < this.cartList.length; bool ? i++ : i) {
            if (this.cartList[i] && this.cartSelectStatus[i].status) {
              this.cartSelectStatus.splice(i, 1) // 记录状态删除
              this.cartList.splice(i, 1) // 点击删除的时候 选中的删除
              bool = false
              this.cartNumStatus = this.cartList.length
            } else {
              bool = true
            }
          }
          this.total = 0
          if (this.cartList.length === 0) {
            this.isAllSelect = !this.isAllSelect
          }
        }
      } else {
        if (!deleteArr.length) return
        let params = []
        // 获取选中的课程 id 带过去
        this.cartSelectStatus.forEach(function (element, index) {
          if (element.status) {
            params.push(this.cartList[index].courseId)
          }
        }, this)
        // 提交过后删除
        let submitcource = []
        console.log(this.cartSelectStatus)
        this.cartSelectStatus.forEach(function (element) {
          if (element.status) {
            submitcource.push(element.cartId) // 如果选中状态为选中  那就放进数组传入参数提交删除
          }
        }, this)
        // 传参数
        this.$router.push({path: '/submitOrder/index', query: {id: params.join('-'), courceId: submitcource.join('-')}})
      }
    },
    allSelect () {
      this.isAllSelect = !this.isAllSelect
      this.cartSelectStatus = [] // 清空所有中台 重新赋值
      if (!this.isAllSelect) {
        this.initCartStatus() // 记住状态
        this.total = 0 // 全部未选中
        this.cartList.forEach(function (element, index) {
          this.cartSelectStatus.push({status: false, id: element.courseId, cartId: element.id}) // 全部未选中
        }, this)
      } else {
        this.addPrice(this.cartList)
        this.cartList.forEach(function (element, index) {
          this.cartSelectStatus.push({status: true, id: element.courseId, cartId: element.id}) // 全部未选中
        }, this)
      }
    }
  },
  components: {
    footerTab
  },
  watch: {
  }
}
</script>

<style lang="sass" scoped>
@import '~static/common/style.sass'
.containers
	background: #f0f0f0
	height: 100%
	padding-top: 50px
	padding-bottom: 100px
	.herder
		background: #fafafa
		position: fixed
		left: 0
		top: 0
		@include  wh(100%, 4rem)
		.cart
			text-align: center
			line-height: 4rem
			font-size: 1.6rem
		.white
			top: 0
			right: 1rem
			position: absolute
			font-size: 1.3rem
			line-height: 40px
.no_content
  @include center
  margin-top: -6rem
  a
    color: $theme_color
.title_school
	margin: 0.5rem 0
	color: #fff
	line-height: 3.5rem	
	padding-left: 3.3rem
	background: $theme_color url("/img/select_not.png")no-repeat 0.8rem 0.8rem
	background-size: 1.8rem
	&.on
		background: $theme_color url("/img/icon_red_ok.png")no-repeat 0.8rem 0.8rem
		background-size: 1.8rem
	h3
		font-weight: normal
		font-size: 1.3rem
.ser_rel_list
	.ser_rel_con
		// background: #fff
	&.new
		.ser_rel_con
			-webkit-box-shadow: none
			box-shadow: none
			padding: 0 10px
			margin: 0 0 10px 0
      border-bottom: 1px solid #dcdcdc			
			.content_txt_box
				overflow: hidden
				padding: 0
				background: url("/img/select_not.png")no-repeat 0 3rem
				background-size: 1.8rem
				&.on
					background: url("/img/icon_red_ok.png")no-repeat 0 3rem
					background-size: 1.8rem
				.con_r
					float: right
					li
						margin-bottom: 0.7rem
						font-size: 1.2rem
            background: #fff
					.tit_h1
						h1
							font-size: 1.6rem
							margin-top: 19px
							i
								display: inline-block
								overflow: hidden
								max-width: 70%
								text-overflow: ellipsis
								white-space: nowrap
							span
								display: inline-block
								margin-top: 0.5rem
								margin-left: 3px
					.school_name
						text-overflow: ellipsis
						max-width: 200px
						white-space: nowrap
						overflow: hidden
					.school_name,.str_end_time,.week_time
						padding-left: 18px
						background: url('/img/icon_school.png')no-repeat 0 0
						background-size: 12px 12px 
						&.on
							background: url('/img/icon_tab_my.png')no-repeat 0 0
							background-size: 12px 12px
					.str_end_time
						background: url('/img/icon_clock_.png')no-repeat 0 0
						background-size: 12px 12px 
					.totle_mon
						color: #ef4040
						span
							font-size: 1.6rem
						i
							color: #999
							text-decoration: line-through
							margin-left: 5px
					.meybe_class
						span
							color: #ef4040
						p
							float: right
					.line_gray
						border-top: 1px solid #eee
						&.on
							width: 100%
		// 左部分内容
		.con_l
			width: 18%
			float: right
			padding: 15px 0px 0 0
			position: relative
			right: -3px
			.name_teac
				position: absolute
				bottom: 0
				left: 0
				background: #ef4040
				display: inline-block
				width: 100%
				color: #fff
				text-align: center
				opacity: 0.8
				font-size: 1rem
				height: 1.5rem
				line-height: 1.7rem
			img
				border: 1px solid #eee
			p
				font-size: 1.2rem
				text-align: center
				color: #666
				margin: 6px 0 0 0
				span
					color: #cf1b1b
.cls_mark
	ul
		overflow: hidden
		width: 100%
		float: left
		li
			float: left
			margin-right: 0.5rem
			span
				display: inline-block
				width: 100%
				padding-left: 1.5rem
				font-size: 1.3rem
				background: url('/img/icon_class_clas.png')no-repeat 0 1px
				background-size: 1.1rem 1.1rem 
			&.on
				float: right
.empty_data
		@include sc(1rem, #666)
		text-align: center
		line-height: 2rem
.loading-enter-active, .loading-leave-active
	transition: opacity 1s
.loading-enter, .loading-leave-active
.computed
	position: fixed
	left: 0
	bottom: 60px
	width: 100%
	z-index: 100
	border-bottom: 1px solid #eee
	border-top: 1px solid #eee
	.left_select
		background: #fff
		overflow: hidden
		width: 75%
		float: left
		height: 4rem
		h3
			float: left
			line-height: 4.1rem
			padding-left: 3rem
			font-weight: normal
			background-size: 1.8rem
			background: url(/img/select_not.png) no-repeat 0.8rem 0.8rem
			background-size: 1.8rem
			&.on
        background: url(/img/icon_red_ok.png) no-repeat 0.8rem 0.8rem
        background-size: 1.8rem
		.price
			float: right
			height: 100%
			// transform: translateY(50%)
			padding-top: 8px
			padding-bottom: 8px
			padding-right: 10px
			p
				span
					color: $theme_color
			b
				font-weight: normal
	.settlement
		float: right
		width: 25%
		height: 4rem
		background: $theme_color
		text-align: center
		color: #fff
		font-size: 1.3rem
.order_cart
  ul
    li
      background: #fff
</style>
