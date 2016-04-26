<template>
  <div>
    <dzz-header title="我的帐户"></dzz-header>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import Header from '../common/Header.vue'

  export default {
    data: function () {
      return {
        msg: 'Hello World!'
      }
    },
    components: {
      'dzz-header': Header
    },
    created: function () {
      console.log('MyAccount.vue ready!')
    }
  }

</script>

<style scoped>

</style>
