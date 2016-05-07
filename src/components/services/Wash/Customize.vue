
<style lang="scss">
  .weui_grids{
    white-space: normal;
    &:not(:first-child){
      margin-top: -1px;

    }
    .weui_grid{padding: 0.12rem 0.1rem;
      .price{color: #21BDBD;font-weight: 700}
    }
    .weui_grid_icon{
      width: 0.4rem; height: 0.4rem;
    }
    .weui_grid_label{font-size: 0.12rem}
  }
</style>
<template>
  <div class="mb10">
    <div class="weui_grids weui_cells dzz-flex-container" v-for="(index1, services) in servGroups"
        track-by="$index">
      <a v-for="(index2, data) in services" class="weui_grid dzz-stretch-item"
         v-on:click="onSelectService(index1, index2, $event)">
        <div class="weui_grid_icon">
          <i class="icon icon_button dzz-customize-icon-{{data.washImage}}"></i>
        </div>
        <p class="weui_grid_label mt5">
          <span v-text="data.washName"></span>
        </p>
        <p class="weui_grid_label mt5">
          <span class="fl price fs14" v-text="data.washDiscountPrice | currency '￥' 0"></span>
          <span class="fr ml5 line-through" v-text="data.washPrice | currency '￥' 0"></span>
        </p>
      </a>
    </div>

    <div style="padding-bottom: 0.63rem"></div>
    <next-step-btn v-on:click-next-step="onClickNextStep"></next-step-btn>
  </div>
</template>

<script>
  import nsb from '../../common/NextBtnFooter.vue'

  export default {
    data: function () {
      return {
        servGroups: []
      }
    },
    created: function () {
      console.log('customize created')
    },
    /*
    ready: function () {
      console.log('customize ready')
    },
    compiled: function () {
      console.log('customize compiled')
    },
    beforeCompile: function () {
      console.log('customize beforeCompile')
    },
    */
    components: {
      'next-step-btn': nsb
    },
    methods: {
      onClickNextStep: function () {
        console.log('onClickNextStep')
      },
      onSelectService: function (id, id2, e) {
        console.log('onSelectService')
        if (isNaN(id) || id < 0 || id > this.servGroups.length) {
          return false
        }
        if (isNaN(id2) || id2 < 0 || id2 > this.servGroups[id].length) {
          return false
        }
        this.servGroups[id][id2].isSelected =
            window.$(e.currentTarget).find('.icon').toggleClass('active').hasClass('active')
      }
    }
    /*
    route: {
      activate: function (transition) {
        // console.log('customize route activated!')
        transition.next()
      }
    }
    */
  }

</script>

