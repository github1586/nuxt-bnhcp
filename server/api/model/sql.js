/**
 * index show
*/

exports.index = 'select * from indexShowCourse'

/**
 * 查找分类
*/
exports.showClass = 'select * from showClass'

/**
 * 查找一级分类
*/

exports.gradeOne = 'select * from gradeOne'

/**
 * 查询二级
*/

exports.gradeTwo = id => {
  return `select * from gradeTwo where gradeTwo.pid=${id}`
}

/**
 * 查询三级
*/

exports.gradeThree = id => {
  return `select t.* 
                from 
          gradeThree t 
          left join gradeTwo w on t.pid = w.gradeTwoId where w.pid=${id}`
}

/**
 * 按三级
*/

exports.filterThree = (courseId, filter, sort, offset, limit) => {
  return `SELECT i.institutionsName,t.teacherName,t.evalPerson, p.campusesName, c.*,
        date_format(open_date,'%Y-%m-%d') open_date1, 
        date_format(end_date,'%Y-%m-%d') end_date1 
        from course c left join teacher t  on c.teacher_id = t.thacherId
        left join campuses p  on t.schoolId = p.campusesId
        left join institutions i  on p.campusesParentId = i.institutionsId 
        where c.course_id=${courseId} ${filter}
        ORDER BY ${sort} 
        limit ${offset},${limit}`
}

/**
 * 按二级
*/

exports.filterTwo = (courseId, filter, sort, offset, limit) => {
  return `SELECT i.institutionsName,t.teacherName,t.evalPerson, p.campusesName, c.*,
        date_format(open_date,'%Y-%m-%d') open_date1, 
        date_format(end_date,'%Y-%m-%d') end_date1 
        from course c 
        left join teacher t  on c.teacher_id = t.thacherId
        left join campuses p  on t.schoolId = p.campusesId
        left join institutions i  on p.campusesParentId = i.institutionsId
        left join gradeThree h on c.course_id = h.gradeThreeId
        left join gradeTwo w on h.pid = w.gradeTwoId 
        where w.gradeTwoId=${courseId} ${filter}
        ORDER BY ${sort}
        limit ${offset},${limit}`
}

/**
 * 按一级
*/

exports.filterOne = (courseId, filter, sort, offset, limit) => {
  return `SELECT i.institutionsName,e.gradeId,w.gradeTwoId,t.teacherName,t.evalPerson, p.campusesName, c.*,
        date_format(open_date,'%Y-%m-%d') open_date1, 
        date_format(end_date,'%Y-%m-%d') end_date1 
        from course c 
        left join teacher t  on c.teacher_id = t.thacherId
        left join campuses p  on t.schoolId = p.campusesId
        left join institutions i  on p.campusesParentId = i.institutionsId
        left join gradeThree h on c.course_id = h.gradeThreeId
        left join gradeTwo w on h.pid = w.gradeTwoId
        left join gradeOne e on w.pid = e.gradeId
        where e.gradeId=${courseId} ${filter}
        ORDER BY ${sort}
        limit ${offset},${limit}`
}

/**
 * 课程模糊查询
 */

exports.getCourseLick = (name, offset, limit) => {
  return `SELECT i.institutionsName,t.teacherName,t.evalPerson, p.campusesName, c.*,
        date_format(open_date,'%Y-%m-%d') open_date1, 
        date_format(end_date,'%Y-%m-%d') end_date1 
        from course c 
        left join teacher t  on c.teacher_id = t.thacherId
        left join campuses p  on t.schoolId = p.campusesId
        left join institutions i  on p.campusesParentId = i.institutionsId
        left join gradeThree h on c.course_id = h.gradeThreeId
        left join gradeTwo w on h.pid = w.gradeTwoId 
        where c.name like '%${name}%'
        limit ${offset},${limit}`
}

/**
 * 课程详情
*/

exports.courseDetail = id => {
  return `SELECT n.*, g.content, i.institutionsName,e.gradeId,w.gradeTwoId,t.teacherName,t.evalPerson, p.campusesName, c.*,
        date_format(open_date,'%Y-%m-%d') open_date1, 
        date_format(end_date,'%Y-%m-%d') end_date1 
        from course c 
        left join teacher t  on c.teacher_id = t.thacherId
        left join campuses p  on t.schoolId = p.campusesId
        left join institutions i  on p.campusesParentId = i.institutionsId
        left join gradeThree h on c.course_id = h.gradeThreeId
        left join gradeTwo w on h.pid = w.gradeTwoId
        left join gradeOne e on w.pid = e.gradeId
        left join courseConfigInfo n on n.pid = c.courseId
        left join gc_class_comment_datas g on g.coursepid = c.courseId
        where c.courseId=${id}`
}
/**
 * 购物车 商品id
*/
exports.courseId = (id, user) => {
  return `insert into cart values(NULL,${id},${user})`
}

/**
 * 购物车 删除 id 处理
*/
exports.deleteId = (id, courseId) => {
  let arrs = id.split('-')
  let strSql = 'delete from cart where '
  arrs.forEach(function (element, index) {
    if (index === arrs.length - 1) {
      strSql += ` id = ${element}`
    } else {
      strSql += ` id = ${element} or `
    }
  }, this)
  return strSql
}

/**
 * 查询订单课程
*/
exports.selectOrderClass = (id) => {
  let arrs = id.split('-')
  let strSql = 'select c.name,c.cost from course as c where '
  arrs.forEach(function (element, index) {
    if (index === arrs.length - 1) {
      strSql += ` courseId = ${element}`
    } else {
      strSql += ` courseId = ${element} or `
    }
  }, this)
  return strSql
}

/**
 * 批量提交购物车
*/
exports.cartAddClass = (id) => {
  let arrs = id.split('-')
  let strSql = `SELECT n.*, i.institutionsName,e.gradeId,w.gradeTwoId,t.teacherName,t.evalPerson, p.campusesName, c.*,
        date_format(open_date,'%Y-%m-%d') open_date1, 
        date_format(end_date,'%Y-%m-%d') end_date1 
        from course c 
        left join teacher t  on c.teacher_id = t.thacherId
        left join campuses p  on t.schoolId = p.campusesId
        left join institutions i  on p.campusesParentId = i.institutionsId
        left join gradeThree h on c.course_id = h.gradeThreeId
        left join gradeTwo w on h.pid = w.gradeTwoId
        left join gradeOne e on w.pid = e.gradeId
        left join courseConfigInfo n on n.pid = c.courseId
        where `
  arrs.forEach(function (element, index) {
    if (index === arrs.length - 1) {
      strSql += `c.courseId = ${element} `
    } else {
      strSql += ` c.courseId = ${element} or `
    }
  }, this)
  return strSql
}

/**
 * 获取订单列表
 */
// exports.getOrderList = (arr) => {
//   var sqlArr = []
//   var strSql = `SELECT c.open_date,c.end_date,o.* FROM bnhcp.orders o left join course c on`
//   for (var i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//       strSql = strSql + ` courseId = ${arr[i]}  or `
//     } else {
//       var strSqls = `SELECT c.open_date,c.end_date,o.* FROM bnhcp.orders o left join course c on`
//       for (var j = 0; j < arr[i].length; j++) {
//         strSqls = strSqls + ` courseId = ${arr[i][j]} or `
//       }
//       sqlArr.push(strSqls)
//     }
//   }
//   sqlArr.push(strSql)
//   return sqlArr
// }
/**
 * 处理请求参数 批量插入订单课程
 */
exports.insertValues = (req, result) => {
  let id = req.query.id
  let sqls = `INSERT INTO orders  VALUES`
  if (id.indexOf('-') === -1) {
    sqls += `(NULL,${req.query.phone},'${req.query.id}','${result}','${req.query.total}',now(),${0})`
    return sqls
  } else {
    let idArr = id.split('-')
    for (var i = 0; i < idArr.length; i++) {
      if (i === 0) {
        sqls += `(NULL,${req.query.phone},'${idArr[i]}','${result}','${req.query.total}',now(),${0})`
      } else {
        sqls += `,(NULL,${req.query.phone},'${idArr[i]}','${result}','${req.query.total}',now(),${0})`
      }
    }
    return sqls
  }
}

/**
 * 获取订单列表
*/

exports.getOrderListSql = (status, user) => {
  if (parseInt(status) === 0 || parseInt(status) === 1 || parseInt(status) === 2) {
    return `SELECT
           c.name,c.address,c.end_date,c.cost,c.teacher_id,t.teacherName,c.teacher_actor,c.teacher_actor,o.*,
           date_format(open_date,'%Y-%m-%d %h-%i-%s') open_date1,
           date_format(end_date,'%Y-%m-%d %h-%i-%s') end_date1,
           date_format(order_date,'%Y-%m-%d %h-%i-%s') order_date1
           FROM bnhcp.orders o
           left join course c on  c.courseId = courseOrder 
           left join teacher t on c.teacher_id = t.thacherId
           where phone = ${user} and orderSataus = ${status}`
  } else if (parseInt(status) === -1 || status === 'undefined') {
    return `SELECT
           c.name,c.address,c.end_date,c.cost,c.teacher_id,t.teacherName,c.teacher_actor,c.teacher_actor,o.*,
           date_format(open_date,'%Y-%m-%d %h-%i-%s') open_date1,
           date_format(end_date,'%Y-%m-%d %h-%i-%s') end_date1,
           date_format(order_date,'%Y-%m-%d %h-%i-%s') order_date1
           FROM bnhcp.orders o
           left join course c on  c.courseId = courseOrder 
           left join teacher t on c.teacher_id = t.thacherId
           where phone = ${user}`
  }
}
