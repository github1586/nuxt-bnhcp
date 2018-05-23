<template>
  <div class="box">
    <header-top></header-top>
    <descrip-tion></descrip-tion>
    <detail-content></detail-content>
    <course-info></course-info>
    <evaluate></evaluate>
    <footer-btn></footer-btn>
  </div>
</template>
<script>
import headerTop from '~/components/common/courseDetail/header.vue'
import descripTion from '~/components/common/courseDetail/description.vue'
import detailContent from '~/components/common/courseDetail/detailContent.vue'
import courseInfo from '~/components/common/courseDetail/courseInfo.vue'
import evaluate from '~/components/common/courseDetail/evaluate.vue'
import footerBtn from '~/components/common/footerBtn.vue'
import { mapState, mapMutations } from 'vuex'
import axios from '~/plugins/axios'
export default {
  // ajax module as axios
  fetch ({store, query}) {
    return axios.get(`/api/courseDetail/index/${query.id}`)
      .then(function (data) {
        store.commit('COURSE_DETAIL', data.data)
      })
  },
  computed: {
    ...mapState([
      'courseDetail'
    ])
  },
  methods: {
    ...mapMutations([
      'COURSE_DETAIL'
    ])
  },
  components: {
    headerTop,
    descripTion,
    detailContent,
    courseInfo,
    evaluate,
    footerBtn
  }
}
</script>
<style lang="sass" scoped>
.box
  padding-bottom: 50px
</style>
