
<style lang="scss" scoped>
  footer{
    box-shadow: 0 0 11px #00bcd4;
    padding: 0.1rem;position: fixed;width: 100%;bottom: 0;background: white;
  }
</style>

<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <footer class="foot-transition">
    <a v-on:click="onNextClick" class="weui_btn weui_btn_primary">下一步</a>
  </footer>
</template>

<script>
  export default {
    methods: {
      onNextClick: function () {
        this.$emit('click-next-step')
      }
    }
  }
</script>
