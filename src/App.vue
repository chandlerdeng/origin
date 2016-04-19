<template>
  <div>
    <div class="dzz-body-width">
      <dzz-footer></dzz-footer>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Footer from './components/Footer.vue'

  export default {
    components: {
      'dzz-footer': Footer
    }
  }
</script>

<style scoped>
  .dzz-body-width{margin-bottom: 0.5rem}
</style>