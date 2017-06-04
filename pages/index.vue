
<template>
  <div>
    <Myheader></Myheader>
  </div>
</template>
<script>
import Myheader from '~components/Myheader.vue'

export default {
  components: {
    Myheader
  },
  head: {
    script: [
    ],
    link: [
      { rel: 'stylesheet', href: './css/common.css' },
      { rel: 'stylesheet', href: './css/index.css' }
    ]
  }
}
</script>
