<template>
	<footer id="dzz-footer" class="mui-bar mui-bar-tab" >
		<div class="dzz-tab-item mui-active"  v-on:click="Goto('/', $event)">
			<div class="mui-icon dzz-icon-home"></div>
		</div>
		<div class="dzz-tab-item"  v-on:click="Goto('/myorders', $event)">
			<div class="mui-icon dzz-icon-order"></div>
		</div>
		<div class="dzz-tab-item" v-on:click="Goto('/myaccount', $event)">
			<div class="mui-icon dzz-icon-me" ></div>
		</div>
	</footer>
</template>

<script>
  export default {
    methods: {
      Goto: function (url, e) {
        let a = Array.prototype.slice.call(e.currentTarget.parentElement.children, 0)
        a.forEach((val) => {
          val.classList.remove('mui-active')
        })
        e.currentTarget.classList.add('mui-active')
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