
/**
 * Created by bobo on 2017/06/10 21.31 (cart)
 */
const db = require('../../model/db.js')
const url = require('url')
const sql = require('../../model/sql.js')
/**
 * 购物车 商品id
 */
exports.postCourseId = (req, res, next) => {
  let params = url.parse(req.url, true)
  db.query(sql.courseId(params.query.user, params.query.id),
    {
      id: params.query.id,
      user: params.query.user
    }, (err, rows, fields) => {
      if (err) {
        throw err
      }
      if (err || !rows.affectedRows) {
        res.json({
          data: null,
          status: false,
          msg: '加入购物车失败'
        })
      } else {
        res.json({
          data: null,
          status: true,
          msg: '成功加入购物车'
        })
      }
    })
}
/**
 * 是否存在购物车
 */
exports.isCart = (req, res, next) => {
  let params = url.parse(req.url, true)
  let id = params.pathname.slice(params.pathname.length - 8, params.pathname.length)
  db.query(`select courseId from cart where courseId=${id}`, (err, rows, fields) => {
    if (err) {
      throw err
    }
    if (rows.length) {
      res.json({
        data: null,
        status: true,
        msg: 1
      })
    } else {
      res.json({
        data: null,
        status: false,
        msg: 0
      })
    }
  })
}

/**
 * 购物车列表
 */
exports.cartList = (req, res, next) => {
  let user = url.parse(req.url, true)
  db.query(`SELECT c.*, t.id ,p.campusesName , e.teacherName, c.teacher_actor ,date_format(open_date,'%Y-%m-%d') open_date1,date_format(end_date,'%Y-%m-%d') end_date1
          FROM 
          course c right join cart t on c.courseId = t.courseId
          left join teacher e on e.thacherId=c.teacher_id
          left join campuses p on p.campusesId = e.schoolId where t.phone = ${user.query.user};`, (err, rows, fields) => {
    if (err) {
      throw err
    }
    res.json({
      result: rows,
      status: true,
      total: rows.length
    })
  })
}

/**
 * 删除购物车
 */
exports.deleteCart = (req, res, next) => {
  let courseId = req.query.id
  let sqls = sql.deleteId(courseId)
  db.query(sqls, (err, rows, fields) => {
    if (err) {
      throw err
    } else {
      let result = {
        status: true,
        data: rows,
        rows: rows.affectedRows
      }
      res.json(result)
    }
  })
}

/**
 * 批量提交购物车
 */
exports.mostAddClass = (req, res, next) => {
  let courseId = req.query.id
  db.query(sql.cartAddClass(courseId), (err, rows, fields) => {
    if (err) {
      throw err
    } else {
      let result = {
        status: true,
        data: rows,
        rows: rows.affectedRows
      }
      res.json(result)
    }
  })
}
