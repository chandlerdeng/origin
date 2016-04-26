<style lang="scss">
  .dzz-tabs.weui_cells {
    margin: 0;

    [class*=weui-col-] {
      padding: 0.08rem;
      border-bottom: 0.02rem solid transparent;
    }

    .dzz-active {
      border-bottom: 0.02rem solid #04B6F8;
    }
  }
</style>

<template>
  <div class="fs13 ">
    <div class="dzz-body-width">
      <dzz-header title="家电清洗"></dzz-header>

      <div class="dzz-tabs weui-row weui_cells tcenter">
        <div class="weui-col-50" v-bind:class="{'dzz-active': tabStatus[0]}"
            v-link="'/wash/'">单品清洗</div>
        <div class="weui-col-50" v-bind:class="{'dzz-active': tabStatus[1]}"
             v-link="'/wash/package'">优惠套餐</div>
      </div>

      <router-view v-on:change-tab="changeTab"></router-view>
    </div>
  </div>
</template>

<script>
  import Header from '../common/Header.vue'
  import Util from '../../assets/js/Util'

  export default {
    data: function () {
      return {
        tabStatus: [true, false]
      }
    },
    components: {
      'dzz-header': Header
    },
    myRoutes: {
      '/': {
        component: function (resolve) {
          Promise.all([
            new Promise(function (resolve, reject) {
              resolve(require('./wash/Customize.vue'))
            }),
            Util.getAjaxPromise('http://base.shifendaojia.com:88/ha-wechat/v1/product/findAllProductWash')
          ]).then(function (results) {
            let comp = results[0]
            comp.created = function () {
              this.$emit('change-tab', [true, false])
              this.servGroups = []
              for (var i = 0; i < results[1].length; i += 3) {
                if (i + 3 < results[1].length) {
                  this.servGroups.push(
                      results[1].slice(i, i + 3)
                  )
                } else {
                  this.servGroups.push(results[1].slice(i))
                }
              }
            }
            resolve(comp)
          })
        }
      },
      '/package': {
        component: function (resolve) {
          let a = require('./wash/Package.vue')
          a.created = function () {
            this.$emit('change-tab', [false, true])
          }
          resolve(a)
        }
      }
    },
    methods: {
      changeTab: function (tab) {
        console.log('washlist changeTab fired!')
        if (tab.constructor === Array) this.tabStatus = tab
      }
    }
  }
</script>

