
const db = require('../../model/db.js')
const sql = require('../../model/sql.js')
// 引入redis
var dbs = require('../../redis/redis.js')
/**
 * 提交订单
 */
exports.submitOrder = (req, res, next) => {
  dbs.orderId(function (err, result) {
    if (err) {
      throw err
    }
    db.query(`select orderSataus from orders where phone = '${req.query.phone}' and orderSataus=0`, function (err, rows, fields) {
      if (err) {
        throw err
      }
      if (!rows.length || req.query.oldOrder !== 'undefined') { // 没有待付款的时候在提交订单 没有传参数的时候是undefined 还是 string 类型
        db.query(sql.insertValues(req, result), function (err, rows, fields) {
          if (err) {
            throw err
          }
          selectCost(req.query.id, function (err, results) {
            if (err) {
              throw err
            }
            let data = {}
            data.status = true
            results.orderId = result // 订单id放进去
            data.orderData = results // 金额 和 课程名字放进去
            res.json(data)
          })
        })
      } else { // 返回拒绝提交
        let data = {}
        data.status = false
        data.result = '您有未结清订单～' // 金额 和 课程名字放进去
        res.json(data)
      }
    })
  })
}
/**
 * 计算总价
 * @param {*课程id} id
 * @param {*回调上传} callback
 */
function selectCost (id, callback) {
  db.query(sql.selectOrderClass(id), function (err, rows, fields) {
    if (err) {
      throw err
    }
    let orderData = {}
    let total = 0
    let orderName = []
    for (var i = 0; i < rows.length; i++) {
      total = total + parseFloat(rows[i].cost)
      orderName.push(rows[i].name)
    }
    orderData.total = total
    orderData.orderName = orderName.join(',')
    callback(null, orderData)
  })
}
/**
 * 支付成功
*/
exports.paySuccess = (req, res, next) => {
  let id = req.query.id
  db.query(`UPDATE orders SET orderSataus=? WHERE orderId='${id}'`, [1], function (err, rows, fields) {
    if (err) {
      throw err
    }
    db.query(`DELETE FROM orders WHERE orderSataus=? AND phone='${req.query.uers}'`, [0], function (err, rows, fields) {
      if (err) {
        throw err
      }
      let data = {}
      data.status = true
      data.result = rows
      res.json(data)
    })
  })
}
/**
 * 获取订单列表
*/
exports.getOrderList = (req, res, next) => {
  let user = req.query.user // 用户手机号
  db.query(sql.getOrderListSql(req.query.status, user), function (err, rows, fields) { // 传入当前需要什么订单状态
    if (err) {
      throw err
    }
    let result = {}
    // 把所有的多个课程整合一个里面
    for (var i = 0; i < rows.length; i++) {
      if (!result[rows[i].orderId]) { // 如果当前的订单id不存在result里面
        result[rows[i].orderId] = []
        result[rows[i].orderId].push(rows[i])
      } else {
        result[rows[i].orderId].push(rows[i])
      }
    }
    let data = {}
    data.status = true
    data.result = result
    res.json(data)
  })
}
