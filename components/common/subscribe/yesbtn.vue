<template>
  <div class="confirm_appoint">
    <input type="button" :value="this.val" />
  </div>
</template>
<script>
export default {
  props: ['val']
}
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
.confirm_appoint
  margin-top: 25px
  padding: 0 15px
  input
    width: 100%
    height: 46px
    line-height: 46px
    color: #fff
    background-color: $theme_color
    border-radius: 5px
    text-align: center
    display: block
    margin: 0 auto
    font-size: 1.5rem
</style>
