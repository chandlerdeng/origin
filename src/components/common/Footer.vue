<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
	<footer id="dzz-footer" class="weui_tabbar" >
		<a v-on:click="Goto(0, $event)" v-bind:class="{'weui_bar_item_on': activeTab[0]}"
       class="weui_tabbar_item">
			<div class="weui_tabbar_icon dzz-icon-home"> </div>
		</a>
		<a class="weui_tabbar_item"
       v-bind:class="{ 'weui_bar_item_on': activeTab[1]}" v-on:click="Goto(1, $event)">
			<div class="weui_tabbar_icon dzz-icon-order"></div>
		</a>
		<a class="weui_tabbar_item"
       v-bind:class="{ 'weui_bar_item_on': activeTab[2]}" v-on:click="Goto(2, $event)">
			<div class="weui_tabbar_icon dzz-icon-me" ></div>
		</a>
	</footer>
</template>

<script>
  export default {
    data: function () {
      return {
        isActive: [true, false, false]
      }
    },
    props: ['active-tab'],
    computed: {
      iconUrls: function () {
        let icons = ['home', 'order', 'me']
        return this.activeTab.map(function (val, id) {
          var a = val ? 'pressed' : 'normal'
          return `../../assets/imgs/icon-nav-${icons[id]}-${a}.png`
        })
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
        var urls = ['/home/', '/home/myorders', '/home/myaccount']
        this.isActive = [false, false, false]
        this.isActive[id] = true
        this.$router.go(urls[id])
      }
    },
    created: function () {
      console.log('Footer.vue ready!')
    }
  }
</script>

<style lang="scss" scoped>
  #dzz-footer.weui_tabbar{
    position: fixed;
    .weui_tabbar_item{padding: 0.05rem 0}
    .weui_tabbar_icon{
      width: 0.38rem;
      height: 0.38rem;
    }
  }

	.weui_bar_item_on .weui_tabbar_icon.dzz-icon-home{
		background: url(../../assets/imgs/icon-nav-home-pressed.png) center no-repeat;
    background-size: contain;
	}
	.weui_tabbar_icon.dzz-icon-home{
		background: url(../../assets/imgs/icon-nav-home-normal.png) center no-repeat;
    background-size: contain;
	}
  .weui_bar_item_on .weui_tabbar_icon.dzz-icon-order{
		background: url(../../assets/imgs/icon-nav-order-pressed.png) center no-repeat;
    background-size: contain;
	}
	.weui_tabbar_icon.dzz-icon-order{
		background: url(../../assets/imgs/icon-nav-order-normal.png) center no-repeat;
    background-size: contain;
	}
  .weui_bar_item_on .weui_tabbar_icon.dzz-icon-me{
		background: url(../../assets/imgs/icon-nav-me-pressed.png) center no-repeat;
    background-size: contain;
	}
	.weui_tabbar_icon.dzz-icon-me{
		background: url(../../assets/imgs/icon-nav-me-normal.png) center no-repeat;
    background-size: contain;
	}

</style>