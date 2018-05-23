
export const loadMore = {
  directives: {
    'load-more': {
      bind: (el, binding) => {
        var scrollToBottom = {
          getScrollTop: function () {
            var scrollTop = 0
            var bodyScrollTop = 0
            var documentScrollTop = 0
            if (document.body) {
              bodyScrollTop = document.body.scrollTop
            }
            if (document.documentElement) {
              documentScrollTop = document.documentElement.scrollTop
            }
            scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
            return scrollTop
          },
          getScrollHeight: function () {
            var scrollHeight = 0
            var documentScrollHeight = 0
            var bodyScrollHeight = 0
            if (document.body) {
              bodyScrollHeight = document.body.scrollHeight
            }
            if (document.documentElement) {
              documentScrollHeight = document.documentElement.scrollHeight
            }
            scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
            return scrollHeight
          },
          getClientHeight: function () {
            var windowHeight = 0
            if (document.compatMode === "CSS1Compat"){
              windowHeight = document.documentElement.clientHeight
            } else {
              windowHeight = document.body.clientHeight
            }
            return windowHeight
          },
          onScrollEvent: function (callback) {
            var This = this
            window.onscroll = function () {
              if (This.getScrollTop() + This.getClientHeight() >= This.getScrollHeight()) {
                typeof callback === 'function' && callback.call(this)
              }
            }
          }
        }
        scrollToBottom.onScrollEvent(function () {
          binding.value()
        })
      }
    }
  }
}
