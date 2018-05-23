<template>
  <div class="body">
		<header-top :name="this.name" :back="this.back" :className="this.className" :backgroundColor="this.backgroundColor"></header-top>		
    <div class="ser_rel_list new">
      <!-- 单节课-普通 -->
      <div class="ser_rel_con" v-if="!isCart">
        <div class="content_txt_box">
          <a href="#" class="con_l">
            <img :src="'/img/teacherHead/'+this.teacher_actor" width="100%" height="62" alt="" />
            <i class="name_teac">张淼</i>
          </a>
          <ul class="con_r">
            <li class="tit_h1">
              <h1>{{this.detailCourse.name}}</h1>
            </li>
            <li class="school_name">{{this.detailCourse.campusesName}}</li>
            <li class="str_end_time"><span>{{this.detailCourse.open_date1}}</span>至<span>{{this.detailCourse.end_date1}}</span></li>
            <li class="week_time">{{filterWeeks(this.detailCourse.goods_week)}}</li>
            <li class="totle_mon">&yen;<span>{{this.detailCourse.cost}}</span></li>
          </ul>
        </div>
      </div>
			<div v-else>
				<div class="ser_rel_con" v-for="(items, index) in cartList" :key="index">
					<div class="content_txt_box">
						<a href="#" class="con_l">
							<img :src="'/img/teacherHead/'+items.teacher_actor" width="100%" height="62" alt="" />
							<i class="name_teac">张淼1315165</i>
						</a>
						<ul class="con_r">
							<li class="tit_h1">
								<h1>{{items.name}}</h1>
							</li>
							<li class="school_name">{{items.campusesName}}</li>
							<li class="str_end_time"><span>{{items.open_date1}}</span>至<span>{{items.end_date1}}</span></li>
							<li class="week_time">{{filterWeeks(items.goods_week)}}</li>
							<li class="totle_mon">&yen;<span>{{items.cost}}</span></li>
						</ul>
					</div>
				</div>
			</div>
    </div>
    <!-- 订单详情 -->
    <div class="class_infor">
      <div class="remain_d">
        <ul class="link_list">
          <!-- 如果使用了优惠券请给 span 加 class="quan" -->
          <li><a>选择优惠券：<span><i>暂无优惠券 </i></span></a></li>
        </ul>
        <div class="remain">
          <!-- <p class="banl_p">
              <span class="ban_y">余额</span>
              <span class="money_sp">可用余额：0.01</span>
          </p> -->
          <p  v-if="!isCart" class="p_data"><span class="sp_infor">原课时费：</span><span class="p_infor">￥{{this.detailCourse.cost}}</span></p>
          <p v-else class="p_data"><span class="sp_infor">原课时费：</span><span class="p_infor">￥{{totalMoney}}</span></p>
          <p class="p_data"><span class="sp_infor">教材费：</span><span class="p_infor">￥0.00</span></p>
          <p class="p_data last"><span class="sp_infor">优惠金额：</span><span class="p_infor">￥0.00</span></p>  
        </div>
      </div>
      <div class="menu_fix_bottom">
        <div class="pay_money">
          <p v-if="!isCart">应付款：<span>￥{{this.detailCourse.cost}}</span></p>
          <p v-else>应付款：<span>￥{{totalMoney}}</span></p>
          <input type="button" value="提交订单" @click="goPayOrder()" class="confirm_pay_a" />
        </div>
      </div>
    </div>
		<layer-msg :msg="this.layerMsg" v-show="isLayer"></layer-msg>
  </div>
</template>
<script>
import headerTop from '~/components/common/header.vue'
import layerMsg from '~/components/layer/layerMsg.vue'
import {mapState, mapMutations} from 'vuex'
import {mostAddClass} from '../../ajax/getData.js'
import {filterWeek, getStore} from '../../config/common.js'
import {submitOrder, deleteCart} from '../../ajax/getData'
export default {
  data () {
    return {
      layerMsg: '',
      isLayer: false,
      name: '确认订单',
      className: 1,
      backgroundColor: 1,
      back: 0,
      detailCourse: {},
      teacher_actor: '',
      isCart: false,
      cartList: [],
      totalMoney: 0
    }
  },
  created () {
    if (process.BROWSER_BUILD) {
      this.detailCourse = JSON.parse(getStore('courseDetail'))
    }
    if (this.$route.query.id) {
      this.isCart = true // 如果是购物车提交 那就循环
      this.postMostClass(this.$route.query.id) // 发送请求
    }
  },
  mounted () { // created 钩子函数 读不到老师头像
    this.teacher_actor = this.detailCourse.teacher_actor
  },
  computed: {
    ...mapState([
      'courseDetail'
    ])
  },
  methods: {
    ...mapMutations([
      'ORDERDATA', 'CART'
    ]),
    filterWeeks (value) {
      return filterWeek(value)
    },
    async postMostClass (id) { // 批量提交购物车
      let data = await mostAddClass(id)
      this.cartList = data.data
      this.cartList.forEach(function (element) { // 所有订单的价格的和
        this.totalMoney += element.cost
      }, this)
    },
    async goPayOrder () {
      let phone = getStore('user')
      let id = this.$route.query.id // 获取路由参数
      let data = await submitOrder(phone, id, this.totalMoney) // 提交订单
      if (data.status) {
        console.log(data)
        this.ORDERDATA(data.orderData)
        if (this.$route.query.courceId) {
          await deleteCart(this.$route.query.courceId.toString().split('-')) // 删除购物车提交后的
        }
        this.CART([])
        this.$router.push({path: '/order/payOrder', query: {id: id}})
      } else {
        this.layerMsg = data.result
        this.isLayer = true
        setTimeout(() => { // 设为false 可再次调用
          this.isLayer = false
        }, 2000)
      }
    }
  },
  components: {
    headerTop,
    layerMsg
  }
}
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
// 课程列表
.body
  padding-top: 44px
.ser_rel_list
	&.new
		padding: 0
		// 课程列表
		.ser_rel_con
			border-top: 1px solid #dcdcdc
			border-bottom: 1px solid #dcdcdc
			-webkit-box-shadow: none
			box-shadow: none
			padding: 0 10px
			margin: 0 0 10px 0
			background: #fff
			// 左右结构部分内容
			.content_txt_box
				overflow: hidden
				.con_r
					padding-left: 6px
					float: right
					li
						margin-bottom: 0.7rem
						font-size: 1.2rem
					.tit_h1
						h1
							font-size: 1.6rem
							margin-top: 19px
							i
								display: inline-block
								overflow: hidden
								max-width: 70%
								// margin-top:0.3rem
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
					.week_time
						background: url('/img/icon_week_day.png')no-repeat 0 0
						background-size: 12px 12px 
					.totle_mon
						color: $theme_color
						span
							font-size: 1.6rem
						i
							color: $theme_gray999
							text-decoration: line-through
							margin-left: 5px
					.meybe_class
						span
							color: $theme_color
						p
							float: left
					.line_gray
						border-top: 1px solid #eee
						&.on
							width: 100%
		// 左部分内容
		.con_l
			width: 20%
			float: left
			padding: 15px 0 0 0 !important
			position: relative
			.name_teac
				position: absolute
				bottom: 0
				left: 0
				background:  $theme_color
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
				color: $theme_gray666
				margin: 6px 0 0 0
				span
					color: #cf1b1b
		// 右部分
		.con_r
			width: 80%
			&.on
				width: 80%
				position: relative
			.con_r_link
				display: inline-block
			.money
				// 现价
				.price_cur
					font-size: 1.4rem
					color: #cf1b1b
					padding: 0 7px 0 0
				// 原价
				.price_befor
					font-size: 1.2rem
					color:  $theme_gray999
					text-decoration: line-through
				// 报名
				.bao
					font-size: 1.2rem
					color: $theme_gray666
					// float: left
					i
						color: #cf1b1b
			.place,.time
				font-size: 1.3rem
				color: $theme_gray666
			.place
				margin: 3px 0 5px 0
			
			// 展开收起按钮
			.slide_btn
				width: 30px
				height: 40px
				background: url(/img/menu_show_hide.png) no-repeat right center
				background-size: 15px 4px
				float: left
				margin: 0 0 0 0
			// 隐藏的层
			.slide_menu
				width: 100%
				height: 100%
				background: rgba(255,255,255,.9)
				-webkit-transform: translateX(100%)
				transform: translateX(100%)
				position: absolute
				left: 0
				top: 0
				// 按钮
				.agent_r
					width: 60px
					text-align: center
					float: left
					li
						line-height: 58px
						&.shi
							background-color: #b56b57
						&.bao
							background-color:  $theme_color
						a
							font-size: 1.4rem
							color: #fff
							display: block
				// 信息
				.agent_l
					padding: 5px 0 0 0
					.agent
						font-size: 1.5rem
						color: #484848
						margin: 0 0 8px 0
					p
						font-size: 1.3rem
						color: $theme_gray666
						margin: 0 0 6px 0
		// 标签和距离
		.mark_box
			overflow: hidden
			display: block
			border-top: 1px dashed #e7e7e7
			padding: 13px 0 13px 0
			.distance
				font-size: 1.2rem
				color:  $theme_gray999
				float: left
				margin: 0 10px 0 0
.class_infor
	background-color: #f2f2f2
	.remain_d
		border-top: 1px solid #dcdcdc
		&.mar_b
			margin-bottom: 2px
		.remain
			padding-top: 10px
			padding-left: 15px
			padding-right: 15px
			margin-bottom: 6rem
			background-color: #fff
			&.bor
				border-bottom: 1px solid #eee
				padding-top: 12px
				padding-bottom: 2px
				margin: 0 0 5px 0
			.banl_p
				margin-bottom: 20px
				text-align: center
				background: url("/img/pay_no.png") no-repeat right center
				background-size: 11px 11px
				.ban_y
					float: left
					font-size: 1.4rem
					color: #484848
					margin-right: -25px
					font-weight: bold
				.money_sp
					color: #848484
					font-size: 1.4rem 
			.p_data
				overflow: hidden
				margin-bottom: 10px
				// font-size: 1.2rem
				&.last
					padding-bottom: 10px
					margin-bottom: 0
				.sp_infor
					float: left
					color: #484848
					font-size: 1.2rem
				.p_infor
					float: right
					// margin-right: 60px
					color: $theme_gray999
					font-size: 1.2rem
	.platform
		background: #fff
		color: #484848
		font-size: 1.4rem
		text-align: center
		border-top: 1px solid #dcdcdc
		border-bottom: 1px solid #dcdcdc
		padding-top: 12px
		padding-bottom: 12px
		margin-bottom: 65px
	.confirm_pay_a
		color: #fff
		background-color: $theme_color
		text-align: center
		height: 5rem
		line-height: 5.2rem
		display: block
		font-size: 1.4rem
/*--- 链接列表 ---*/
.link_list
  background: #fff
.link_list li
  border-bottom: 1px solid #f2f2f2
  padding: 9px 15px 9px 16px
.link_list a
  width: 100%
  font-size: 1.4rem
  color: #474747
  background: url(/img/sidebar_arrow.jpg) no-repeat right center
  background-size: 5px 9px
  display: inline-block
.menu_fix_bottom
  width: 100%
  position: fixed
  left: 0
  bottom: 0
  z-index: 19881121
// 底部支付区域
.pay_money
    background: #fff
    border-bottom: 1px solid #eee
    border-top: 1px solid #eee
    overflow: hidden
    p
        line-height: 50px
        color: #484848
        padding: 0 0 0 25px
        font-size: 1.2rem
        float: left
        span
            color: #cf1b1b
            font-weight: normal
    .confirm_pay_a
      width: 135px
      border-radius: 0
      float: right
</style>
