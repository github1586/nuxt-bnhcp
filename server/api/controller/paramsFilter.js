/**
 * value 需要过滤的排序排序方式
 */
exports.sort = (value) => {
  switch (value) {
    case '1' :
      return 'RAND()'
    case '2' :
      return 'RAND()'
    case '3' :
      return 'browse_number desc'
    case '4' :
      return 'evalPerson desc'
    case '5' :
      return 'cost desc'
    case '6' :
      return 'cost asc'
    default:
      return 'RAND()'
  }
}
/**
 * 筛选的条件sql
 */
exports.filter = (value) => {
  let sql = ''
  let paramsArr = value.split('/').splice(0, value.split('/').length - 1)
  paramsArr.forEach(function (element) {
    let isWeek = element.indexOf('goods_week')
    let isPrice = element.indexOf('^')
    if (isWeek !== -1 || isPrice !== -1) {
      if (isWeek !== -1) {
        sql += ' ' + ' AND ' + ' ' + element.split('=')[0] + ' like ' + '"%' + element.split('=')[1] + '%"'
      } else {
        sql += ' ' + 'AND cost ' + ' between ' + ' ' + element.split('^')[0] + ' ' + ' and ' + ' ' + element.split('^')[1]
      }
    } else {
      sql += ' ' + 'AND' + ' ' + element
    }
  }, this)
  return sql
}
