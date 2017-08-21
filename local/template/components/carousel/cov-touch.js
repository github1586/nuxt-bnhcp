const TOUCH_EVENT_MAP = {
  'touchstart': 1,
  'touchmove': 1,
  'touchend': 1
}

const MOUSE_EVENT_MAP = {
  'mousedown': 1,
  'mousemove': 1,
  'mouseup': 1
}

const _ = {
  on (el, type, func) {
    el.addEventListener(type, func, false)
  },
  off (el, type, func) {
    el.removeEventListener(type, func, false)
  }
}

class CovTouch {
  constructor ({ el }) {
    this._hasTouch = ('ontouchstart' in window)
    this.$el = el
    this.init()
    this.touch = {
      start: null,
      end: null
    }
    this.state = {
      swiping: false,
      global: false
    }
    this.queue = {
      'swiping': [],
      'swiped': [],
      'swipe-left': [],
      'swipe-right': [],
      'swipe-up': [],
      'swipe-down': []
    }
  }

  init () {
    if (this._hasTouch) {
      _.on(this.$el, 'touchstart', this.touchStart.bind(this))
      _.on(window, 'touchmove', this.touchMove.bind(this))
      _.on(window, 'touchend', this.touchEnd.bind(this))
      _.on(window, 'touchcancel', this.touchCancel.bind(this))
    } else {
      _.on(this.$el, 'mousedown', this.touchStart.bind(this))
      _.on(window, 'mousemove', this.touchMove.bind(this))
      _.on(window, 'mouseup', this.touchEnd.bind(this))
    }
  }

  destroy () {
    if (this.$el) {
      _.off(this.$el, 'touchstart', this.touchStart.bind(this))
      _.off(this.$el, 'mousedown', this.touchStart.bind(this))
    }

    _.off(window, 'touchmove', this.touchMove.bind(this))
    _.off(window, 'touchend', this.touchEnd.bind(this))
    _.off(window, 'touchcancel', this.touchCancel.bind(this))
    _.off(window, 'mousemove', this.touchMove.bind(this))
    _.off(window, 'mouseup', this.touchEnd.bind(this))

    this.queue = {
      'swiping': [],
      'swiped': [],
      'swipe-left': [],
      'swipe-right': [],
      'swipe-up': [],
      'swipe-down': []
    }
  }

  setGlobal () {
    this.state.global = true
  }

  cancelGlobal () {
    this.state.global = false
  }

  listen (type, $el, func) {
    let rect
    if (!$el) {
      rect = null
    } else {
      let tmp = $el.getBoundingClientRect()
      rect = {
        x: tmp.left,
        y: tmp.top,
        width: tmp.width,
        height: tmp.height
      }
    }

    let token = Math.random() * 9999 + type
    this.queue[type].push({
      $el: $el,
      token: token,
      func: func,
      rect: rect
    })
  }

  leave (type, token) {
    if (!this.queue[type]) return false
    for (let i = 0, len = this.queue[type].length; i < len; i++) {
      if (this.queue[type].token === token) {
        this.queue[type].splice(i - 1, 1)
        return true
      }
    }
    return false
  }

  update () {
    let keys = Object.keys(this.queue)
    let tmp
    for (let key of keys) {
      this.queue[key].forEach(item => {
        if (item.$el) {
          tmp = item.$el.getBoundingClientRect()
          item.rect = {
            x: tmp.left,
            y: tmp.top,
            width: tmp.width,
            height: tmp.height
          }
        }
      })
    }
  }

  clear () {
    let keys = Object.keys(this.queue)
    for (let key of keys) {
      this.queue[key].length = 0
    }
  }

  notice (type, rect) {
    let rectTmp = {}
    let once = true
    let tmpFunc = null
    for (let i = 0, len = this.queue[type].length; i < len; i++) {
      rectTmp = this.queue[type][i].rect
      if (!rectTmp) {
        tmpFunc = this.queue[type][i].func
      } else {
        if (this.rectIn(rect, rectTmp) && !this.state.global) {
          this.queue[type][i].func(this.touch.start, this.touch.end)
          once = false
        }
      }
    }
    if (once && tmpFunc) {
      tmpFunc(this.touch.start, this.touch.end)
    }
  }

  rectIn (small, big) {
    if (small.x > big.x &&
      small.x + small.width < big.x + big.width &&
      small.y > big.y &&
      small.y + small.height < big.y + big.height
    ) {
      return true
    }
    return false
  }

  getRect (dot1, dot2) {
    let rect = {}

    if (dot1.x < dot2.x) {
      rect.x = dot1.x
      rect.width = dot2.x - dot1.x
    } else {
      rect.x = dot2.x
      rect.width = dot1.x - dot2.x
    }

    if (dot1.y < dot2.y) {
      rect.y = dot1.y
      rect.height = dot2.y - dot1.y
    } else {
      rect.y = dot2.y
      rect.height = dot1.y - dot2.y
    }
    return rect
  }

  getPosition (e) {
    if (TOUCH_EVENT_MAP[e.type]) {
      let poss = []
      const len = e.touches.length
      for (let i = 0; i < len; i++) {
        poss.push({
          x: e.touches[i].pageX,
          y: e.touches[i].pageY
        })
      }
      return poss
    } else if (MOUSE_EVENT_MAP[e.type]) {
      return [{
        x: e.pageX,
        y: e.pageY
      }]
    }
  }

  getDistance (dot1, dot2) {
    return Math.sqrt(Math.pow(dot1.x - dot2.x, 2) + Math.pow(dot1.y - dot2.y, 2))
  }

  getAngle (dot1, dot2) {
    return Math.atan2(dot2.y - dot1.y, dot2.x - dot1.x) * 180 / Math.PI
  }

  touchStart (e) {
    this.state.swiping = true
    this.touch.start = this.getPosition(e)[0]
  }

  touchMove (e) {
    if (!this.touch.start) return
    this.touch.end = this.getPosition(e)[0]
    this.notice('swiping', this.getRect(this.touch.end, this.touch.start))
  }

  touchEnd (e) {
    if (!this.touch.start) return
    if (e.type === 'mouseup') {
      this.touch.end = this.getPosition(e)[0]
    }
    let angle = this.getAngle(this.touch.end, this.touch.start)
    if (angle > -45 && angle < 45) {
      this.notice('swipe-left', this.getRect(this.touch.end, this.touch.start))
    }
    if (angle < -135 || angle > 135) {
      this.notice('swipe-right', this.getRect(this.touch.end, this.touch.start))
    }
    if (angle > 45 && angle < 135) {
      this.notice('swipe-up', this.getRect(this.touch.end, this.touch.start))
    }
    if (angle < -45 && angle > -135) {
      this.notice('swipe-down', this.getRect(this.touch.end, this.touch.start))
    }
    this.notice('swiped', this.getRect(this.touch.end, this.touch.start))
    this.state.swiping = false
    this.touch.start = null
  }

  touchCancel (e) {
    e.preventDefault()
    console.log(e)
  }
}

export default CovTouch
