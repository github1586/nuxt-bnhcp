<template>
  <div class="container_login">
    <h3 class="login"></h3>
    <div class="login_form">
      <p class="phone"><input type="text" v-model="phone" placeholder="输入手机号"><span @click="clear()">×</span></p>
      <p class="phone verification">
        <input type="password" v-model="password" placeholder="首次登录为注册">
      </p>
      <p class="login_btn"><input type="button" @click="longin()" value="登录"></p>
      <p class="user_trans">未注册用户登录将自动创建报哪好账号，<b>即视为您已同意</b><a href="">《报哪好用户服务协议》</a></p>
    </div>
    <layer-msg :msg="this.layerMSg" v-show="isLayer"></layer-msg>
  </div>
</template>
<script>
import { setStore } from '../config/common'
import { userLongin } from '../ajax/getData'
import layerMsg from '~/components/layer/layerMsg.vue'
export default {
  data () {
    return {
      phone: '',
      password: '',
      layerMSg: '手机号格式不对',
      isLayer: false
    }
  },
  head: {
    bodyAttrs: {
      class: 'login-page'
    }
  },
  methods: {
    async longin () {
      if (/^1[345789]\d{9}$/.test(this.phone)) {
        if (!this.password) {
          this.layerMSg = '密码不能为空' // 更换提示语
          this.isLayer = true // 提示
          return
        }
        let data = await userLongin(this.phone, this.password)
        if (data.status) {
          alert(234)
          setStore('user', this.phone) // 存储用户手机号
          this.$router.push({ path: '/' }) // 跳转
        } else {
          this.layerMSg = data.msg // 更换提示语
          this.isLayer = true // 提示
          setTimeout(() => { // 两秒恢复为true
            this.isLayer = false
          }, 2000)
        }
      } else {
        this.isLayer = true
        setTimeout(() => { // 两秒恢复为true
          this.isLayer = false
        }, 2000)
      }
    },
    clear () {
      this.phone = ''
    }
  },
  components: {
    layerMsg
  }
}
</script>
<style lang="sass">
@import '~static/common/style.sass'
.container_login
  padding-top: 3rem
  width: 100%
  height: 100%
  background-size: 100%
  .login
    width: 100%
    height: 10.7rem
    background: url('/img/logo_login.png')no-repeat center center
    background-size: 5.8rem 10.7rem
  .login_form
    padding: 0 1.3rem
    margin-top: 2rem
    input
      width: 100%
      height: 4.5rem
      border-radius: 5rem
    .phone.verification
      position: relative
      input
        background: rgba(62, 35, 74, .1) url('/img/icon_login_valid.png')no-repeat 1.7rem center
        background-size: 1.7rem 2.1rem
      .clickImg
        width: 100px
        height: 100%
        position: absolute
        top: 0.3rem
        right: 1rem
      b
        width: 68px
        display: block
        margin: 0 auto
        height: 23px
        background: #999
        margin-right: 1.5rem
      i
        width: 100%
        color: #fff
        display: inline-block
        font-size: 1rem
        text-align: center
        margin-top: 0.3rem
    .phone
      margin-bottom: 1rem
      position: relative
      input
        background: rgba(62, 35, 74, .3) url('/img/icon_login_phone.png')no-repeat 1.9rem center
        background-size: 1.3rem 2.3rem
        padding-left: 4.5rem
        color: #fff
        &::-webkit-input-placeholder  
          color: #fff 
        &::-ms-input-placeholder  
          color: #fff 
        &::-o-input-placeholder  
          color: #fff 
        &::input-placeholder  
          color: #fff 
      span
        position: absolute
        top: 50%
        right: 1.5rem
        width: 1.4rem
        height: 1.4rem
        background: #fff
        color: #7e6382
        line-height: 1.5rem
        text-align: center
        border-radius: 50%
        -webkit-transform: translateY(-50%)
        -ms-transform: translateY(-50%)
        -o-transform: translateY(-50%)
        transform: translateY(-50%)
      position: relative
      input
        background: rgba(62, 35, 74, .3) url('/img/icon_login_num.png')no-repeat 1.9rem center
        background-size: 1.8rem 2.3rem
        padding-left: 4.5rem
        color: #fff
        &::-webkit-input-placeholder  /* WebKit browsers */ 
          color: #fff 
        &::-ms-input-placeholder  /* WebKit browsers */ 
          color: #fff 
        &::-o-input-placeholder  /* WebKit browsers */ 
          color: #fff 
        &::input-placeholder  /* WebKit browsers */ 
          color: #fff 
        span
          position: absolute
          top: 50%
          right: 1.5rem
          width: 10rem
          text-align: center
          display: inline-block
          padding-left: 1.5rem
          border-left: 1px solid #fff
          height: 3rem
          color: #fff
          line-height: 3rem
          font-size: 1.5rem
          -webkit-transform: translateY(-50%)
          -ms-transform: translateY(-50%)
          -o-transform: translateY(-50%)
          transform: translateY(-50%)
    .login_btn
      margin-top: 1.7rem
      input
        background: #9a4a62
        &.on
          background: $theme_color
        color: #fff
        font-size: 1.8rem
    .logup
      height: 3rem
      a
        line-height: 3rem
        color: #afaaaf
      float: right
      margin-right: 1.6rem
      font-size: 1.4rem
    .user_trans
      margin-top: 1.5rem
      color: #ccc
      line-height: 1.5rem
      b
        font-weight: normal
        color: #ccc
      a
        color: $theme_fu_org
        -webkit-tap-highlight-color: transparent
.login-page
  width: 100% 
  height: 100%
  padding: 0
  background: url('/img/login_bg.jpg')no-repeat 0 0
  background-size: 100% 100%
  background-attachment: fixed
</style>
