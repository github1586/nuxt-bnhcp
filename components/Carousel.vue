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
      contacts: [{
        text: 'Page 1'
      }, {
        text: 'Page 2'
      }, {
        text: 'Page 3'
      }, {
        text: 'Page 4'
      }],
      imgs: [
        'img/round01.jpg',
        'img/round01.jpg',
        'img/round01.jpg',
        'img/round01.jpg'
      ]
    }
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
    height: 200px!important
</style>
