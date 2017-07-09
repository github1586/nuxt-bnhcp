<template>
  <div class="tit_box">
    <b @click="moreCourse(headinfo.after)"><nuxt-link to="/coursehome" class="more">{{headinfo.before}}<img width="10" src="img/icon_more.jpg" class="icon_more"></nuxt-link></b>
    <h1 class="tit_contain no_con_tp"><img :src=headinfo.imgurl width="15" class="icon_time" alt=""><span>{{headinfo.after}}</span></h1>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  props: ['headinfo'],
  computed: {
    ...mapState([
      'courseId', 'coursename', 'courseSort'
    ])
  },
  methods: {
    ...mapMutations([
      'COURSE_ID', 'COURSE_PARAMS', 'COURSE_SORT', 'COURSE_TYPE'
    ]),
    commitParams (value) {
      this.COURSE_ID(value)
      this.COURSE_PARAMS('分类')
      this.COURSE_SORT('7')
      this.COURSE_TYPE('1')
    },
    moreCourse (value) {
      switch (value) {
        case '中小学':
          this.commitParams('15963591')
          break
        case '艺术/体育':
          this.commitParams('15963587')
          break
        case '语言/留学':
          this.commitParams('15963589')
          break
        case '扩展训练':
          this.commitParams('15963600')
          break
        default:
          this.commitParams('15963588')
          break
      }
    }
  }
}
</script>
<style lang="sass">
  .tit_box
    margin-top: 1rem
    overflow: hidden
    padding: 12px 0 12px 0
    line-height: 20px
    .icon_time
      margin-top: -0.1rem
    .more
      color: #999
      float: right
      .icon_more 
        margin-left: 3.5px
        vertical-align: middle	
      .icon_more
        margin-top: -2px
    .tit_contain
      font-size: 1rem
      font-weight: bold
      line-height: 2rem
      color: #484848
      padding: 0 0 0 4px
      span
        margin-left: 0.5rem
</style>
