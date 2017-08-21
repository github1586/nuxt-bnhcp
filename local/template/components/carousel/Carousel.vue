<template>
  <div id="app">
    <div class="swiper-box">
      </div>
      <rd-swipe :swipe="swipe">
        <div class="rd-swipe-item" :style="{ 'background-image': `url(${img})` }" v-for="(img, index) in imgs">
        </div>
      </rd-swipe>
    </div>
  </div>
</template>

<script>
import rdSwipe from './vue-slide.vue'
export default {
  data () {
    return {
      swipe: {
        activeIndex: 0
      },
      imgs: [
        'img/banner_test.jpg',
        'img/round01.jpg',
        'img/round01.jpg',
        'img/round01.jpg'
      ]
    }
  },
  options: {
    activeIndex: 0,
    autoplay: 1000,
    pagination: true
  },
  components: {
    rdSwipe
  },
  methods: {
    turnTo (index) {
      this.$children.map(swipe => {
        if (swipe.turnTo) {
          swipe.turnTo(index)
        }
      })
    }
  }
}
</script>
<style lang="sass">
  .rd-swipe
    width: 100%!important
    height: 140px!important
  .rd-swipe-item
    background-size: 100% 100%!important
</style>
