
<style lang="scss" scoped>
  .dzz .weui-row{
    .weui-col-50 {
      width: 50%;padding: 0.12rem 0.1rem;
      .border-top{border-top: 1px dotted #eee}
      .line2{padding: 0.05rem;white-space: normal;
        &:after{content: " ";display: block;clear: both;}
      }
      .price{color: #21BDBD;font-weight: 700}
      &:first-child{border-right: 1px solid #eee}
    }
    .weui_grid_icon{
      width: 0.4rem; height: 0.4rem;
    }
    &:not(:first-child){margin-top: 0;
      &:before{border-top:0}
    }

  }
</style>

<template>
  <div class="mb10 dzz">
    <div class="weui-row weui_cells dzz-flex-container" v-for="(index1, services) in servGroups"
         track-by="$index">
      <div v-for="(index2, data) in services"  class="weui-col-50 dzz-stretch-item fs12"
           v-on:click="onSelectService(index1, index2, $event)">
        <div class="weui_grid_icon mb10">
          <i class="icon icon_button dzz-customize-icon-{{data.washPackageImage}}"></i>
        </div>
        <div class="line2">
          <span class="fl" v-text="data.washPackageName"></span>
          <span class="fr price" v-text="data.washPackagePrice | currency '￥' 0"></span>
        </div>
        <div class="border-top line2 pb0">
          <span class="fl" v-text="data.washPackageDesc"></span>
        </div>
      </div>
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
  }
</script>

