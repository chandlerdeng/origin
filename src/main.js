import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

var myApp = Vue.extend({
  el () { return 'body' },
  data () {
    return { transition: 'slide-left' }
  }
})
var myRouter = new VueRouter()

myRouter.map({'/': {
  name: 'home',
  component: App
}})

myRouter.map({'/Page1': {
  name: 'page1',
  component: function (resolve) {
    resolve(require('components/Page1.vue'))
  }
}})

myRouter.beforeEach(function (trans) {
  // 拦截地址, 如果是返回, 则改变动画方向
  if (trans.to.query.back && Boolean(trans.to.query.back) === true) {
    myRouter.app.transition = 'slide-right'
  } else {
    myRouter.app.transition = 'slide-left'
  }
  trans.next()
})

myRouter.start(myApp, 'body')
