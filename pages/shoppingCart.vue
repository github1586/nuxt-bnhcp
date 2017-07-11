<template>
  <div class="containers">
    <div class="herder">
      <p>购物车</p>
    </div>
    <div class="no_content">
      <i class="icon menu"></i>
      <p class="margin_left_p">购物车为空,快<nuxt-link to="/coursehome">去选课</nuxt-link>吧</p>
    </div>
    <footer-tab></footer-tab>
  </div> 
</template>
<script>
import footerTab from '~components/home/Footertabs.vue'
export default {
  components: {
    footerTab
  }
}
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
.containers
  .herder
    @include  wh(100%, 4.5rem)
    background: #f8f8f8
    p
      text-align: center
      line-height: 4.5rem
      font-size: 1.6rem
.no_content
  @include center
  margin-top: -6rem
  a
    color: $theme_color 
</style>
