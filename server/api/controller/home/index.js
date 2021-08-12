
const db = require('../../model/db.js')
const sql = require('../../model/sql.js')
// 引入redis
var dbs = require('../../redis/redis.js')

/**
 *  index show
 */
exports.indexShow = (req, res, next) => {
  res.json({"allparentinfo":[{"headinfo":{"before":"更多课程","after":"中小学","imgurl":"img/icon_middle.png"},"course":{"classList":[{"classname":"精品钢琴课","imgurl":"img/cls_mid1.jpg"},{"classname":"精品数学课","imgurl":"img/cls_mid2.jpg"}],"classMoreList":[{"classname":"高中语文","imgurl":"img/cls_icon_chaness.png"},{"classname":"小学英语","imgurl":"img/cls_icon_english.png"},{"classname":"初中物理","imgurl":"img/cls_icon_wuli.png"},{"classname":"高中数学","imgurl":"img/cls_icon_math.png"}]}},{"headinfo":{"before":"更多课程","after":"艺术/体育","imgurl":"img/icon_art.png"},"course":{"classList":[{"classname":"精品语文课","imgurl":"img/cls_mid3.jpg"},{"classname":"精品生物课","imgurl":"img/cls_mid4.jpg"}],"classMoreList":[{"classname":"钢琴","imgurl":"img/cls_icon_gangqin.png"},{"classname":"古筝","imgurl":"img/cls_icon_guzheng.png"},{"classname":"吉他","imgurl":"img/cls_icon_jita.png"},{"classname":"小提琴","imgurl":"img/cls_icon_tiqin.png"}]}},{"headinfo":{"before":"更多课程","after":"语言/留学","imgurl":"img/icon_liuxue.png"},"course":{"classList":[{"classname":"精品体育课","imgurl":"img/cls_mid5.jpg"},{"classname":"精品麻将课","imgurl":"img/cls_mid6.jpg"}],"classMoreList":[{"classname":"葡萄牙语","imgurl":"img/cls_icon_putao.png"},{"classname":"外教口语","imgurl":"img/cls_icon_waijiao.png"},{"classname":"新概念英语","imgurl":"img/cls_icon_xingainian.png"},{"classname":"剑桥英语","imgurl":"img/cls_icon_jianqiao.png"}]}},{"headinfo":{"before":"更多课程","after":"拓展训练","imgurl":"img/icon_tuozhan.png"},"course":{"classList":[{"classname":"精品出游课","imgurl":"img/cls_mid7.jpg"},{"classname":"精品玩耍课","imgurl":"img/cls_mid8.jpg"}],"classMoreList":[{"classname":"冬夏令营","imgurl":"img/cls_icon_dongxia.png"},{"classname":"亲子出游","imgurl":"img/cls_icon_qinzi.png"},{"classname":"儿童乐园","imgurl":"img/cls_icon_ertong.png"},{"classname":"拓展培训","imgurl":"img/cls_icon_tuozhanpei.png"}]}}],"indexClass":[{"showClassImg":"img/class_art_icon.png","showClassName":"艺术","classPid":"15963587"},{"showClassImg":"img/class_tiyu_icon.png","showClassName":"体育","classPid":"15963588"},{"showClassImg":"img/class_yuyan_icon.png","showClassName":"语言","classPid":"15963589"},{"showClassImg":"img/class_liuxue_icon.png","showClassName":"留学","classPid":"15963590"},{"showClassImg":"img/class_xiao_icon.png","showClassName":"小学","classPid":"15963591"},{"showClassImg":"img/class_sheng_icon.png","showClassName":"小升初","classPid":"15963592"},{"showClassImg":"img/class_chuzhong_icon.png","showClassName":"初中","classPid":"15963593"},{"showClassImg":"img/class_zhongkao_icon.png","showClassName":"中考","classPid":"15963594"},{"showClassImg":"img/class_gao_icon.png","showClassName":"高中","classPid":"15963595"},{"showClassImg":"img/class_sheng_icon.png","showClassName":"更多","classPid":"all"}]})
  // db.query(sql.index, function (err, rows, fields) {
  //   if (err) {
  //     throw err
  //   }
  //   // 检查是否存在获取值（redis）
  //   dbs.exists('indexshow', function (err, results) {
  //     if (err) {
  //       throw err
  //     }
  //     if (results) {
  //       dbs.get('indexshow', function (err, result) {
  //         if (err) {
  //           return
  //         }
  //         res.json(JSON.parse(result))
  //       })
  //     } else {
  //       var allparentinfo = []
  //       var indexClass = []
  //       for (var i = 0; i < rows.length; i++) {
  //         // 两个大分类
  //         var classList = []
  //         // 四个小分类
  //         var classMoreList = []
  //         // 两个大分类
  //         var classImg = rows[i].showMainName.split('&')
  //         for (var j = 0; j < classImg.length; j++) {
  //           // 每次得到的对象push进数组
  //           classList.push({ classname: classImg[j].split('@')[0], imgurl: classImg[j].split('@')[1], coueseGradeId: rows[i].coueseGradeId })
  //         }
  //         // 四个小分类 课程名称
  //         var classSmall = rows[i].showSmallName.split('&')
  //         for (var x = 0; x < classSmall.length; x++) {
  //           classMoreList.push({classname: classSmall[x].split('@')[0], imgurl: classSmall[x].split('@')[1], coueseGradeId: rows[i].coueseGradeId})
  //         }
  //         // 把整块 push 到数据数组
  //         allparentinfo.push({headinfo: {before: rows[i].showCourseMore, after: rows[i].showCourseName, imgurl: rows[i].showCourseIcon},
  //           course: {
  //             classList: classList,
  //             classMoreList: classMoreList
  //           }})
  //       }
  //       // 查找分类
  //       db.query(sql.showClass, function (err, rows, fields) {
  //         if (err) {
  //           throw err
  //         }
  //         // 循环查找数据
  //         for (var i = 0; i < rows.length; i++) {
  //           var classObj = {}
  //           classObj.showClassImg = rows[i].showClassImg
  //           classObj.showClassName = rows[i].showClassName
  //           classObj.classPid = rows[i].classPid
  //           indexClass.push(classObj)
  //         }
  //         // 专成json格式
  //         var data = {allparentinfo: allparentinfo, indexClass: indexClass}
  //         // 设置值
  //         dbs.set('indexshow', JSON.stringify(data), 300, function (err, result) {
  //           if (err) {
  //             res.json(err)
  //           }
  //         })
  //         res.json(data)
  //       })
  //     }
  //   })
  // })
}
