<template>
  <header id="header" class="header">
    <nuxt-link to="/" class="header_back"></nuxt-link>
    <div class="header_sear_sel">
      <div class="drop_down" data-role="selectFang">
        <span data-role="sel_txt" class="sel_txt">课程</span>
      </div>
      <div class="header_sear_box">
        <input type="" v-model.trim="name" v-on:keyup.13="submit()" placeholder="搜索课程、机构" class="header_sear_txt">
        <a href="javascript: "></a>
      </div>
    </div>
  </header>
</template>
<script>
import {getStore, setStore} from '../../config/common.js'
export default {
  data () {
    return {
      name: ''
    }
  },
  mounted () {
    this.name = this.$route.query.name
  },
  beforeRouteUpdate () {
    alert(1)
  },
  methods: {
    submit () { // 通过路由传过去值
      let history = JSON.parse(getStore('history'))
      history === undefined ? '' : history = []
      history.push(this.name)
      setStore('history', JSON.stringify(history))
      this.$router.push({path: '/coursehome', query: {name: this.name}})
    }
  }
}
</script>
<style lang="sass" scoped>
header
  background: #fff
  border-bottom: 1px solid #b2b2b2
  .header_back
    background: url('/img/icon_back_red.png')no-repeat
    background-size: 10px 16px
  .header_sear_sel
    margin-top: 2px
    margin-left: 43px
    margin-right: 10px
    padding-bottom: 2px
    .drop_down
      width: 48px
      height: 30px
      font-size: 1.2rem
      line-height: 30px
      color: #474747
      text-align: left
      background: url(/img/header_drop_down.png) no-repeat 36px center #eee
      background-size: 8px 5px
      float:left
      position: relative
      padding: 0 0 0 8px
      border-top-left-radius: 50px 
      border-bottom-left-radius: 50px
      .sel_list
        width: 50px
        background: #fff
        text-align: center
        border: 1px solid #eee
        border-radius: 0.3rem
        display: none
        padding: 5px 0
        position: absolute
        left: 0
        top: 25px
    .header_sear_box
      margin-left: 48px
      margin-top: -30px
      position: relative
      a
        position: absolute
        display: none
        top: 5px
        right: 5px
        width: 14px
        height: 14px
        border-radius: 50%
        background: url('/img/icon_close.png')no-repeat center center
        background-size: 14px 14px
        &.on
          display: block
      .header_sear_txt
        width: 100%
        height: 30px
        font-size: 1.2rem
        color:#474747
        background: #f5f5f5 url("/img/search_page.png") no-repeat 5px 9px
        background-size: 14px 13px
        border-top-right-radius: 50px
        border-bottom-right-radius: 50px
        border-left: 1px solid #ccc
        display: block
        padding: 0 0 0 25px
</style>
