<template>
  <header class="weui_cells dzz-header">
    <div class="weui_cell">
      <div class="weui_cell_hd" onclick="window.history.back()">
        <img src="../../assets/imgs/icon-back.png" alt=""
             style="margin-right:0.05rem;display:block"></div>
      <div class="weui_cell_bd weui_cell_primary">
        <span v-text="title"> </span>
      </div>
      <div class="weui_cell_ft">
        <i class="weui_icon_info_circle"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['title']
}
</script>

