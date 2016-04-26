
<style>
  .dzz-map-bg{
    background: url(../assets/imgs/icon-map.png) left center no-repeat;
    -webkit-background-size: contain;
    background-size: contain;}
  .dzz-header .weui_cell_bd.weui_cell_primary{margin-left: -0.24rem}
  .dzz-body .swiper-slide img{width: 100%}
  .dzz-body .swiper-container{font-size: 0.13rem; line-height: 100%;}
  .dzz-menu .weui_cell_hd img{height: 0.352rem; margin-right: 0.05rem; display: block}
  .dzz-menu .weui_cell_bd .title{margin: 0}
  .dzz-menu .weui_cell_bd .description{margin: 0.05rem 0 0 0}
  .dzz-menu .weui_cell {padding: 0.15rem}
  .dzz-menu .weui_cells_access .weui_cell_ft:after{height: 0.12rem;width: 0.12rem;top: 0.02rem}
</style>

<template>
  <div>
    <div class="dzz-body-width">
      <header class="weui_cells dzz-header">
        <div class="weui_cell">
          <div class="weui_cell_hd dzz-map-bg">
            <span class="pl24 fs13">深圳</span>
          </div>
          <div class="weui_cell_bd weui_cell_primary">
            <span>无忧家电</span>
          </div>
          <div class="weui_cell_ft">
            <i class=""></i>
          </div>
        </div>
      </header>
      <section class="dzz-body">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/imgs/banner/banner_1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/imgs/banner/banner_2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/imgs/banner/banner_3.jpg" alt=""></div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets">
            <span class="swiper-pagination-bullet"></span>
            <span
              class="swiper-pagination-bullet"></span><span
              class="swiper-pagination-bullet"></span></div>
        </div>

        <div class="weui_cells dzz-menu">
          <div class="weui_cell weui_cells_access" v-link="'/wash?slideleft=true'">
            <div class="weui_cell_hd">
              <img src="../assets/imgs/icon-brand-wash.png"></div>
            <div class="weui_cell_bd weui_cell_primary">
              <p class="fs16 title">家电清洗</p>
              <p class="fs12 description">空调清洗、油烟机清洗、洗衣机清洗...</p>
            </div>
            <div class="weui_cell_ft">            </div>
          </div>
          <div class="weui_cell weui_cells_access" v-link="'/repair?slideleft=true'">
            <div class="weui_cell_hd">
              <img src="../assets/imgs/icon-brand-weix.png"></div>
            <div class="weui_cell_bd weui_cell_primary">
              <p class="fs16 title">家电维修</p>
              <p class="fs12 description">电视维修、空调维修、小家电维修...</p>
            </div>
            <div class="weui_cell_ft"></div>
          </div>
          <div class="weui_cell weui_cells_access" v-link="'/repair?slideleft=true'">
            <div class="weui_cell_hd">
              <img src="../assets/imgs/icon-brand-zhuang.png"></div>
            <div class="weui_cell_bd weui_cell_primary">
              <p class="fs16 title">家电安装</p>
              <p class="fs12 description">电视机安装、空调安装</p>
            </div>
            <div class="weui_cell_ft"></div>
          </div>
          <div class="weui_cell weui_cells_access" v-link="'/repair?slideleft=true'">
            <div class="weui_cell_hd">
              <img src="../assets/imgs/icon-brand-recycle.png"></div>
            <div class="weui_cell_bd weui_cell_primary">
              <p class="fs16 title">电器回收</p>
              <p class="fs12 description">旧手机回收、旧家电回收</p>
            </div>
            <div class="weui_cell_ft"></div>
          </div>
        </div>
        <div class="pb15"></div>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      initSlider: function () {
        console.log('initSlider')
        window.$('.swiper-container').swiper({
          loop: true,
          autoplay: 3000
        })
      }
    },
    created: function () {
      console.log('Home.vue ready!')
    },
    ready: function () {
      console.log('Home.vue ready!')
      if (!this.$withTrans) {
        this.initSlider()
      }
    },
    route: {
      activate: function (transition) {
        console.log('activated!')
        transition.next()
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

</style>
