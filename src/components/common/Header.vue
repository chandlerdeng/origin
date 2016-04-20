<template>
  <header class="mui-bar mui-bar-nav">
    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
    <span class="mui-title fs16" v-text="title"></span>
    <a class="mui-icon  mui-icon-info mui-pull-right"></a>
  </header>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  props: ['title']
}
</script>

<style scoped>

</style>
