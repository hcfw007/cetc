<template>
  <div flex="main:justify cross:center" class="my-header">
    <div flex="cross:center" style="flex-wrap:nowrap">
      <my-logo class="mr-3"></my-logo>
    </div>
    <el-menu router :default-active="'/'+$route.path.split('/')[1]" text-color="#fff" active-text-color="#409eff" background-color="#07222a" class="menu" mode="horizontal">
      <el-menu-item class="item" index="/">&#12288;首页&#12288;</el-menu-item>
      <el-menu-item class="item" index="/news">新闻公告</el-menu-item>
      <el-menu-item class="item" index="/explore">发现</el-menu-item>
      <el-menu-item class="item" index="/policy">政策法规</el-menu-item>
    </el-menu>
    <div flex="cross:center">
      <my-search></my-search>
      <auth></auth>
    </div>
  </div>
</template>
<style scoped>
.menu {
  background-color: transparent;
  border: none;
  margin: auto 0;
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
  },
  computed: {
    curPath() {
      let p = this.$router.path.split("/")[1];
      return p ? "/" + p : "/";
    }
  }
};
</script>
