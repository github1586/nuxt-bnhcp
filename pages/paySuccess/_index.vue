<template>
  <pay-success :title="title"></pay-success>
</template>
<script>
import paySuccess from '~/components/common/success.vue'
export default {
  data () {
    return {
      title: '支付成功'
    }
  },
  head: {
    bodyAttrs: {
      class: 'fff'
    }
  },
  components: {
    paySuccess
  }
}
</script>
