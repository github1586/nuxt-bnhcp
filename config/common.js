/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (process.BROWSER_BUILD) {
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
  }
}

/**
 * 获取localStorage
 */
export const getStore = (name) => {
  if (!name) return
  if (process.BROWSER_BUILD) {
    return window.localStorage.getItem(name)
  }
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 * 过滤周
 */
const getWeek = (arr) => {
  if (process.BROWSER_BUILD) {
    let weekArr = []
    arr.forEach(function (element) {
      switch (element) {
        case '1':
          weekArr.push('一')
          break
        case '2':
          weekArr.push('二')
          break
        case '3':
          weekArr.push('三')
          break
        case '4':
          weekArr.push('四')
          break
        case '5':
          weekArr.push('五')
          break
        case '6':
          weekArr.push('六')
          break
        case '7':
          weekArr.push('日')
          break
        default:
          break
      }
    })
    return '每周' + weekArr.join(',') + '上课'
  }
}

/**
 * 导出周几上课
 */
export const filterWeek = value => {
  if (process.BROWSER_BUILD) {
    let week = []
    if (value.indexOf('@') !== -1) {
      let arr = value.split('@')
      arr.forEach(function (element) {
        week.push(element.slice(2))
      }, this)
      return getWeek(week)
    } else {
      week.push(value.slice(2))
      return getWeek(week)
    }
  }
}
