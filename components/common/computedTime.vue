<template>
  <span id="time_box">
    {{countdown}}
  </span>
</template>
<script>
export default {
  props: ['time'],
  data () {
    return {
      countTime: 600
    }
  },
  mounted () {
    this.countTime -= this.munisTime
    this.minusTime()
  },
  methods: {
    minusTime () {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.countTime --
        if (this.countTime === 0) {
          clearInterval(this.timer)
          this.$router.push({path: '/coursehome'})
        }
      }, 1000)
    }
  },
  computed: {
    countdown: function () {
      let minute = parseInt(this.countTime / 60)
      let second = parseInt(this.countTime % 60)
      minute < 10 ? minute = '0' + minute : minute // 补零
      second < 10 ? second = '0' + second : second
      return '去支付(还剩' + minute + '分' + second + '秒)'
    },
    munisTime: function () {
      return parseInt(this.time)
    }
  }
}
</script>
