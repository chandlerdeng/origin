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
      transition: 'slide-right',
      size: Util.getHtmlFontSize(),
      width: Util.getBodyWidth()
    }
  },
  created: function () {
    var _self = this
    console.log('myApp created')
    require('assets/css/common.scss')
    Util.addResizeEvent(function () {
      console.log(document.body.clientWidth)
      _self.size = Util.getHtmlFontSize()
      _self.width = Util.getBodyWidth()
    })
  },
  route: {
    activate: function (transition) {
      console.log('myApp route activated!')
      transition.next()
    },
    deactivate: function (transition) {
      console.log('myApp route deactivated!')
      transition.next()
    },
    data: function (transition) {
      console.log('myApp route data!')
      transition.next()
    },
    canReuse: function (transition) {
      console.log('myApp route canReuse!')
      transition.next()
    },
    canDeactivate: function (transition) {
      console.log('myApp route canDeactivate!')
      transition.next()
    },
    canActivate: function (transition) {
      console.log('myApp route canActivate!')
      transition.next()
    }
  }
})
var myRouter = new VueRouter()

 /* 嵌套路由 */
var homeR = {
  name: 'home',
  component: App,
  subRoutes: App.myRoutes
}
myRouter.map({
  '/': homeR,
  '/home': homeR,
  '/wash': {
    name: 'wash',
    component: function (resolve) {
      resolve(require('components/services/WashList.vue'))
    },
    subRoutes: require('components/services/WashList.vue').myRoutes
  }
})

myRouter.beforeEach(function (trans) {
  console.log('myRouter.beforeEach')
  var isSlideChg = false

  // 拦截地址, 如果是返回, 则改变动画方向

  if (trans.to.query && trans.to.query.slideleft && Boolean(trans.to.query.slideleft) === true) {
    if (myRouter.app.transition !== 'slide-left') {
      myRouter.app.transition = 'slide-left'
      isSlideChg = true
    }
  } else {
    if (myRouter.app.transition !== 'slide-right') {
      myRouter.app.transition = 'slide-right'
      isSlideChg = true
    }
  }

  if (isSlideChg) {
    // 必须延时, 否则transition方向未转换结束就开始动画, 就出问题
    myRouter.app.$nextTick(function () {
      setTimeout(function () {
        trans.next()
      }, 100)
    })
  } else {
    trans.next()
  }
})

myRouter.start(myApp, 'body')
