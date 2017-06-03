
<template>
  <Myheader></Myheader>
</template>
<script>
import Myheader from '~components/Myheader.vue'

export default {
  components: {
    Myheader
  },
  head: {
    script: [
      { src: 'js/libs/zepto.min.js' },
      { src: 'js/libs/zepto.touch.js' },
      { src: 'js/libs/zepto.fx.js' },
      { src: 'js/plugin/layer/layer.m.js' },
      { src: 'js/plugin/layer/layer_second.js' },
      { src: 'js/plugin/widget/widget.js' },
      { src: 'js/plugin/superslide/TouchSlide.1.1.js' },
      { src: 'js/plugin/scroll/scroll.js' },
      { src: 'js/page/page.js' },
      { src: 'js/libs/zepto.min.js' }
    ],
    link: [
      { rel: 'stylesheet', href: './css/common.css' },
      { rel: 'stylesheet', href: './css/index.css' }
    ]
  }
}
</script>
