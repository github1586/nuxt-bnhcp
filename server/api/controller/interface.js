import { Router } from 'express'
const myrouter = require('./router.js')
var router = Router()
// index router
router.get('/', myrouter.indexShow)
// 页面初始化加载一级分类第一个
router.get('/listhome', myrouter.gradeOne)
// 点击对应一级 给出三级响应
router.get('/listhome/:id', myrouter.gradeOne)
// 点击筛选请求展示内容
router.get('/listhome/filter/data', myrouter.filter)
// 课程列表
router.get('/courselist', myrouter.getCourseList)
// 课程详情
router.get('/courseDetail/index/:id', myrouter.getDetail)
// 课程模糊查询
router.get('/getleckCourse', myrouter.getleckCourse)
// 购物车存储id
router.get('/postCourseId', myrouter.postCourseId)
// 是否存在购物车
router.get('/isexistCart/:id', myrouter.isCart)
// 购物车列表
router.get('/cartList', myrouter.cartList)
// 删除购物车列表
router.get('/deleteCart', myrouter.deleteCart)
// 批量提交购物车
router.get('/mostAddClass', myrouter.mostAddClass)
// 登录
router.post('/longin', myrouter.longin)
// 提交订单
router.get('/submitOrder', myrouter.submitOrder)
// 支付成功 更改订单状态
router.get('/paySuccess', myrouter.paySuccess)
// 请求订单列表
router.get('/getOrderList', myrouter.getOrderList)

export default router
