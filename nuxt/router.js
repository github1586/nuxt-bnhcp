import Vue from 'vue'
import Router from 'vue-router'

const _4d2680fa = () => import('../pages/classify.vue' /* webpackChunkName: "pages/classify" */).then(m => m.default || m)
const _268c7bc4 = () => import('../pages/shoppingCart.vue' /* webpackChunkName: "pages/shoppingCart" */).then(m => m.default || m)
const _46338b70 = () => import('../pages/coursehome.vue' /* webpackChunkName: "pages/coursehome" */).then(m => m.default || m)
const _152fdaac = () => import('../pages/oneself.vue' /* webpackChunkName: "pages/oneself" */).then(m => m.default || m)
const _53deec63 = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _bc4b00c6 = () => import('../pages/order/payOrder.vue' /* webpackChunkName: "pages/order/payOrder" */).then(m => m.default || m)
const _0fe05ad0 = () => import('../pages/search/searchPage.vue' /* webpackChunkName: "pages/search/searchPage" */).then(m => m.default || m)
const _1c0c56e2 = () => import('../pages/submitOrder/_index.vue' /* webpackChunkName: "pages/submitOrder/_index" */).then(m => m.default || m)
const _38ced6ae = () => import('../pages/subscribe/_index.vue' /* webpackChunkName: "pages/subscribe/_index" */).then(m => m.default || m)
const _06cacadb = () => import('../pages/discount/_index.vue' /* webpackChunkName: "pages/discount/_index" */).then(m => m.default || m)
const _7c3851ac = () => import('../pages/orderList/_index.vue' /* webpackChunkName: "pages/orderList/_index" */).then(m => m.default || m)
const _02391521 = () => import('../pages/paySuccess/_index.vue' /* webpackChunkName: "pages/paySuccess/_index" */).then(m => m.default || m)
const _a7cbd3d0 = () => import('../pages/conf/_index.vue' /* webpackChunkName: "pages/conf/_index" */).then(m => m.default || m)
const _63cd6d38 = () => import('../pages/chat/_index.vue' /* webpackChunkName: "pages/chat/_index" */).then(m => m.default || m)
const _d70a5420 = () => import('../pages/courseDetail/_index.vue' /* webpackChunkName: "pages/courseDetail/_index" */).then(m => m.default || m)
const _d7966e52 = () => import('../pages/myWallet/_index.vue' /* webpackChunkName: "pages/myWallet/_index" */).then(m => m.default || m)
const _eb916d68 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/classify",
			component: _4d2680fa,
			name: "classify"
		},
		{
			path: "/shoppingCart",
			component: _268c7bc4,
			name: "shoppingCart"
		},
		{
			path: "/coursehome",
			component: _46338b70,
			name: "coursehome"
		},
		{
			path: "/oneself",
			component: _152fdaac,
			name: "oneself"
		},
		{
			path: "/login",
			component: _53deec63,
			name: "login"
		},
		{
			path: "/order/payOrder",
			component: _bc4b00c6,
			name: "order-payOrder"
		},
		{
			path: "/search/searchPage",
			component: _0fe05ad0,
			name: "search-searchPage"
		},
		{
			path: "/submitOrder/:index",
			component: _1c0c56e2,
			name: "submitOrder"
		},
		{
			path: "/subscribe/:index",
			component: _38ced6ae,
			name: "subscribe"
		},
		{
			path: "/discount/:index",
			component: _06cacadb,
			name: "discount"
		},
		{
			path: "/orderList/:index",
			component: _7c3851ac,
			name: "orderList"
		},
		{
			path: "/paySuccess/:index",
			component: _02391521,
			name: "paySuccess"
		},
		{
			path: "/conf/:index",
			component: _a7cbd3d0,
			name: "conf"
		},
		{
			path: "/chat/:index",
			component: _63cd6d38,
			name: "chat"
		},
		{
			path: "/courseDetail/:index",
			component: _d70a5420,
			name: "courseDetail"
		},
		{
			path: "/myWallet/:index",
			component: _d7966e52,
			name: "myWallet"
		},
		{
			path: "/",
			component: _eb916d68,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
