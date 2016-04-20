<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
	<footer id="dzz-footer" class="mui-bar mui-bar-tab" >
		<div class="dzz-tab-item " v-bind:class="{ 'mui-active': isActive[0]}" v-on:click="Goto(0, $event)">
			<div class="mui-icon dzz-icon-home"></div>
		</div>
		<div class="dzz-tab-item"  v-bind:class="{ 'mui-active': isActive[1]}" v-on:click="Goto(1, $event)">
			<div class="mui-icon dzz-icon-order"></div>
		</div>
		<div class="dzz-tab-item" v-bind:class="{ 'mui-active': isActive[2]}" v-on:click="Goto(2, $event)">
			<div class="mui-icon dzz-icon-me" ></div>
		</div>
	</footer>
</template>

<script>
  export default {
    data () {
      return {
        isActive: [true, false, false]
      }
    },
    methods: {
      Goto: function (id, e) {
        /* this is another way to manipulate dom class
         let a = Array.prototype.slice.call(e.currentTarget.parentElement.children, 0)
         a.forEach((val) => {
         val.classList.remove('mui-active')
         })
         e.currentTarget.classList.add('mui-active')
         */
        var urls = ['/', '/myorders', '/myaccount']
        this.isActive = [false, false, false]
        this.isActive[id] = true
        this.$router.go(urls[id])
      }
    }
  }
</script>

<style scoped>
	.mui-active .mui-icon.dzz-icon-home{
		background: url(../../assets/imgs/icon-nav-home-pressed.png) center no-repeat;
		background-size: contain;
	}
	.mui-icon.dzz-icon-home{
		background: url(../../assets/imgs/icon-nav-home-normal.png) center no-repeat;
	}
	.mui-active .mui-icon.dzz-icon-order{
		background: url(../../assets/imgs/icon-nav-order-pressed.png) center no-repeat;
		background-size: contain;
	}
	.mui-icon.dzz-icon-order{
		background: url(../../assets/imgs/icon-nav-order-normal.png) center no-repeat;
	}
	.mui-active .mui-icon.dzz-icon-me{
		background: url(../../assets/imgs/icon-nav-me-pressed.png) center no-repeat;
		background-size: contain;
	}
	.mui-icon.dzz-icon-me{
		background: url(../../assets/imgs/icon-nav-me-normal.png) center no-repeat;
	}

</style>