<template>
  <header class="header" :class="[this.backgroundColor ? 'fff' : '' ]">
    <a href="javascript:" @click="go()" :class="[this.back ? 'header_back' : 'header_back_red']"></a>
    <span :class="[this.className ? 'titgray' : 'tit']">{{this.name}}</span>
  </header>
</template>
<script>
export default {
  props: ['name', 'className', 'backgroundColor', 'back'],
  methods: {
    go () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
header
	width: 100%
	height: 44px
	text-align: center
	padding-top: 5px
	position: fixed
	left: 0
	top: 0
	z-index: 19881121
	span
  // color: #fff
  font-size: 1.6rem
  line-height: 38px
</style>
