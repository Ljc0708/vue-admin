<template>
  <div id="nav_warp">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="#ffffff"
    >
      <el-sub-menu index="1">
        <!-- 一级菜单 -->
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <!-- 子菜单 -->
        <el-menu-item-group>
          <el-menu-item index="1-1">item one</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "nav",
  setup() {},
};
</script>

<style lang="less" scoped>
#nav_warp {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: rgb(56, 67, 85);
}
</style>
