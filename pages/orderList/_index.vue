<template>
  <div>
    <header-top :name="this.name" :back="this.back" :className="this.className" :backgroundColor="this.backgroundColor"></header-top>
    <div class="container full">
      <!-- 选项卡 -->
      <ul class="menu_tabs">
          <li v-for="(items, index) in tabArr" :key="index"><a @click="changeActive(index)" :class="{on: changeActivated === index}">{{items}}</a></li>
      </ul> 
      <ul class="meun">
        <li v-for="(item, index) in listArr" :key="index">
          <div class="menu_list">
            <a href="#" class="list_link">
              <div class="tit">
                  <span class="staus">{{item[0].orderSataus === "0" ? '待付款' : '交易成功'}}</span>
                  <span class="agent">{{item[0].order_date1}}</span>
              </div>
              <ul class="course_list">
                <li v-for="(items, indexs) in item" :key="indexs">
                  <div class="con">
                    <p><img :src="'/img/teacherHead/'+items.teacher_actor" width="65" height="65" class="cls_img" alt="" /><span>老师：<i>{{items.teacherName}}</i></span></p>
                    <div class="infor">
                      <p>购买：<span>{{items.name}}</span></p>
                      <p>地址：<span>{{items.address}}</span></p>
                      <p>时间：<span>{{items.open_date1}}</span></p>
                      <p>学校：<span>{{items.end_date1}}</span></p>
                    </div>
                  </div>
                  <h3>&yen; {{items.cost}}</h3>
                </li>
              </ul>
            </a>
            <div class="total_pay">
                <div class="pay_money lf">合计：<span>￥{{item[0].total}}</span></div>                
            </div>
            <div class="pay_ctrls">
                <div class="btns">
                  <span class="cancel" data-role="menu_cancel">{{item[0].orderSataus === "0" ? '取消' : '不支持退班'}}</span>
                  <a  @click="goPayTo(item[0].orderSataus, item, item[0].total)" class="pay_link">{{item[0].orderSataus === "0" ? '支付' : '订单详情'}}</a>
                </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
		<no-content :content="noContent" v-show="isNoContent"></no-content>	
		<Footertabs></Footertabs>
		<transition name="loading">
			<loading v-show="showLoading"></loading>
		</transition>
  </div>
</template>
<script>
import headerTop from '~/components/common/header.vue'
import Footertabs from '~/components/home/Footertabs.vue'
import {mapMutations} from 'vuex'
import loading from '~/components/common/loading.vue'
import {getOrderList, submitOrder} from '../../ajax/getData.js'
import {getStore} from '../../config/common.js'
import noContent from '~/components/common/no_content/no_content.vue'
export default {
  data () {
    return {
      tabArr: [
        '全部',
        '待付款',
        '已支付',
        '已评价'
      ],
      name: '我的订单',
      className: 1,
      // 位置左侧是选中的id
      changeActivated: 0,
      backgroundColor: 1,
      back: 0,
      isNoContent: false,
      // 是否显示加载动画
      showLoading: true,
      listArr: [],
      // 无内容样式
      noContent: {
        class: 'menu',
        name: '你没有订单'
      }
    }
  },
  mounted () {
    this.getorder()
  },
  methods: {
    ...mapMutations([
      'ORDERDATA'
    ]),
    async getorder () {
      let phone = getStore('user')
      let data = await getOrderList(phone)
      if (data.status) {
        this.listArr = data.result
      }
      if (JSON.stringify(data.result) === '{}') { // 如果没有数据那就 该咋咋把
        this.isNoContent = true
      }
      this.showLoading = false
    },
    async goPayTo (status, item, totalMoney) {
      if (!parseInt(status)) {
        this.$router.push({path: '/order/payOrder', query: this.$route.query.id})
        let phone = getStore('user') // 拿到用户手机号
        let orderArr = []
        item.forEach(function (element) { // 循环当前订单一共有几个课程
          orderArr.push(element.courseOrder) // 每个课程的id放进去
        }, this)
        let data = await submitOrder(phone, orderArr.join('-'), totalMoney, true) // 提交订单
        data.orderData.orderId = item[0].orderId
        this.ORDERDATA(data.orderData)
      }
    },
    async changeActive (index) {
      this.isNoContent = false
      let phone = getStore('user')
      let data = await getOrderList(phone, index - 1)
      if (data.status) {
        this.listArr = data.result
      }
      if (JSON.stringify(data.result) === '{}') { // 如果没有数据那就 该咋咋把
        this.isNoContent = true
      }
      this.changeActivated = index
    }
  },
  components: {
    headerTop,
    Footertabs,
    noContent,
    loading
  }
}
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
.container
  .meun
	  margin-top: 88px
		padding-bottom: 55px
.menu_tabs
	overflow: hidden
	border-top: #c7c5c6
	background-color: #fff
	margin: 0px 0 10px 0
	position: fixed
	top: 44px
	border-top: 1px solid #ddd
	z-index: 100000
	width: 100%
	li
		width: 25%
		height: 3.5rem
		padding: 0 1rem
		float: left
		a
			height: 100%
			line-height: 3.5rem
			display: block
			text-align: center
			color: #484848
			&.on
				color: $theme_color
				border-bottom: 2px solid  $theme_color
/* 退班按钮交互 */
.class_tui_tit
    font-size: 1.4rem
    color: #222
    margin: 0 0 5px 0
.class_tui_con
    font-size: 1.3rem
    color: #999
    margin: 0 0 3px 0
    // span间距
    span.pad
		  padding-left: 10px
    // 左侧标题
    span.tit
    	color: #222
    // 钱
    span.money
    	color: $theme_color
.class_tui_tip
    font-size: 1.3rem
    color: #999
    line-height: 18px
    margin: 5px 0 0 0
/* 筛选按钮交互 */
// 孩子列表
.kid_list
	border-bottom: #eee
	padding: 17px 10px 25px 10px
	margin: 0 0 15px 0
	.kid_tit
		font-size: 1.5rem
		color: #4b4b4b
		padding: 0 0 1rem 0
	
	.kid_list_box
		overflow: hidden
		li
			width: 25%
			font-size: 1.2rem
			float: left
			padding: 0rem 0.3rem
			// margin-right:0.3rem
			span
				display: block
				color: $theme_gray666
				background: $theme_gray333
				border-radius: 0.4rem
				text-align: center
				padding: 0.2rem 0rem
				&.on
					background-color:  $theme_color
					color: #fff
// 订单状态列表
.menu_staus_box
	padding: 0 10px 15px 10px
	border-bottom: 0 !important
	.menu_tit
		font-size: 1.5rem
		color: #4b4b4b
		padding: 0 0 15px 0
	
	.menu_list_box
		
		overflow: hidden
		li
			width: 25%
			text-align: center
			float: left
			font-size: 1.2rem
			padding: 0rem 0.3rem
			margin-top: 0.3rem
			&.on
				span
					background-color:  $theme_color
					color: #fff
			span
				display: block
				color: $theme_gray666
				background: $theme_gray333
				border-radius: 0.4rem
				text-align: center
				padding: 0.2rem 0rem
				&.on
					background-color:  $theme_color
					color: #fff
// 操作按钮部分
.shai_ctrl_btns
	overflow: hidden
	li
		width: 50%
		height: 40px
		font-size: 1.4rem
		line-height: 40px
		text-align: center
		float: left
		&.reset
			color:  $theme_color
			border-right: 1px solid #ccc
			border-top: 1px solid $theme_gray333
			background: #fff
		
		&.appliy
			background-color:  $theme_color
			color: #fff
// 弹窗样式部分
.layermchild.shai_box
	width: 100%
	max-width: 100% !important
	.layermcont
		padding: 0
	
	h3
		height: 40px
		color: #fff
	
	.layermend
		right: 4px
		top: 6px
		&::after,&::before
			width: 18px
.layermchild.reimburse
	position: relative
	width:300px !important
	max-width: 300px !important
  min-width:300px !important
	&.on
		.layermbtn
			&::before
				content: ''
				background: transparent !important
			span
				color: $theme_color
	&.tui
		.layermbtn
			span
				color: $theme_gray666
		.layermcont
			ul
				padding: 1rem 0
				li
					overflow: hidden
					padding: 0rem 1.5rem
					font-size: 1.2rem
					span,i
						width: 33.33%
						float: left
					
					b
						width: 33.33%
						float: right
						font-weight: normal
			h5
				text-align: center
				margin-top: 6rem
				color: $theme_color
				font-weight: normal
				font-size: 1.2rem
				margin-bottom: 1rem
	.layermcont
		padding: 0px
		h3
			padding: 0
			background:  $theme_color
			color: #fff
			text-align: center
		
		.reim_box
			padding: 0.7rem 1.2rem
			p
				font-size: 1.2rem
			h4
				font-weight: normal
				color: #000
				span
					font-weight: normal
					color: #666
					&.pay_money
						color: $theme_color
				margin: 0.6rem 0
.order_tabs
	padding-top: 4.3rem

#obligation
	.menu_staus
		color: $theme_gray666
		background-color: #fff
		height: 44px
		position: relative
		margin-bottom: 1rem
		.payment
			position: absolute
			color: #fff
			display: inline-block
			background: #f99630
			height: 100%
			line-height: 27px
			width: 60px
			height: 27px
			margin-top: 9px
			text-align: center
			border-top-right-radius: 20px
			border-bottom-right-radius: 20px
			font-size: 1.3rem
		
		.space
			line-height: 4.7rem
			margin-left: 6.3rem
		
		#time_box
			padding: 0 0 0 6.2rem
			line-height: 48px
			font-size: 1.2rem
		
		.success
			background: #2bc372
		
		.close_order
			background: $theme_gray666
	// 订单课程详情
	.menu_class_infor
		background-color: #fff
		padding: 0 0 15px 15px
		margin: 0 0 10px 0
		.class_tit
			overflow: hidden
			border-bottom: 1px solid #dcdcdc
			padding: 8px 0 8px 0
			.cls_agent
				font-size: 1.3rem
				color: #fff
				background-color:  $theme_color
				border-radius: 2px
				float: right
				padding: 5px 6px 5px 6px
				margin: 0 15px 0 0
			.cls_name
				color: #333
				display: inline-block
				padding: 5px 0 0 0
		.class_con
			padding: 10px 0 0 0
			p
				font-size: 1.4rem
				color: #666
				padding: 4px 0 4px 0
				span
					padding: 0 0 0 2px
	// 订单订单明细
	.menu_money
		width: 100%
		>div
			background-color: #fff
			width: 100%
		// margin: 0 0 10px 0
		border-bottom: 1px solid $theme_gray333
		.money_tit
			color: #333
			padding: 8px 0 8px 1rem
			margin: 0 0 10px 0
		.money_money
			font-size: 1.4rem
			color: #666
			overflow: hidden
			padding: 6px 15px 6px 1rem
			&.minus
				color: $theme_fu_org
			span
				float: right
		.money_total
			font-size: 1.4rem
			color: #484848
			// .bor-t(@color:#dcdcdc)
			padding: 13px 15px 13px 1rem
			margin: 8px 0 0 0
			span
				float: right
	.bottom_btns
		height: 4.7rem
		background: #fff
		>ul
			float: right
			margin-top: 1rem
			>li
				float: left
				height: 2.7rem
				width: 5.9rem
				text-align: center
				line-height: 2.7rem
				margin-right: 1rem
			.menu_cancel
				display: inline-block
				width: 100%
				height: 100%
				border: 1px solid $theme_gray999
			.menu_pay
				display: inline-block
				width: 100%
				height: 100%
				border: 1px solid  $theme_color
				color: $theme_color
/*--- 订单列表 ---*/
.menu_list
	background-color: #fff
	border-top: 1px solid #eee
	border-bottom: 1px solid #eee
	margin: 0px 0 10px 0
	// 进行中
	&.ing
		.pay_ctrls
			.btns
				.cancel
					padding-left: 20px
					padding-right: 20px
				.pay_link
	// 已取消
	&.cancel
		.pay_ctrls
			.btns
				.dele
					width: 40px
					height: 20px
					background: url(//img/menu_dele.png) no-repeat right center
					background-size: 18px 17px
					display: inline-block
					margin: 4px 0 0 0
	// 已完成
	&.have_ok
		position: relative
		.have_ok_img
			width: 104px
			height: 82px
			background: url(//img/menu_have_ok.png) no-repeat 0 0
			background-size: 104px 82px
			position: absolute
			left: 135px
			top: 41px
	.total_pay
		text-align: right	
		height: 4rem
		line-height: 4rem
		padding-right: 1rem
		font-size: 1.5rem
		border-bottom: 1px solid $theme_grayf0
	.list_link
		display: block
		.tit
			border-bottom: 1px solid #eee
			padding: 0.9rem 0 0.9rem 1rem
			.staus
				font-size: 1.2rem
				color: $theme_color
				float: right
				margin: 2px 15px 0 0
			
			.agent
				background: url(//img/menu_list_arrow.png) no-repeat right center
				background-size: 5px 8px
				padding: 0 13px 0 0
			
		
		.course_list
			li
				background: #f5f5f5
				margin-bottom: 1rem
				overflow: hidden
				h3
					text-align: right
					padding-right: 1.2rem
					font-weight: normal
					height: 3rem
					line-height: 3rem
					&.on
						color: $theme_color
				.con
					border-bottom: $theme_gray999
					&.on
						border: 0
					
					overflow: hidden
					padding: 14px 0 10px 1rem
					
					>p
						float: left
						position: relative
						line-height: 1.7rem
						text-align: center
						width: 6.5rem
						height: 6.5rem
						span
							position: absolute
							bottom: 0
							left: 0
							height: 1.5rem
							background: $theme_color
							color: #fff
							width: 100%
						.cls_img
							border-color: #ccc
							width: 100%
					.infor
						margin: 0 0 0 80px
						p
							font-size: 1.1rem
							color: $theme_gray666
							margin: 0 0 0.3rem 0
							color: $theme_gray666
							.right_sty_pay
								float: right
								margin-right: 1rem
							
							&.tit_class_name
								font-size: 1.2rem
								color: $theme_gray666
				.btns_list
					float: right
					margin-right: 1rem
					>ul
						li
							float: left
							margin-left: 1rem
							a
								display: inline-block
								width: 5.9rem
								height: 2.9rem
								color: $theme_gray666
								text-align: center
								line-height: 2.9rem
								border: 1px solid $theme_gray666
							.no_sure
								&.on
									border: 1px solid $theme_color
									color: $theme_color
		.pay_ctrls
			.btns
				.cancel
					padding-left: 13px
					padding-right: 13px
	.pay_ctrls
		height: 40px
		overflow: hidden
		.pay_money
			width: 150px
			color: #484848
			float: left
			margin: 11px 0 0 0
		
		.btns
			overflow: hidden
			text-align: right
			padding: 6px 15px 0 0
			margin: 0 0 0 160px
			.cancel
				font-size: 1.2rem
				border: 1px solid #000
				border-color: #ddd
				border-radius: 2px
				display: inline-block
				padding: 5px 12px
			.pay_link
				width: 60px
				font-size: 1.2rem
				color: $theme_color
				text-align: center
				display: inline-block
				padding: 5px 2px
				margin: 0 0 0 3px
				border: 1px solid #000
				border-color: $theme_color
				border-radius: 2px
</style>
