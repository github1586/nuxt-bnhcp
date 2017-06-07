
<template>
  <div class="body">
    <Myheader></Myheader>
    <Carousel></Carousel>
    <Classification></Classification>
    <RecommendedSchools></RecommendedSchools>
  </div>
</template>
<script>
import Myheader from '~components/Myheader.vue'
import Carousel from '~components/carousel/Carousel.vue'
import Classification from '~components/Classification.vue'
import RecommendedSchools from '~components/RecommendedSchools.vue'
export default {
  components: {
    Myheader,
    Carousel,
    Classification,
    RecommendedSchools
  },
  head: {
    script: [
    ],
    link: [

    ]
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
</style>
