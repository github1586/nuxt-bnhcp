# bnhcp <img src="https://img.shields.io/badge/bnhcp-v1.0.0-green.svg"/>

> Node.js(v6.9.1) + express(4.X) + vue(2.0) + vuex + mysql(5.7.18) + （NUXT）SSR
## 前言 <img src="https://img.shields.io/badge/preface-v1.0.0-yellowgreen.svg"/>

*本项目纯属个人练习项目，数据并非真实，如有雷同，纯属巧合。

本项目是公司项目，公司的技术实现是 cakephp php的mvc框架，由于cakephp view 模板ctp 和 html写在同一
文件，前端部分（view）页面惨不忍睹，难维护，效率低，沟通成本大，迫于无奈，奔着君子动手不动口的原则（所有的技术不是口头上的，需要自己动手，踩坑，你才可以成长），闲暇之余 利用 vue + srr + node + mysql 重构本项目，这样既加强了对vue的学习认知，也很好的把vue和node结合，对于数据库的选型，之前一直纠结于 mongodb和mysql，mongodb是一个面向文档的数据库，将数据存储为一个文档，而且mongodb不支持事务操作，mysql呢？比较稳定，更通用， 有多种列类型，支持多线程，充分利用CPU资源，为多种编程语言提供了API，老牌值得依赖，其实写着玩玩，用什么倒是无所谓，要是企业级的量级上来了，选什么就是问题了～～由于时间并不充裕，功能实现可能的并不完美，我可是尽力按需求文档实现～～～现在的页面大概有20个左右，涉及注册、登录、课程列表、课程详情、购物车、提交订单、个人中心等等，最终完成应该会有60个页面左右～需要时间啊...

NUXT 能为我们做什么

问题1：就是我们无需为了路由划分而烦恼，你只需要按照对应的文件夹层级创建 .vue 文件就行
问题2：无需考虑数据传输问题，nuxt 会在模板输出之前异步请求数据（需要引入 axios 库），而且对 vuex 有进一步的封装
问题3：内置了 webpack，省去了配置 webpack 的步骤，nuxt 会根据配置打包对应的文件

还有很多便捷之处，可以尝试去写一写，读读源码
项目截图 <img src="https://img.shields.io/badge/build-v1.0.0-0f0f0f.svg"/>
<img src="http://47.94.100.129:3001/img/show1.gif"/>
<img src="http://47.94.100.129:3001/img/show2.gif"/>
<img src="http://47.94.100.129:3001/img/show3.gif"/>
<img src="http://47.94.100.129:3001/img/show4.gif"/>

## 完成功能 <img src="https://img.shields.io/badge/complete-v1.0.0-origin.svg"/>

1. 首页渲染
2. 课程的分类搜索
3. 课程 按 （智能排序 价格最高 价格最低 老师好评 人气最高） 排序
4. 课程 按 （班级类型 活动优惠 上课时间 具体时间 价格区间） 筛选
5. 完成课程列表的下拉加载更多 
6. 课程详情
7. 预约试听 

## 预计功能 <img src="https://img.shields.io/badge/estimate-v1.0.0-ff69b4.svg"/>
1. 购物车
2. 头像上传
3. 家长添加孩子
4. 登录注册
5. 报名
6. 优惠券
7. 我的订单
8. 机器人客服
9. 阿里云部署
## Build Setup <img src="https://img.shields.io/badge/build-v1.0.0-blue.svg"/>

``` bash
# install dependencies
$ npm install 

# serve with hot reload at localhost:8080
$ npm run dev



