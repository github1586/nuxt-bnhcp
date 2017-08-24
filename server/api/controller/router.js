/**
 * Created by bobo on 2017/06/10 21.31
 */

const db = require('../model/db.js')
const url = require('url')
const sql = require('../model/sql.js')
// const path = require('path')
const sortFilter = require('./paramsFilter.js')

/**
 *  index show
 */
exports.indexShow = (req, res, next) => {
  db.query(sql.index, function (err, rows, fields) {
    if (err) {
      throw err
    }
    var allparentinfo = []
    var indexClass = []
    for (var i = 0; i < rows.length; i++) {
      // 两个大分类
      var classList = []
      // 四个小分类
      var classMoreList = []
      // 两个大分类
      var classImg = rows[i].showMainName.split('&')
      for (var j = 0; j < classImg.length; j++) {
        // 每次得到的对象push进数组
        classList.push({ classname: classImg[j].split('@')[0], imgurl: classImg[j].split('@')[1], coueseGradeId: rows[i].coueseGradeId })
      }
      // 四个小分类 课程名称
      var classSmall = rows[i].showSmallName.split('&')
      for (var x = 0; x < classSmall.length; x++) {
        classMoreList.push({classname: classSmall[x].split('@')[0], imgurl: classSmall[x].split('@')[1], coueseGradeId: rows[i].coueseGradeId})
      }
      // 把整块 push 到数据数组
      allparentinfo.push({headinfo: {before: rows[i].showCourseMore, after: rows[i].showCourseName, imgurl: rows[i].showCourseIcon},
        course: {
          classList: classList,
          classMoreList: classMoreList
        }})
    }
    // 查找分类
    db.query(sql.showClass, function (err, rows, fields) {
      if (err) {
        throw err
      }
      // 循环查找数据
      for (var i = 0; i < rows.length; i++) {
        var classObj = {}
        classObj.showClassImg = rows[i].showClassImg
        classObj.showClassName = rows[i].showClassName
        classObj.classPid = rows[i].classPid
        indexClass.push(classObj)
      }
      // 专成json格式
      var data = {allparentinfo: allparentinfo, indexClass: indexClass}
      res.json(data)
    })
  })
}
/**
 * 课程列表 分类查询
 */
exports.gradeOne = (req, res, next) => {
  var promise = new Promise((resolve, reject) => {
    // 查询所有的一级
    db.query(sql.gradeOne, (err, rows, fields) => {
      if (err) {
        reject(err)
      }
      resolve(rows)
    })
  })
  promise.then((rows) => {
    let data = {}
    data.gradeOne = rows
    // 判断是否带参数
    var params = ''
    if (req.params.id) {
      params = req.params.id
    } else {
      params = rows[0].gradeId
    }

    // 查询二级
    db.query(sql.gradeTwo(params), (err, rows, fields) => {
      // 循环查询
      if (err) {
        throw err
      }
      data.gradeTwo = rows
      data.gradeThree = []
      db.query(sql.gradeThree(params), (err, rows, fields) => {
        if (err) {
          throw err
        }
        // 三级push进去
        data.gradeThree = rows
        res.json(data)
      })
    })
  }, (error) => {
    if (error) throw error
  })
}
/**
 * 课程类表筛选
 */

exports.filter = (req, res, next) => {
  db.query('select * from filter', (err, rows, fields) => {
    if (err) {
      throw err
    }
    var data = []
    rows.forEach(function (item, index) {
      var filterTitle = item.filterTitle
      // 每次生成空数组
      var classlist = []
      // 循环查询结果
      for (var indexs in item) {
        // 判断是否有/
        if (item[indexs].toString().indexOf('/') !== -1) {
          // 以/切割
          var singleObj = item[indexs].split('/')
          // 单个对象push 组装classlist obj
          classlist.push({
            name: singleObj[0],
            id: singleObj[1]
          })
        }
      }
      // 拼装data整个大对象
      data.push({
        title: filterTitle,
        classlist: classlist
      })
    }, this)
    res.json(data)
  })
}

/**
 * 课程列表
 */
exports.getCourseList = (req, res, next) => {
  var params = url.parse(req.url, true)
  var sqls = ''
  // 过滤排序类型
  var sort = sortFilter.sort(params.query.sort)
  // 筛选条件
  var filter = ''
  if (params.query.selectScreenStr !== '') {
    filter = sortFilter.filter(params.query.selectScreenStr)
  } else {
    filter = ''
  }
  // 课程三级 筛选的sql
  if (params.query.type === '3') {
    sqls = sql.filterThree(params.query.courseId, filter, sort, params.query.offset, params.query.limit)
  } else if (params.query.type === '2') {
    // 课程二级筛选的sql
    sqls = sql.filterTwo(params.query.courseId, filter, sort, params.query.offset, params.query.limit)
  } else if (params.query.type === '1') {
    // 课程一级筛选的sql
    sqls = sql.filterOne(params.query.courseId, filter, sort, params.query.offset, params.query.limit)
  }
  db.query(sqls, (err, rows, fields) => {
    if (err) {
      throw err
    }
    var obj = {}
    obj.data = rows
    obj.offset = `${params.query.offset}`
    res.json(obj)
  })
}

/**
 * 课程详情
 */
exports.getDetail = (req, res, next) => {
  let params = url.parse(req.url, true)
  let id = params.pathname.slice(params.pathname.length - 8, params.pathname.length)
  db.query(sql.courseDetail(id), (err, rows, fields) => {
    if (err) {
      throw err
    }
    let evaluate = []
    rows.forEach(function (element, i) {
      if (i > 1) return
      evaluate.push(element.content)
    }, this)
    rows[0].evaluate = evaluate
    res.json(rows[0])
  })
}

/**
 * 课程模糊查询
 */

exports.getleckCourse = (req, res, next) => {
  let params = url.parse(req.url, true)
  let name = params.query.name
  let offset = params.query.offset
  let limit = params.query.limit
  let sqls = sql.getCourseLick(name, offset, limit)
  db.query(sqls, (err, rows, fields) => {
    if (err) {
      throw err
    }
    var obj = {}
    obj.data = rows
    obj.offset = `${params.query.offset}`
    res.json(obj)
  })
}

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

exports.deleteCart = (req, res, next) => {
  let courseId = req.query.id
  db.query(sql.deleteId(courseId), (err, rows, fields) => {
    console.log(sql.deleteId(courseId))
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
 * 登录
 */
exports.longin = (req, res, next) => {
  let params = req.body
  db.query(`select * from user u where u.phone = ${params.phone}`, (err, rows, fields) => {
    if (err) {
      throw err
    }
    if (rows.length) {
      if (rows[0].password === params.password) {
        res.json({
          result: null,
          status: true,
          msg: '登录成功'
        })
      } else {
        res.json({
          result: null,
          status: false,
          msg: '密码错误'
        })
      }
    } else {
      db.query(`INSERT INTO user VALUES(NULL,${params.phone},'${params.password}')`,
      (err, rows, fields) => {
        if (err) {
          throw err
        }
        if (rows.affectedRows) {
          res.json({
            result: null,
            status: true,
            msg: '登录成功'
          })
        } else {
          res.json({
            result: null,
            status: false,
            msg: '注册失败'
          })
        }
      })
    }
  })
}
