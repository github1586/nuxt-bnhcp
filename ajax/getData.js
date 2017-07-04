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
export const courselist = (offset, coursename) => {
  var data = {
    offset,
    limit: '20',
    coursename
  }
  return fetch('/api/courselist', data)
}
