<template>
  <div class="pages-content-scroll">
      <el-backtop target=".pages-content-scroll"></el-backtop>
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style lang="scss" scoped>
  .pages-content-scroll {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: hidden
  }
</style>