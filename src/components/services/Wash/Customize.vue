
<style lang="scss">
  .weui_grids{
    white-space: normal;
    &:not(:first-child){
      margin-top: -1px;

    }
  }
</style>
<template>
  <div>
    <div class="weui_grids weui_cells dzz-flex-container" v-for="services in servGroups">
      <a v-for="data in services" class="weui_grid dzz-stretch-item"
         v-on:click="onSelectService">
        <div class="weui_grid_icon">
          <i class="icon icon_button" v-text="data.washImage"></i>
        </div>
        <p class="weui_grid_label">
          <span v-text="data.washName"></span>
        </p>
        <p class="weui_grid_label">
          <span v-text="data.washDiscountPrice"></span>
          <span class="ml5" v-text="data.washPrice"></span>
        </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      servGroups: []
    }
  },
  methods: {
    onSelectService: function () {
      console.log('onSelectService')
    }
  }
}
</script>

