<template>
  <div flex="main:justify cross:center">
    <my-logo></my-logo>
    <div flex="cross:center">
      <el-menu router :default-active="$route.path.split('/')[1]||'/'" active-text-color="#409EFF" class="menu" mode="horizontal">
        <el-menu-item class="item" index="/">&#12288;首页&#12288;</el-menu-item>
        <el-menu-item class="item" index="news">新闻公告</el-menu-item>
        <el-menu-item class="item" index="policy">政策法规</el-menu-item>
      </el-menu>
      <div style="margin-left:20px;">
        <el-popover ref="popover" placement="bottom-end" width="300">
          <my-search/>
        </el-popover>
        <el-button type="primary" plain icon="el-icon-search" circle v-popover:popover/>
        <el-button type="primary" plain icon="el-icon-menu" circle @click="userDialogVisible = true" />
        <el-dialog :visible.sync="userDialogVisible" width="20em">
          <user-dialog>
          </user-dialog>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<style scoped>
.menu {
  background-color: transparent;
}
.item:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
<script>
import MyLogo from "./logo";
import MySearch from "../home/search";
import UserDialog from "~/components/user/userDialog";
export default {
  name: "my-header",
  components: { MyLogo, MySearch, UserDialog },
  data() {
    return {
      userDialogVisible: false
    };
  }
};
</script>
