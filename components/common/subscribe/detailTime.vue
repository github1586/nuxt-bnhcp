<template>
  <div>
    <div class="devide_rect_first">
      <div class="yu_tit"><span class="mar_span">预约课程</span><span class="class_b">{{this.courseDetail.name}}</span></div>
    </div>
    <div class="appoint_time">
      <p>预约时间</p>
      <ul>
        <li>	
          <a href="#" class="fir_a">
            <!-- <input type="date" name="" id="" class="opa_none"/> -->
            <span class="date_year">2015-12-19</span>
            <span class="week">星期二</span>
            <div class="arrow_down"></div>
          </a>
        </li>
        <li>	
          <a href="#" class="sec_a">
            <!-- <input type="time" name="" id="" class="opa_no"/> -->
            <span class="t_ss">11:00</span>
            <div class="arrow_down"></div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState([
      'courseDetail'
    ])
  }
}
</script>
<style lang="sass" scoped>
@import '~static/common/style.sass'
.devide_rect_first
  padding-left: 15px
  text-align: center
  background-color: #f18613
  color: #fff
  .yu_tit
    height: 45px
    line-height: 45px
    font-size: 1.5rem
  .mar_span
    font-size: 1.3rem
    float: left
  .class_b
    padding-right: 70px
.appoint_time
  padding: 15px 0 0 15px
  margin-top: 20px
  border-top: 1px solid #dcdcdc
  border-bottom: 1px solid #dcdcdc
  background-color: #fff
  p
    color: $theme_gray999
    font-size: 15px
  ul
    padding-top: 15px
    li
      height: 45px
      line-height: 45px
      // padding-right: 15px
      border-top: 1px solid #eeeeee
      position: relative
      a
        opacity: 1
        .week
          padding-left: 30px
        .arrow_down
          width: 50px
          height: 100%
          float: right
          margin-right: 15px
          // z-index:
          // margin-top: -5px
          display: inline-block
          background: url("/img/arrow_down.png") no-repeat right 18px
          background-size: 12px 8px
        span
          color: #484848
        input
          width: 90%
          height: 44px
          line-height: 25px
          background-color: #fff
          border: none
          color: #484848
          position: absolute
          left: 0
          top: 0
          opacity: 0
.reser_number
  margin-top: 12px
  border-top: 1px solid #dcdcdc
  background-color: #fff
  &.tel_reser
    height: 45px
    line-height: 45px
    text-align: center
    color: $theme_gray999
    border-bottom: 1px solid #dcdcdc
  ul
    li
      height: 45px
      line-height: 45px
      color: $theme_gray999
      padding: 0 15px
      border-bottom: 1px solid #dcdcdc
      position: relative
      input
        height: 44px
        color: #484848
        padding-left: 20px
        font-size: 1.5rem
        line-height: 20px
        &.code_inp
          padding-left: 35px
      span
        width: 100px
        height: 31px
        line-height: 31px
        background-color: #e0a607
        color: #fff
        font-size: 1.5rem
        display: block
        position: absolute
        right: 15px
        bottom: 7px
        text-align: center
        border-radius: 5px
.confirm_appoint
  margin-top: 25px
  padding: 0 15px
  input
    width: 100%
    height: 46px
    line-height: 46px
    color: #fff
    background-color: $theme_color
    border-radius: 5px
    text-align: center
    display: block
    margin: 0 auto
    font-size: 1.5rem
.yu_tit.no_login
  overflow: hidden
  // 验证码按钮
  .get_code
    height: 26px
    line-height: 26px
    display: inline-block
    color: #474747
    background: #f2f2f2
    botder-radius: 1px
    padding: 0 1px 0 1px
  .pho_num
    border: 1px solid #d3d3d3
    background: #fff
</style>
