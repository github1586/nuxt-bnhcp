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
exports.deleteId = (id) => {
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

