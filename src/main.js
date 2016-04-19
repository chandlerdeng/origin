import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Util from './assets/js/Util'

let dzzTrans = {
  beforeEnter: function (el) {
    el.__vue__.$withTrans = true
  },
  afterEnter: function (el) {
    el.__vue__.$emit('transition-over')
  }
}
Vue.transition('slide-left', dzzTrans)
Vue.transition('slide-right', dzzTrans)
Vue.use(VueRouter)

var myApp = Vue.extend({
  el () { return 'html' },
  data () {
    return {
      transition: 'slide-left',
      size: Util.getHtmlFontSize(),
      width: Util.getBodyWidth()
    }
  },
  created: function () {
    var _self = this
    console.log('myApp created')
    Util.addResizeEvent(function () {
      console.log(document.body.clientWidth)
      _self.size = Util.getHtmlFontSize()
      _self.width = Util.getBodyWidth()
    })
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
