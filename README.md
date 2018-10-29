# nuxt-bnhcp <img src="https://img.shields.io/badge/bnhcp-v1.0.0-green.svg"/> 

> Node.js(v6.9.1) + express(4.X) + vue(2.0) + vuex + mysql(5.7.18) + （NUXT）SSR + nginx + redis + 阿里云部署
## preface [![](https://badge.juejin.im/entry/599a8ecd518825243a78bd3b/likes.svg?style=flat-square)](https://juejin.im/entry/599a8ecd518825243a78bd3b/detail) 

online：<a href="hhttp://nodet.cn/" target="_blank" style="color: red;">http://nodet.cn/</a>

## thank you～  <img src="https://img.shields.io/badge/build-v1.0.0-blue.svg"/>

如果我的项目对您有所帮助，您可以点右上角 "Star" 支持一下 感谢～～！

## project <img src="https://img.shields.io/badge/build-v1.0.0-blue.svg"/>
```
.

├── README.md
├── ajax
│   └── getData.js
├── assets
│   └── README.md
├── components
│   ├── AppLogo.vue
│   ├── README.md
│   ├── carousel
│   │   ├── Carousel.vue
│   │   ├── cov-touch.js
│   │   └── vue-slide.vue
│   ├── common
│   │   ├── Headerchunk.vue
│   │   ├── Moreclass.vue
│   │   ├── computedTime.vue
│   │   ├── courseDetail
│   │   │   ├── courseInfo.vue
│   │   │   ├── description.vue
│   │   │   ├── detailContent.vue
│   │   │   ├── evaluate.vue
│   │   │   └── header.vue
│   │   ├── courseHeader.vue
│   │   ├── courselist.vue
│   │   ├── footerBtn.vue
│   │   ├── header.vue
│   │   ├── loading.vue
│   │   ├── no_content
│   │   │   └── no_content.vue
│   │   ├── pullDown.vue
│   │   ├── subscribe
│   │   │   ├── detailTime.vue
│   │   │   ├── valiPhone.vue
│   │   │   └── yesbtn.vue
│   │   └── success.vue
│   ├── config
│   │   └── configinfo.js
│   ├── home
│   │   ├── Classification.vue
│   │   ├── Courseblock.vue
│   │   ├── Footertabs.vue
│   │   ├── Grabactivity.vue
│   │   ├── Myheader.vue
│   │   └── RecommendedSchools.vue
│   ├── layer
│   │   └── layerMsg.vue
│   └── mixin
│       └── mixin.js
├── config
│   ├── async
│   │   ├── env.js
│   │   └── fetch.js
│   └── common.js
├── layouts
│   ├── README.md
│   └── default.vue
├── middleware
│   └── README.md
├── nuxt
│   ├── App.js
│   ├── client.js
│   ├── components
│   │   ├── no-ssr.js
│   │   ├── nuxt-child.js
│   │   ├── nuxt-error.vue
│   │   ├── nuxt-link.js
│   │   ├── nuxt-loading.vue
│   │   └── nuxt.js
│   ├── dist
│   │   ├── 01c6ecd76274336b610c.js
│   │   ├── 066f8893c99ed96e829b.js
│   │   ├── 30e89264b49bc224a7bd.js
│   │   ├── 3361ffbfddc25d93b5b8.js
│   │   ├── 4baf47c61efc08d4cbdf.js
│   │   ├── 577c7152a496528e9b98.js
│   │   ├── 5df321ea5b7a48db46ef.js
│   │   ├── 5e076e89204c382a8d85.js
│   │   ├── 68be7f95fa20c1f3601d.js
│   │   ├── 6d6f7e3ce100305546b2.js
│   │   ├── 6f70b0413844b5334687.js
│   │   ├── 77efe89fa34819ba021c.js
│   │   ├── LICENSES
│   │   ├── a07f22d65683b27556c9.js
│   │   ├── b272896ebc0529f1e83c.js
│   │   ├── c90f81fb39c9c4d202c9.js
│   │   ├── cf1513594f2bb80e8d42.js
│   │   ├── d7d2111b61f788fbe058.js
│   │   ├── de3840e12e249c86d539.js
│   │   ├── f4c3f36956a13b771bf1.js
│   │   ├── index.spa.html
│   │   ├── index.ssr.html
│   │   ├── server-bundle.json
│   │   └── vue-ssr-client-manifest.json
│   ├── empty.js
│   ├── index.js
│   ├── loading.html
│   ├── middleware.js
│   ├── router.js
│   ├── server.js
│   ├── store.js
│   ├── utils.js
│   └── views
│       ├── app.template.html
│       └── error.html
├── nuxt.config.js
├── package.json
├── pages
│   ├── chat
│   │   └── _index.vue
│   ├── classify.vue
│   ├── conf
│   │   └── _index.vue
│   ├── courseDetail
│   │   └── _index.vue
│   ├── coursehome.vue
│   ├── discount
│   │   └── _index.vue
│   ├── index.vue
│   ├── login.vue
│   ├── myWallet
│   │   └── _index.vue
│   ├── oneself.vue
│   ├── order
│   │   └── payOrder.vue
│   ├── orderList
│   │   └── _index.vue
│   ├── paySuccess
│   │   └── _index.vue
│   ├── search
│   │   └── searchPage.vue
│   ├── shoppingCart.vue
│   ├── submitOrder
│   │   └── _index.vue
│   └── subscribe
│       └── _index.vue
├── plugins
│   ├── README.md
│   └── axios.js
├── server
│   ├── api
│   │   ├── controller
│   │   │   ├── cart
│   │   │   │   └── index.js
│   │   │   ├── course
│   │   │   │   └── index.js
│   │   │   ├── home
│   │   │   │   └── index.js
│   │   │   ├── interface.js
│   │   │   ├── login
│   │   │   │   └── index.js
│   │   │   ├── order
│   │   │   │   └── index.js
│   │   │   ├── paramsFilter.js
│   │   │   └── router.js
│   │   ├── index.js
│   │   ├── model
│   │   │   ├── db.js
│   │   │   ├── settings.js
│   │   │   └── sql.js
│   │   └── redis
│   │       └── redis.js
│   └── index.js
├── static
│   ├── README.md
│   ├── common
│   │   ├── common.css
│   │   └── style.sass
│   ├── favicon.ico
│   └── img
├── store
│   ├── README.md
│   ├── index.js
│   ├── mutation-types.js
│   └── mutations.js
├── yarn-error.log
└── yarn.lock`

```

## complete <img src="https://img.shields.io/badge/complete-v1.0.0-origin.svg"/>

1. 首页渲染
2. 课程的分类搜索
3. 课程 按 （智能排序 价格最高 价格最低 老师好评 人气最高） 排序
4. 课程 按 （班级类型 活动优惠 上课时间（周一到周日） 具体时间（上午下午晚上） 价格区间） 筛选
5. 完成课程列表的下拉加载更多 
6. 课程详情
7. 预约试听 
8. 分类页面
9. 我的页面
10. 提交订单
11. 登录、注册
12. 设置页面
13. 优惠券页面
14. 钱包页面
15. 购物车 （添加购物车 删除购物车 结算购物车 购物车批量提交订单）
16. 我的订单 （全部订单 待付款 交易成功）
17. redis (首页缓存 分页缓存）
18. 阿里云部署
## project screenshots  <img src="https://img.shields.io/badge/build-v1.0.0-blue.svg"/>

<img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/1.jpeg" width="280"/><img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/2.jpeg" width="280"/><img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/3.jpeg" width="280"/>

<img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/4.jpeg" width="280"/><img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/5.jpeg" width="280"/><img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/6.jpeg" width="280"/>

<img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/8.jpeg" width="280"/><img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/7.jpeg" width="280"/><img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/9.jpeg" width="280"/>

Email: 8889999i@gmail.com vx: node-s

## build Setup  <img src="https://img.shields.io/badge/build-v1.0.0-blue.svg"/>

``` bash
# install dependencies
$ yarn install

# serve with hot reload at 127.0.0.1:3000 (Must be)
$ yarn dev 
