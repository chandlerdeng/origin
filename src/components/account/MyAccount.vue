<template>
  <dzz-header v-title="'我的帐户'"></dzz-header>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import Header from '../common/Header.vue'

  export default {
    data () {
      return {
        msg: 'Hello World!'
      }
    },
    components: {
      'dzz-header': Header
    }
  }

</script>

<style scoped>

</style>
