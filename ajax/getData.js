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
