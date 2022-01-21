<template>
  <div id="mian_warp">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#mian_warp {
  position: fixed;
  left: 250px;
  top: 40px;
  right: 0;
  bottom: 0;
  border: 30px solid #e9e9e9;
  box-sizing: border;
}
</style>
