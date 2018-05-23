<template>
  <div>
    <h1 v-if="into">
      <img src="/img/app_download_parent_img_new.png" alt="">
      <p>报的好，学得对</p> 
    </h1>
    <div v-else id="room">
      <div class="top">

      </div>
      <div class="bottom_send">
        <input type="text">
        <input type="button" name="" id="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      into: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.into = false
    }, 3000)
  },
  head: {
    bodyAttrs: {
      class: 'fff'
    }
  }
}
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
@-webkit-keyframes fadeIn
  0%
    opacity: 1
  20%
    opacity: 0.9
  30%
    opacity: 0.8
  40%
    opacity: 0.7
  50%
    opacity: 0.6
  60%
    opacity: 0.5
  70%
    opacity: 0.4
  80%
    opacity: 0.3
  100%
    opacity: 0
h1
  position: absolute
  top: 50%
  transform: translateY(-50%)
  width: 100%
  text-align: center
  margin-top: -50px
  animation: fadeIn 0.8s 3s forwards
  p
    color: $theme_color
    margin-top: 20px
    font-weight: normal
#room
  .top
    height: 60px
    width: 100%
    background: $theme_fu_org
  .bottom_send
    height: 40px
    background: $theme_fu_red
    width: 100%
    position: fixed
    bottom: 0
    left: 0
    input
      height: 38px
</style>

