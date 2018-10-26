
const db = require('../../model/db.js')
const url = require('url')
const sql = require('../../model/sql.js')
const sortFilter = require('../paramsFilter.js')
// 引入redis
var dbs = require('../../redis/redis.js')

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
    dbs.exists(params, function (err, result) { // 判断有没有缓存 0 为 无 1为有
      if (err) {
        throw err
      }
      if (result) { // 如果有缓存  直接扔出缓存
        dbs.get(params, function (err, results) {
          if (err) {
            throw err
          }
          res.json(JSON.parse(results))
        })
      } else {
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
            dbs.set(params, JSON.stringify(data), 100, function (err, result) {
              if (err) {
                throw err
              }
            })
            res.json(data)
          })
        })
      }
    })
  }, (error) => {
    if (error) throw error
  })
}

/**
 * 课程类表筛选
 */
exports.filter = (req, res, next) => {
  dbs.exists('filter', function (err, result) {
    if (err) {
      throw err
    }
    if (result) { // 判断缓存是否存在
      dbs.get('filter', function (err, results) {
        if (err) {
          throw err
        }
        res.json(JSON.parse(results))
      })
    } else {
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
        dbs.set('filter', JSON.stringify(data), 300, function (err) { // 不存在的话设置缓存
          if (err) {
            throw err
          }
        })
        res.json(data)
      })
    }
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
  let redisKey = params.query.courseId + '' + filter + '' + sort + '' + params.query.offset + '' + params.query.limit
  dbs.exists(redisKey, function (err, result) {
    if (err) {
      throw err
    }
    if (result && redisKey.indexOf('RAND()') === -1) {
      dbs.get(redisKey, function (err, results) {
        if (err) {
          throw err
        }
        res.json(JSON.parse(results))
      })
    } else {
      db.query(sqls, (err, rows, fields) => {
        if (err) {
          throw err
        }
        var obj = {}
        obj.data = rows
        obj.offset = `${params.query.offset}`
        dbs.set(redisKey, JSON.stringify(obj), 300, function (err) {
          if (err) {
            throw err
          }
        })
        res.json(obj)
      })
    }
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
