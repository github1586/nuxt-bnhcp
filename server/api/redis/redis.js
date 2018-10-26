var dbs = {}
var redis = require('redis')
var client = redis.createClient()
client.on('error', function (err) {
  console.log('Error :', err)
})

client.on('connect', function () {
  // console.log('Redis连接成功.')
})

/**
 * 添加string类型的数据
 * @param key 键
 * @params value 值
 * @params expire (过期时间,单位秒;可为空，为空表示不过期)
 * @param callBack(err,result)
 */
dbs.set = function (key, value, expire, callback) {
  client.set(key, value, function (err, result) {
    if (err) {
      console.log(err)
      callback(err, null)
      return
    }
    if (!isNaN(expire) && expire > 0) {
      client.expire(key, parseInt(expire))
    }
    callback(null, result)
  })
}
/**
 * 查询string类型的数据
 * @param key 键
 * @param callBack(err,result)
 */
dbs.get = function (key, callback) {
  client.get(key, function (err, result) {
    if (err) {
      console.log(err)
      callback(err, null)
      return
    }
    callback(null, result)
  })
}

/**
 * 查询是否存在
 * @param key 键
 * @param callBack(err,result)
 */
dbs.exists = function (key, callback) {
  client.exists(key, function (err, result) {
    if (err) {
      console.log(err)
      callback(err, null)
      return
    }
    callback(null, result)
  })
}

/**
 * 生成自增id
 * @param key 键
 * @param callBack(err,result)
 */
dbs.orderId = function (callback) {
  let time = new Date()
  let second = time.getTime()
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let date = time.getDate()
  client.exists('orders', function (err, result) {
    if (err) {
      throw err
    }
    if (!result) { // 第一次进入生成id
      client.set('orders', second, function (err, result) { // 设置id
        if (err) {
          throw err
        }
      })
    } else {
      client.INCR('orders') // 每次自增
      dbs.get('orders', function (err, results) { // 得到id 回调上传
        if (err) {
          throw err
        }
        results = results + '' + year + month + date
        callback(null, results)
      })
    }
  })
}
// 导出对象
module.exports = dbs
