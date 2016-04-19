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

<style lang="scss">
  @import "assets/css/common.scss";

  $nav-height : 0.47rem;
  .mui-bar-nav{position: relative; height: $nav-height;background: white;-webkit-box-shadow: none;-moz-box-shadow: none;box-shadow: none;border-bottom: 1px solid $blue;}
  .mui-bar .mui-btn-link, .mui-title{line-height: $nav-height;}
  .mui-title{ color: $blue;}
  .mui-bar .mui-btn-link{color: $gray;}
  .mui-navigate-right{ &:after{font-size: 0.24rem; color: $gray2;right: 0.15rem}}
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
    background: url(assets/imgs/icon-map.png) left center no-repeat;
    -webkit-background-size: auto 60%; background-size: auto 60%;
  }

</style>