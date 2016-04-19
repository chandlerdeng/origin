<template>
  <div>
    <div class="dzz-body-width">
      <header class="mui-bar mui-bar-nav">

        <span class="mui-title fs16">无忧家电</span>
        <button class="mui-action-back mui-btn mui-btn-blue mui-btn-link
      mui-btn-nav mui-pull-left fs13 pl32 "> 深圳
        </button>
        <!--<a class="mui-icon mui-icon-bars mui-pull-right"></a>-->
      </header>
      <section class="dzz-body">
        <div id="slider" class="mui-slider">
          <div class="mui-slider-group mui-slider-loop">
            <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
            <div class="mui-slider-item mui-slider-item-duplicate">
              <a href="#">
                <img src="../assets/imgs/banner/banner_3.jpg">
              </a>
            </div>
            <!-- 第一张 -->
            <div class="mui-slider-item">
              <a href="#">
                <img src="../assets/imgs/banner/banner_1.jpg">
              </a>
            </div>
            <!-- 第二张 -->
            <div class="mui-slider-item">
              <a href="#">
                <img src="../assets/imgs/banner/banner_3.jpg">
              </a>
            </div>
            <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
            <div class="mui-slider-item mui-slider-item-duplicate">
              <a href="#">
                <img src="../assets/imgs/banner/banner_1.jpg">
              </a>
            </div>
          </div>
          <div class="mui-slider-indicator">
            <div class="mui-indicator mui-active"></div>
            <div class="mui-indicator"></div>
          </div>
        </div>

        <ul class="mui-table-view mui-table-view-chevron mt12">
          <li class="mui-table-view-cell mui-media">
            <a v-link="'/wash?slideleft=true'" class="mui-navigate-right">
              <img class="mui-media-object mui-pull-left" src="../assets/imgs/icon-brand-wash.png">
              <div class="mui-media-body">
                <p class="fs16 title">家电清洗</p>
                <p class="mui-ellipsis fs12 mt5">空调清洗、油烟机清洗、洗衣机清洗...</p>
              </div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media">
            <a v-link="'/repair?slideleft=true'" class="mui-navigate-right">
              <img class="mui-media-object mui-pull-left" src="../assets/imgs/icon-brand-weix.png">
              <div class="mui-media-body">
                <p class="fs16 title">家电维修</p>
                <p class="mui-ellipsis fs12 mt5">电视维修、空调维修、小家电维修...</p>
              </div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media">
            <a v-link="'/repair?slideleft=true'" class="mui-navigate-right">
              <img class="mui-media-object mui-pull-left" src="../assets/imgs/icon-brand-zhuang.png">
              <div class="mui-media-body">
                <p class="fs16 title">家电安装</p>
                <p class="mui-ellipsis fs12 mt5">电视机安装、空调安装</p>
              </div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media">
            <a v-link="'/repair?slideleft=true'" class="mui-navigate-right">
              <img class="mui-media-object mui-pull-left" src="../assets/imgs/icon-brand-recycle.png">
              <div class="mui-media-body">
                <p class="fs16 title">电器回收</p>
                <p class="mui-ellipsis fs12 mt5">旧手机回收、旧家电回收</p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      initSlider: function () {
        console.log('initSlider')
        this.banner = window.mui('#slider').slider({
          interval: 400
        })
      }
    },
    ready: function () {

    },
    route: {
      activate: function (transition) {
        console.log('activated!')
        transition.next()
        if (!this.$withTrans) {
          this.initSlider()
        }
      },
      deactivate: function (transition) {
        console.log('destroy Slider')
        // this.banner.destroy()
        transition.next()
      }
    },
    events: {
      'transition-over': function () {
        console.log('transition-over')
        this.initSlider()
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/css/common.scss";

  /* 列表 */

  $height : 0.44rem;
  .mui-table-view{
    .mui-table-view-cell{
      padding: 0;
      >a:not(.mui-btn) {
         margin: 0;
         padding: 0.11rem 0.52rem 0.11rem 0.15rem;
      }
    }
    .mui-media-object.mui-pull-left{
      height: 0.8*$height; width: 0.8*$height; max-width: 0.8*$height;
      margin-top:0.1*$height;margin-right: 0.11rem}
    .mui-media-body{
      .title{color: black;line-height: 1.4}
      .mui-ellipsis{line-height: 1.4}
    }
  }
</style>

<style scoped>
  .mui-bar .mui-btn-link{
    background: url(../assets/imgs/icon-map.png) left center no-repeat;
    -webkit-background-size: auto 60%; background-size: auto 60%;
  }

</style>