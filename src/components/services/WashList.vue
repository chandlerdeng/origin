<style lang="scss">
  .dzz-tabs.weui_cells {
    margin: 0;

    [class*=weui-col-] {
      padding: 0.08rem;
      border-bottom: 0.03rem solid transparent;
    }

    .dzz-active {
      border-bottom: 0.03rem solid #21BDBD;
      color: #21BDBD;
    }
  }
</style>

<template>
  <div class="fs13 ">
    <div class="dzz-body-width">
      <dzz-header title="家电清洗"></dzz-header>

      <div class="dzz-tabs weui-row weui_cells tcenter fs13">
        <div class="weui-col-50" v-bind:class="{'dzz-active': tabStatus[0]}"
            v-link="{ path: '/wash/', replace: true }">单品清洗</div>
        <div class="weui-col-50" v-bind:class="{'dzz-active': tabStatus[1]}"
             v-link="{ path: '/wash/package', replace: true }">优惠套餐</div>
      </div>

      <router-view v-on:change-tab="changeTab" keep-alive="true"></router-view>
    </div>
  </div>
</template>

<script>
  import Header from '../common/Header.vue'
  import Util from '../../assets/js/Util'

  let RebuildComp = function (comp, data, numPerRow, eventData) {
    let ChangeTabHdlr = function () {
      this.$emit('change-tab', eventData)
    }
    let BindData = function () {
      this.servGroups = []
      for (let i = 0; i < data.length; i += numPerRow) {
        if (i + numPerRow < data.length) {
          this.servGroups.push(
              data.slice(i, i + numPerRow)
          )
        } else {
          this.servGroups.push(data.slice(i))
        }
      }
    }
    if (comp.created) {
      if (Array.isArray(comp.created)) {
        comp.created.unshift(BindData)
      } else {
        comp.created = [BindData, comp.created]
      }
    } else {
      comp.created = BindData
    }
    if (comp.route && comp.route.activate) {
      comp.route.activate = [ChangeTabHdlr, comp.route.activate]
    } else {
      comp.route = Object.assign(comp.route || {}, {
        activate: ChangeTabHdlr
      })
    }
    return comp
  }
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
          window.$.showLoading()
          Promise.all([
            Util.getVuePromise(require('./wash/Customize.vue')),
            Util.getAjaxPromise('http://base.shifendaojia.com:88/ha-wechat/v1/product/findAllProductWash')
          ]).then(function (results) {
            let comp = RebuildComp(results[0], results[1], 3, [true, false])
            resolve(comp)
            window.$.hideLoading()
          }).catch(function () {
            window.$.hideLoading()
          })
        }
      },
      '/package': {
        component: function (resolve) {
          window.$.showLoading()
          Promise.all([
            Util.getVuePromise(require('./wash/Package.vue')),
            Util.getAjaxPromise('http://base.shifendaojia.com:88/ha-wechat/v1/product/findAllProductWashPackage')
          ]).then(function (results) {
            let comp = RebuildComp(results[0], results[1], 2, [false, true])
            resolve(comp)
            window.$.hideLoading()
          }).catch(function () {
            window.$.hideLoading()
          })
        }
      }
    },
    methods: {
      changeTab: function (tab) {
        // console.log('washlist changeTab fired!')
        if (tab.constructor === Array) this.tabStatus = tab
      }
    }
  }
</script>

