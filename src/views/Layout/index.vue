<template>
  <div>
    <LayoutHeader />
    <LayoutMain />
    <LayoutNav />
  </div>
</template>

<script>
import LayoutHeader from "./components/Header";
import LayoutMain from "./components/Main";
import LayoutNav from "./components/Nav";
export default {
  name: "layout",
  components: {
    LayoutHeader,
    LayoutMain,
    LayoutNav,
  },
  setup() {},
};
</script>

<style lang="less" scoped>
</style>
