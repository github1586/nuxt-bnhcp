<template>
  <div>
    <Moreclass :parentHeadinfo="value" :key=index v-for="(value, index) in allparentinfo"></Moreclass>
  </div>
</template>
<script>
import Moreclass from '~components/common/Moreclass.vue'
export default {
  props: ['allparentinfo'],
  components: {
    Moreclass
  }
}
</script>
