import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import AppCom from './components'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import routes from './routes'
import store from './vuex'
import {sync} from 'vuex-router-sync'
import infiniteScroll  from 'vue-infinite-scroll'
import VueTouch from 'vue-touch'
import VueLazyload from 'vue-lazyload'
import '!style-loader!css-loader!less-loader!./assets/css/normalize.css' // normalize重置浏览器样式
import '!style-loader!css-loader!less-loader!./assets/font/iconfont.css'   // 引入字体样式
import '!style-loader!css-loader!less-loader!./assets/css/theme/theme.less' // 加载主题样式
import '!style-loader!css-loader!less-loader!./assets/css/common.less' // 引入公共样式
import 'swiper/dist/css/swiper.css'
import './static/flexible'
import './util/common'
import setWechatTitle from './util/vue-wechat-title.js'

Vue.use(VueRouter)
Vue.use(AppCom)
Vue.use(infiniteScroll)
// swiper
Vue.use(VueAwesomeSwiper)
// 图片懒加载
Vue.use(VueLazyload, {
    error: '',
    loading: '',
    try: 3
})

// 手势双击
VueTouch.registerCustomEvent('doubletap', {
    type: 'tap',
    taps: 2
})
Vue.use(VueTouch, {name: 'v-touch'})

const router = new VueRouter ({
	mode: 'history',
	routes: [
		...routes,
	]
})

sync(store,router)

/**
* [路由监控-没有登录的情况下跳转到登录页面] 
* @param  {[type]} (to,from,next [description]
* @return {[type]}               [description]
*/
router.beforeEach((to, from, next) => {
    setWechatTitle(to.meta.title)
    if (to.matched.some(record => record.meta.auth)) {
        if (store.getters.authToken == '' || !store.getters.authToken) {
            if (to.fullPath == '/auth') {
                next()
            }
            else {
                next('auth')
            }
        }
        else {
            if (to.fullPath == '/') {
                next('home')
            }
            else {
                next()
            }
        }
    }
    else {
        if (to.fullPath == '/') {
            next('home')
        }
        else {
            next()
        }
    }
})

new Vue({
	store,
	router,
	el: "#app",
	render: h => h(App)
})
