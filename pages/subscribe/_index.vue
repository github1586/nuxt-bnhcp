<template>
  <div class="container full">
    <header-top :name="this.name" :className="this.className" :back="this.back"></header-top> 
    <detail-time></detail-time>
    <vali-phone></vali-phone>
    <yes-btn :val="this.val"></yes-btn>
  </div>
</template>
<script>
import headerTop from '~/components/common/header.vue'
import detailTime from '~/components/common/subscribe/detailTime.vue'
import valiPhone from '~/components/common/subscribe/valiPhone.vue'
import yesBtn from '~/components/common/subscribe/yesbtn.vue'
export default {
  data () {
    return {
      name: '预约试听',
      val: '确认预约',
      className: 0,
      back: 1
    }
  },
  components: {
    headerTop,
    detailTime,
    valiPhone,
    yesBtn
  }
}
</script>
<style lang="sass" scoped>
.container
  padding-top: 55px
</style>
