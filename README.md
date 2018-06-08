# NUXT-bnhcp <img src="https://img.shields.io/badge/bnhcp-v1.0.0-green.svg"/> 

> Node.js(v6.9.1) + express(4.X) + vue(2.0) + vuex + mysql(5.7.18) + （NUXT）SSR + nginx + redis + 阿里云部署
## preface [![](https://badge.juejin.im/entry/599a8ecd518825243a78bd3b/likes.svg?style=flat-square)](https://juejin.im/entry/599a8ecd518825243a78bd3b/detail) 

online：<a href="hhttp://nodet.cn/" target="_blank" style="color: red;">http://nodet.cn/</a>

## Thank you～ <img src="https://img.shields.io/thank/you-v1.0.0-ff69b4.svg"/>

如果我的项目对您有所帮助，您可以点右上角 "Star" 支持一下 感谢～～！

## project <img src="https://img.shields.io/badge/build-v1.0.0-blue.svg"/>
```
.
├── ajax                 // 请求数据封装
├── assets               // 静态资源
├── components           // 组件
│   ├── carousel         // 轮播
│   ├── common           // 公用组件
│   │   ├── courseDetail // 课程详情
│   │   ├── no_content   // 无数据公用组件
│   │   └── subscribe    // tab
│   ├── config           // 配置项
│   ├── home             // 主页组件
│   ├── layer            // 弹窗组件
│   └── mixin            // 混合
├── config
│   └── async            // ajax封装
├── dist                 // server最终打包上线目录
│   └── api              
│       ├── controller   // 请求处理
│       │   ├── cart
│       │   ├── course
│       │   ├── home
│       │   ├── login
│       │   └── order
│       ├── model         // mysql查询语句
│       └── redis         // redis配置
├── layouts               // 布局
├── middleware            // 中间件
├── pages                 // 页面
│   ├── chat              // 聊天页面
│   ├── conf              // 设置页面
│   ├── courseDetail      // 课程详情页面
│   ├── discount          // 限时优惠页面
│   ├── myWallet          // 我的钱包
│   ├── order             // 订单
│   ├── orderList         // 订单列表
│   ├── paySuccess        // 支付成功
│   ├── search            // 查询页面
│   ├── submitOrder       // 提交页面
│   └── subscribe         // tab
├── plugins               // 插件
├── static                // 静态资源
│   ├── common
│   ├── img
│   │   ├── headImg
│   │   ├── img
│   │   └── teacherHead
│   └── js
└── store`

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
11. 登录（注册暂无）
12. 设置页面
13. 优惠券页面
14. 钱包页面
15. 购物车 （添加购物车 删除购物车 结算购物车 购物车批量提交订单）
16. 我的订单 （全部订单 待付款 交易成功）
17. redis (首页缓存 分页缓存）
18. 阿里云部署
19. 无痕埋点
## Project screenshots <img src="https://img.shields.io/badge/build-v1.0.0-blue.svg"/>

<img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/1.jpeg" width="280"/><img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/2.jpeg" width="280"/><img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/3.jpeg" width="280"/>

<img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/4.jpeg" width="280"/><img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/5.jpeg" width="280"/><img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/6.jpeg" width="280"/>

<img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/8.jpeg" width="280"/><img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/7.jpeg" width="280"/><img src="https://github.com/github1586/nuxt-bnhcp/blob/master/show/9.jpeg" width="280"/>

Email: 8889999i@gmail.com vx: node-s

## Build Setup <img src="https://img.shields.io/badge/build-v1.0.0-blue.svg"/>

``` bash
# install dependencies
$ yarn install

# serve with hot reload at 127.0.0.1:3000 (Must be)
$ yarn dev 
