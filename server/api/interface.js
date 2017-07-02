import { Router } from 'express'

const myrouter = require('./model/router.js')

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

export default router
