<template>
  <el-menu route>
       <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-share"></i>
          <span>开放共享</span>
        </template>
          <el-menu-item index="1-1">人才</el-menu-item>
          <el-menu-item index="1-2">科研</el-menu-item>
          <el-menu-item index="1-3">设备</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-news"></i>
          <span>合作关系</span>
        </template>
          <!-- <el-menu-item index="2-1">人才</el-menu-item>
          <el-menu-item index="2-2">科研</el-menu-item>
          <el-menu-item index="2-3">设备</el-menu-item> -->
      </el-submenu>
    </el-menu>
</template>
<style scoped>

</style>
<script>
export default {
  name: "index-side"
};
</script>
