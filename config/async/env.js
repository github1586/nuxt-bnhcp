/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 */

let baseUrl = ''
if (process.env.NODE_ENV === 'development') {

} else if (process.env.NODE_ENV === 'production') {

// baseUrl = 'http://cangdu.org:8001';
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

