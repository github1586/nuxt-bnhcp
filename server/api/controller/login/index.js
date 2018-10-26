
const db = require('../../model/db.js')
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
