
<template>
  <transition name='index'> 
    <div class="body">
      <Myheader></Myheader>
      <Carousel></Carousel>
      <Classification :indexClass="allparentinfo.indexClass"></Classification>
      <RecommendedSchools></RecommendedSchools>
      <Grabactivity></Grabactivity>
      <Courseblock :allparentinfo="allparentinfo.allparentinfo"></Courseblock>
      <Footertabs></Footertabs>
    </div>
  </transition> 
</template>
<script>
import Myheader from '~components/home/Myheader.vue'
import Carousel from '~components/carousel/Carousel.vue'
import Classification from '~components/home/Classification.vue'
import RecommendedSchools from '~components/home/RecommendedSchools.vue'
import Grabactivity from '~components/home/Grabactivity.vue'
import Courseblock from '~components/home/Courseblock.vue'
import Footertabs from '~components/home/Footertabs.vue'
import axios from '~plugins/axios'

export default {
  transition: {
    name: 'index',
    mode: 'out-in',
    beforeEnter: (to, from, next) => {
      console.log(to)
      // console.log(from)
    }
  },
  // ajax module as axios
  async asyncData () {
    let { data } = await axios.get('/api/')
    return {
      allparentinfo: data
    }
  },
  head () {
    return {
      title: 'bnhcp'
    }
  },
  components: {
    Myheader,
    Carousel,
    Classification,
    RecommendedSchools,
    Grabactivity,
    Courseblock,
    Footertabs,
    axios
  }
}
</script>
<style lang="sass">
  .body
    background: #eee
  html 
    width: 100%
    height: 100%
    font-size: 62.5%
    color: #474747
  body 
    font-family: 'Microsoft YaHei', 'Hiragino Sans GB', 'Arail'
    padding-top: 44px
    padding-bottom: 6rem
    -webkit-box-sizing: border-box
    margin: 0
  body.gray 
    background: #eeeeee
  button,input,textarea 
    border: none
    -webkit-outline: none
    outline: none
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
    -webkit-appearance: none
    border-radius: 0
    padding: 0
  .fl 
    float: left
  .fr 
    float: right
  a 
    color: #474747
    text-decoration: none
  a:focus,a.active,a:hover 
    text-decoration: none

  ul,p,h1,h2,h3,h4,h5,h6 
    padding: 0
    margin: 0
  li 
    list-style: none

  em,i 
    font-style: normal

  img 
    vertical-align: middle
  .index-enter-active, .index-leave-active
    transition: opacity 0.2s
  .index-enter, .index-leave-active
    opacity: 0
</style>
