import fetch from '../ajaxconfig/config/fetch'
/**
 * 点击对应课程请求三级分类
 * @param {*一级课程id} classId
 */
export const syncClass = classId => fetch('/api/courseList/' + classId)

/**
 * 筛选条件下拉的展示请求
*/
export const filter = () => fetch('/api/courseList/filter/data')
