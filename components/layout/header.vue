<template>
  <div flex="main:justify cross:center">
    <my-logo></my-logo>
    <div flex="cross:center">
      <el-menu router default-active="/" active-text-color="#409EFF" class="menu" mode="horizontal">
        <el-menu-item class="item" index="/">&#12288;首页&#12288;</el-menu-item>
        <el-menu-item class="item" index="/msg">新闻公告</el-menu-item>
        <el-menu-item class="item" index="/policy">政策法规</el-menu-item>
      </el-menu>
      <div>
        <el-button type="primary" plain icon="el-icon-search" circle/>
        <el-button type="primary" plain icon="el-icon-menu" circle/>
      </div>
    </div>
  </div>
</template>
<style scoped>
.menu {
  border-bottom: 0;
  background-color: rgba(0, 0, 0, 0);
}
.item:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
<script>
import MyLogo from "./logo";
export default {
  name: "my-header",
  components: { MyLogo }
};
</script>
