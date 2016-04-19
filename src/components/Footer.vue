<template>
	<footer id="dzz-footer" class="mui-bar mui-bar-tab" >
		<a class="dzz-tab-item mui-active" href="#tabbar">
			<div class="mui-icon dzz-icon-home"></div>
		</a>
		<a class="dzz-tab-item" href="#tabbar">
			<div class="mui-icon dzz-icon-order"></div>
		</a>
		<div class="dzz-tab-item" v-on:click="Goto('/myaccount', $event)">
			<div class="mui-icon dzz-icon-me" ></div>
		</div>
	</footer>
</template>

<script>
  export default {
    methods: {
      Goto: function (url, e) {
        debugger

//        var a = e.target.closest('footer').children
//
//        a.forEach((val, id) => { val.classList.remove('mui-active') })
//
//        window.mui('#dzz-footer .dzz-tab-item').removeClass('mui-active')
        // _self.addClass('mui-active')
        this.$router.go(url)
      }
    }
  }
</script>

<style scoped>
	.mui-active .mui-icon.dzz-icon-home{
		background: url(../assets/imgs/icon-nav-home-pressed.png) center no-repeat;
		background-size: contain;
	}
	.mui-icon.dzz-icon-home{
		background: url(../assets/imgs/icon-nav-home-normal.png) center no-repeat;
	}
	.mui-active .mui-icon.dzz-icon-order{
		background: url(../assets/imgs/icon-nav-order-pressed.png) center no-repeat;
		background-size: contain;
	}
	.mui-icon.dzz-icon-order{
		background: url(../assets/imgs/icon-nav-order-normal.png) center no-repeat;
	}
	.mui-active .mui-icon.dzz-icon-me{
		background: url(../assets/imgs/icon-nav-me-pressed.png) center no-repeat;
		background-size: contain;
	}
	.mui-icon.dzz-icon-me{
		background: url(../assets/imgs/icon-nav-me-normal.png) center no-repeat;
	}

</style>