<template>
  <div>
    <div class="dzz-body-width">
      <router-view v-on:change-tab="changeTab"></router-view>

      <dzz-footer v-bind:active-tab="tabStatus"></dzz-footer>
    </div>
  </div>
</template>

<script>
  import Footer from './components/common/Footer.vue'

  export default {
    data: function () {
      return {
        tabStatus: [true, false, false]
      }
    },
    components: {
      'dzz-footer': Footer
    },
    myRoutes: {  // this baby was
      '/': {
        component: function (resolve) {
          let a = require('components/Home.vue')
          a.created = function () {
            this.$emit('change-tab', [true, false, false])
          }
          resolve(a)
        }
      },
      '/myorders': {
        component: function (resolve) {
          let a = require('components/account/MyOrderList.vue')
          a.created = function () {
            this.$emit('change-tab', [false, true, false])
          }
          resolve(a)
        }
      },
      '/myaccount': {
        component: function (resolve) {
          console.log('myaccount map router')
          let a = require('components/account/MyAccount.vue')
          a.created = function () {
            this.$emit('change-tab', [false, false, true])
          }
          resolve(a)
        }
      }
    },
    methods: {
      changeTab: function (tab) {
        console.log('changeTab activated!')
        if (tab.constructor === Array) this.tabStatus = tab
      }
    }
  }
</script>

<style scoped>
  .dzz-body-width{margin-bottom: 0.5rem}
</style>