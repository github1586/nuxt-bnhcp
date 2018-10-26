
const db = require('../../model/db.js')
const sql = require('../../model/sql.js')
// 引入redis
var dbs = require('../../redis/redis.js')

/**
 *  index show
 */
exports.indexShow = (req, res, next) => {
  db.query(sql.index, function (err, rows, fields) {
    if (err) {
      throw err
    }
    // 检查是否存在获取值（redis）
    dbs.exists('indexshow', function (err, results) {
      if (err) {
        throw err
      }
      if (results) {
        dbs.get('indexshow', function (err, result) {
          if (err) {
            return
          }
          res.json(JSON.parse(result))
        })
      } else {
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
          // 设置值
          dbs.set('indexshow', JSON.stringify(data), 300, function (err, result) {
            if (err) {
              res.json(err)
            }
          })
          res.json(data)
        })
      }
    })
  })
}
