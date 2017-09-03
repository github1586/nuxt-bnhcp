import fetch from '../config/async/fetch'
/**
 * 点击对应课程请求三级分类
 * @param {*一级课程id} classId
 */
export const syncClass = classId => fetch('/api/listhome/' + classId)

/**
 * 筛选条件下拉的展示请求
*/
export const filter = () => fetch('/api/listhome/filter/data')

/**
 * 获取课程列表
*/
export const courselist = (offset, courseId, type, sort, selectScreen = []) => {
  var selectScreenStr = ''
  // 过滤请求数组
  selectScreen.forEach(function (element) {
    for (var i = 0; i < element.classlist.length; i++) {
      if (element.classlist[i].status) {
        selectScreenStr += element.classlist[i].id + '/'
      }
    }
  })
  var data = {
    offset,
    limit: '15',
    type,
    sort,
    courseId,
    selectScreenStr
  }
  return fetch('/api/courselist', data)
}
/**
 * 获取课程详情
 */
export const getDetail = (id) => {
  fetch('/api/courseDetail/index/' + id)
}

/**
 * 模糊查询
 */
export const getleckCourse = (name, offset) => {
  let data = {
    limit: '15',
    offset,
    name
  }
  return fetch('/api/getleckCourse', data)
}

/**
 * 加入购物车
 */
export const postCourseId = (id, user) => {
  var data = {
    id: id,
    user: user
  }
  return fetch('/api/postCourseId', data)
}
/**
 * 是否存在购物车
 */
export const isexistCart = (id) => {
  return fetch('/api/isexistCart/' + id)
}
/**
 * 购物车批量提交
 */
export const mostAddClass = (id) => {
  return fetch('/api/mostAddClass/', {id})
}
/**
 * 删除购物车
 */
export const deleteCart = (deleteArr = []) => {
  // 拿到数组处理一下把
  let id = deleteArr.join('-')
  return fetch('/api/deleteCart/', {id})
}
/**
 * 登录
 */

export const userLongin = (phone, password) => {
  var data = {
    phone,
    password
  }
  return fetch('/api/longin', data, 'POST')
}
/**
 * 登录
 */

export const getCartList = (user) => {
  var data = {
    user
  }
  return fetch('/api/cartList', data)
}

/**
 * 提交订单
 */

export const submitOrder = (phone, id, total, oldOrder) => {
  var data = {
    phone,
    id,
    total,
    oldOrder
  }
  return fetch('/api/submitOrder', data)
}

/**
 * 支付成功
 */

export const paySuccess = (id, uers) => {
  var data = {
    id,
    uers
  }
  return fetch('/api/paySuccess', data)
}
/**
 * 请求订单列表
 */

export const getOrderList = (user, status) => {
  var data = {
    user,
    status
  }
  return fetch('/api/getOrderList', data)
}

