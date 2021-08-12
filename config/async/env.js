/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 */

let baseUrl = 'http://127.0.0.1:3005/api'
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://127.0.0.1:3005';
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://127.0.0.1:3005/api';
}
// 获取老师头像
let getTeacherHead = () => {
  var randnum = parseInt(Math.random() * (100 - 0))
  randnum = randnum < 10 ? '0' + randnum : randnum
  var url = `/img/teacherHead/1_tpl_${randnum}.jpg`
  return url
}
export {
  baseUrl,
  getTeacherHead
}
