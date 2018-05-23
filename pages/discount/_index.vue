<template>
  <div>
    <top-hrader :name="this.name" :back="this.back" :className="this.className" :backgroundColor="this.backgroundColor"></top-hrader>
    <div class="discount">
        <div class="dis_ul">
            <ul>
                <li>
                    <div class="left_con">
                        <p><i>&yen;</i>9999</p>
                        <span>满10000元可用</span>
                    </div>
                    <div class="right_con">
                        <h3>仅限报名【北京贾静传媒艺术培训】的课程</h3>
                        <p><span>2015.12.24</span>-<span>2017.12.24</span></p>
                    </div>
                    <div class="right_top_con">
                        <div class="top_time">
                            <p>剩<span>10</span>天</p>
                        </div>
                    </div>
                </li>
                 <li>
                    <div class="left_con">
                        <p><i>&yen;</i>9999</p>
                        <span>满10000元可用</span>
                    </div>
                    <div class="right_con">
                        <h3>仅限报名【北京贾静传媒艺术培训】的课程</h3>
                        <p><span>2015.12.24</span>-<span>2017.12.24</span></p>
                    </div>
                    <div class="right_top_con">
                        <div class="top_time">
                            <p>剩<span>10</span>天</p>
                        </div>
                    </div>
                </li>
                 <li>
                    <div class="left_con">
                        <p><i>&yen;</i>9999</p>
                        <span>满10000元可用</span>
                    </div>
                    <div class="right_con">
                        <h3>仅限报名【北京贾静传媒艺术培训】的课程</h3>
                        <p><span>2015.12.24</span>-<span>2017.12.24</span></p>
                    </div>
                    <div class="right_top_con">
                        <div class="top_time">
                            <p>剩<span>10</span>天</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="left_con">
                        <p><i>&yen;</i>9999</p>
                        <span>满10000元可用</span>
                    </div>
                    <div class="right_con">
                        <h3>仅限报名【北京贾静传媒艺术培训】的课程</h3>
                        <p><span>2015.12.24</span>-<span>2017.12.24</span></p>
                    </div>
                    <div class="right_top_con">
                        <div class="top_time">
                            <p>剩<span>10</span>天</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="left_con">
                        <p><i>&yen;</i>9999</p>
                        <span>满10000元可用</span>
                    </div>
                    <div class="right_con">
                        <h3>仅限报名【北京贾静传媒艺术培训】的课程</h3>
                        <p><span>2015.12.24</span>-<span>2017.12.24</span></p>
                    </div>
                    <div class="right_top_con">
                        <div class="top_time">
                            <p>剩<span>10</span>天</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>
import topHrader from '~/components/common/header.vue'
export default {
  data () {
    return {
      name: '优惠券',
      className: 1,
      backgroundColor: 1,
      back: 0
    }
  },
  components: {
    topHrader
  }
}
</script>
<style lang="sass">
@import '~static/common/style.sass'
header
  padding-top: 6px
  background: #fff
  border-bottom: 1px solid #bbb
  margin-bottom: 30px
  .header_back
    background: url(/img/icon_back_red.png) no-repeat
    background-size: 10px 19px
  .sel_txt
      color: $theme_gray666
.discount
  margin-top: 52px
  .dis_h3
    padding-right: 2rem
    background: #fff
    h3
      padding: 0 1rem
      height: 4.5rem
      line-height: 4.5rem
      margin-top: 1.5rem
      font-size: 1.5rem
      font-weight: normal
      background:  url('/img/kid_radio.png')no-repeat right center
      background-size: 19px 19px        
      &.on
        background: url('/img/kid_radio_on.png')no-repeat right center
        background-size: 19px 19px
  .dis_ul
    padding: 0 1rem
    ul
      margin-top: 1.5rem
      li
        margin-top: 1rem
        height: 8.5rem
        position: relative
        overflow: hidden
        .left_con
          float: left
          width: 9.2rem
          height: 100%
          background: url('/img/discount_left_bg.png')no-repeat 0 0
          p
            font-size: 2.5rem
            margin-left: 0.3rem
            color: #fff
            text-align: center
            margin-top: 1.5rem
          span
            display: inline-block
            width: 100%
            text-align: center
            margin-left: 0.3rem
            color: #fff
            margin-top: 0.5rem
        .right_con
            // float: right
            margin-left: 9.2rem
            height: 100%
            border: 1px solid $theme_grayddd
            background: url('/img/discount_right_bg.png') 0 0
            background-size: 100% 100% 
            border-top: 1px solid transparent
            h3
              margin-top: 1rem
              width: 15.3rem
              line-height: 1.5rem
              margin-left: 1rem
              font-size: 1rem
              font-weight: normal
              &::before
                content: '学费券'
                width: 3.5rem
                height: 1.3rem
                text-align: center
                line-height: 1.6rem
                display: inline-block
                color: #fff
                background: $theme_color
                font-size: 1rem
                border-radius: 0.2rem
                margin-right: 0.3rem
                position: relative
            p
              span
                display: inline-block
                margin-top: 2rem 
              :first-child
                margin-left: 1rem
        .right_top_con
          .top_time
            position: absolute
            top: 1rem
            right: -2rem
            width: 8rem
            height: 1.5rem
            background: $theme_fu_red
            color: #fff
            font-size: 1.1rem
            text-align: center
            -webkit-transform: rotate(40deg)                       
            -o-transform: rotate(40deg)                       
            -ms-webkit-transform: rotate(40deg)                       
            transform: rotate(40deg)     
            p
              position: absolute
              bottom: 0
              left: 50%
              -webkit-transform: translate(-50%)    
              -o-transform: translate(-50%)    
              -ms-transform: translate(-50%)   
              transform: translate(-50%) 
        .right_choose
          width: 2rem
          height: 2rem
          background:  url('/img/kid_radio.png')no-repeat right center
          background-size: 19px 19px   
          position: absolute
          bottom: 50%
          right: 2rem
          -webkit-transform: translateY(50%)
          -o-transform: translateY(50%)
          -ms-transform: translateY(50%)
          transform: translateY(50%)
          &.on
            background: url('/img/kid_radio_on.png')no-repeat right center
            background-size: 19px 19px
</style>
