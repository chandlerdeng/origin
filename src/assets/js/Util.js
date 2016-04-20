/**
 * Created by Administrator on 2016/4/19.
 */
import Vue from 'vue'

let _RESIZE_EVENT_STACK = []

{
  let resize = function () {
    _RESIZE_EVENT_STACK.forEach(function (fn, id) {
      // console.log(fn.toString())
      fn(null)
    })
  }
  if (window.attachEvent) {
    window.attachEvent('resize', Vue.util.debounce(resize, 300))
  } else if (window.addEventListener) {
    window.addEventListener('resize', Vue.util.debounce(resize, 300), false)
  }
}

export default {
  getHtmlFontSize: function () {
    // 设计图按照320px的屏幕宽度设计
    return 100 * (document.body.clientWidth / 320)
  },
  getBodyWidth: function () {
    return document.body.clientWidth
  },
  addResizeEvent: function (fn) {
    _RESIZE_EVENT_STACK.push(fn)
  }
}
