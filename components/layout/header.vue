<template>
  <div flex="main:justify cross:center">
    <div flex="cross:center" style="flex-wrap:nowrap">
      <my-logo class="mr-3"></my-logo>
    </div>
    <div flex="cross:center">
      <el-menu router :default-active="$route.path.split('/')[1]||'/'" active-text-color="#409EFF" class="menu" mode="horizontal">
        <el-menu-item class="item" index="/">&#12288;首页&#12288;</el-menu-item>
        <el-menu-item class="item" index="news">新闻公告</el-menu-item>
        <el-menu-item class="item" index="explore">发现</el-menu-item>
        <el-menu-item class="item" index="policy">政策法规</el-menu-item>
      </el-menu>
      <my-search></my-search>
      <auth></auth>
    </div>
  </div>
</template>
<style scoped>
.menu {
  background-color: transparent;
  border: none;
}
</style>
<script>
import MyLogo from "./logo";
import MySearch from "~/components/search";
import Auth from "~/components/user/auth";
export default {
  name: "my-header",
  components: { MyLogo, MySearch, Auth },
  data() {
    return {
      userDialogVisible: false
    };
  }
};
</script>
