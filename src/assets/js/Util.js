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

Vue.filter('currency', function (value, _currency, _number = 2) {
  var digitsRE = /(\d{3})(?=\d)/g
  value = parseFloat(value)
  if (!isFinite(value) || !value && value !== 0) return ''
  _currency = _currency != null ? _currency : '$'
  var stringified = Math.abs(value).toFixed(_number)
  var _int = stringified.slice(0, -(_number + 1))
  var i = _int.length % 3
  var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : ''
  var _float = stringified.slice(-(_number + 1))
  var sign = value < 0 ? '-' : ''
  return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
})

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
  },
  getVuePromise: function (vueComp) {
    return new Promise(function (resolve, reject) {
      resolve(vueComp)
    })
  },
  getAjaxPromise: function (url, param) {
    return new Promise(function (resolve, reject) {
      window.$.ajax({
        url: url,
        dataType: 'json',
        type: 'POST',
        data: {param: param || null},
        success: function (data) {
          if (data && data.flag === 'success') {
            resolve(data.data)
          } else {
            reject(data.msg)
          }
        },
        error: function (rslt) {
          reject(rslt.toString())
        }
      })
    })
  }
}
