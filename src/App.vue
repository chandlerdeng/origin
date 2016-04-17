<template>
  <div>
    <header class="mui-bar mui-bar-nav">

      <span class="mui-title fs16">无忧家电</span>
      <button class="mui-action-back mui-btn mui-btn-blue mui-btn-link
      mui-btn-nav mui-pull-left fs13 pl32 "> 深圳
      </button>
      <!--<a class="mui-icon mui-icon-bars mui-pull-right"></a>-->
    </header>
    <div id="slider" class="mui-slider">
      <div class="mui-slider-group mui-slider-loop">
        <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="assets/imgs/banner/banner_3.jpg">
          </a>
        </div>
        <!-- 第一张 -->
        <div class="mui-slider-item">
          <a href="#">
            <img src="assets/imgs/banner/banner_1.jpg">
          </a>
        </div>
        <!-- 第二张 -->
        <div class="mui-slider-item">
          <a href="#">
            <img src="assets/imgs/banner/banner_3.jpg">
          </a>
        </div>
        <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="assets/imgs/banner/banner_1.jpg">
          </a>
        </div>
      </div>
      <div class="mui-slider-indicator">
        <div class="mui-indicator mui-active"></div>
        <div class="mui-indicator"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      initSlider: function () {
        window.mui('#slider').slider({
          interval: 400
        })
      }
    },
    ready: function () {
      console.log('hook-example activated!')

      this.initSlider(null)
    },
    components: {
    }
  }
</script>


<style lang="sass">
  @import "assets/css/common.scss";

  $nav-height : 3.615rem;
  .mui-bar-nav{height: $nav-height;background: white;-webkit-box-shadow: none;-moz-box-shadow: none;box-shadow: none;border-bottom: 1px solid $blue;}
  .mui-bar .mui-btn-link, .mui-title{line-height: $nav-height;}
  .mui-title{ color: $blue;}
  .mui-bar .mui-btn-link{color: $gray;}
</style>


<style scoped>
  .mui-bar .mui-btn-link{
    background: url(assets/imgs/icon-map.png) left center no-repeat;
    -webkit-background-size: auto 60%; background-size: auto 60%;
  }

</style>