<template>
  <div class="box">
    <header-top></header-top>
    <descrip-tion></descrip-tion>
    <detail-content></detail-content>
    <course-info></course-info>
    <evaluate></evaluate>    
     <!-- 固定底部填充 -->
    <div class="fix_bottom_pad_top"></div>
    <!-- 功能按钮 -->
    <div class="menu_fix_bottom">
        <div class="ctrl_btn">
            <a href="" class="bao">立即报名</a>
            <a href="" class="yue">预约试听</a>
        </div>
    </div>
  </div>
</template>
<script>
import headerTop from '~components/common/courseDetail/header.vue'
import descripTion from '~components/common/courseDetail/description.vue'
import detailContent from '~components/common/courseDetail/detailContent.vue'
import courseInfo from '~components/common/courseDetail/courseInfo.vue'
import evaluate from '~components/common/courseDetail/evaluate.vue'
export default {
  components: {
    headerTop,
    descripTion,
    detailContent,
    courseInfo,
    evaluate
  }
}
</script>
<style lang="sass" scoped>

</style>
