<template>
  <div class="no_content">
    <i class="icon" :class="content.class"></i>
    <p class="margin_left_p">{{content.name}}</p>
  </div>
</template>
<script>
  export default {
    props: ['content']
  }
</script>
