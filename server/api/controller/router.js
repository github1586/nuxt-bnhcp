/**
 * Created by bobo on 2017/06/10 21.31
 */

var indexshowController = require('./home') // 主页
var courseController = require('./course') // 课程
var cartController = require('./cart') // 购物车
var loginController = require('./login') // 登录
var orderController = require('./order') // 订单

exports.indexShow = indexshowController.indexShow // 首页展示
exports.gradeOne = courseController.gradeOne // 默认一级分类
exports.filter = courseController.filter // 筛选条件
exports.getCourseList = courseController.getCourseList // 课程列表
exports.getDetail = courseController.getDetail // 课程详情
exports.getleckCourse = courseController.getleckCourse // 课程模糊查询
exports.postCourseId = cartController.postCourseId // 购物车 商品id
exports.isCart = cartController.isCart // 是否存在购物车
exports.cartList = cartController.cartList // 购物车列表
exports.deleteCart = cartController.deleteCart // 删除购物车
exports.mostAddClass = cartController.mostAddClass // 批量提交购物车
exports.longin = loginController.longin // 登录
exports.submitOrder = orderController.submitOrder // 订单
exports.paySuccess = orderController.paySuccess // 支付成功
exports.getOrderList = orderController.getOrderList // 获取订单列表
