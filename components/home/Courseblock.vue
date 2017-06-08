<template>
  <div>
    <Moreclass :parentHeadinfo="value" :key=index v-for="(value, index) in allparentinfo"></Moreclass>
  </div>
</template>
<script>
import Moreclass from '~components/common/Moreclass.vue'
export default {
  data () {
    return {
      allparentinfo: [
        {
          headinfo: {
            before: '更多课程',
            after: '中小学',
            imgurl: 'img/icon_middle.png'
          },
          course: {
            classList: [
              {imgurl: 'img/cls_mid1.jpg', classname: '课程名称'},
              {imgurl: 'img/cls_mid2.jpg', classname: '课程名称'}
            ],
            classMoreList: [
              {imgurl: 'img/cls_icon_chaness.png', classname: '高中语文'},
              {imgurl: 'img/cls_icon_english.png', classname: '初中英语'},
              {imgurl: 'img/cls_icon_wuli.png', classname: '初中数学'},
              {imgurl: 'img/cls_icon_math.png', classname: '高中物理'}
            ]
          }
        },
        {
          headinfo: {
            before: '更多课程',
            after: '中小学',
            imgurl: 'img/icon_middle.png'
          },
          course: {
            classList: [
              {imgurl: 'img/cls_mid1.jpg', classname: '课程名称'},
              {imgurl: 'img/cls_mid2.jpg', classname: '课程名称'}
            ],
            classMoreList: [
              {imgurl: 'img/cls_icon_chaness.png', classname: '高中语文'},
              {imgurl: 'img/cls_icon_english.png', classname: '初中英语'},
              {imgurl: 'img/cls_icon_wuli.png', classname: '初中数学'},
              {imgurl: 'img/cls_icon_math.png', classname: '高中物理'}
            ]
          }
        },
        {
          headinfo: {
            before: '更多课程',
            after: '中小学',
            imgurl: 'img/icon_middle.png'
          },
          course: {
            classList: [
              {imgurl: 'img/cls_mid1.jpg', classname: '课程名称'},
              {imgurl: 'img/cls_mid2.jpg', classname: '课程名称'}
            ],
            classMoreList: [
              {imgurl: 'img/cls_icon_chaness.png', classname: '高中语文'},
              {imgurl: 'img/cls_icon_english.png', classname: '初中英语'},
              {imgurl: 'img/cls_icon_wuli.png', classname: '初中数学'},
              {imgurl: 'img/cls_icon_math.png', classname: '高中物理'}
            ]
          }
        },
        {
          headinfo: {
            before: '更多课程',
            after: '中小学',
            imgurl: 'img/icon_middle.png'
          },
          course: {
            classList: [
              {imgurl: 'img/cls_mid1.jpg', classname: '课程名称'},
              {imgurl: 'img/cls_mid2.jpg', classname: '课程名称'}
            ],
            classMoreList: [
              {imgurl: 'img/cls_icon_chaness.png', classname: '高中语文'},
              {imgurl: 'img/cls_icon_english.png', classname: '初中英语'},
              {imgurl: 'img/cls_icon_wuli.png', classname: '初中数学'},
              {imgurl: 'img/cls_icon_math.png', classname: '高中物理'}
            ]
          }
        }
      ]
    }
  },
  components: {
    Moreclass
  }
}
</script>
