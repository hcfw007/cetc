<template>
  <el-menu class="my-menu" text-color="#555" default-active="科研进展" @select="val=>{$emit('select',val)}">
    <el-menu-item index="科研进展" class="my-item">
      <i class="el-icon-tickets" />
      <span slot="title">科研进展</span>
    </el-menu-item>
    <el-menu-item index="运行管理" class="my-item">
      <i class="el-icon-news"></i>
      <span slot="title">运行管理</span>
    </el-menu-item>
    <el-menu-item index="通知公告" class="my-item">
      <i class="el-icon-message"></i>
      <span slot="title">通知公告</span>
    </el-menu-item>
    <el-menu-item index="行业动态" class="my-item">
      <i class="el-icon-bell"></i>
      <span slot="title">行业动态</span>
    </el-menu-item>
  </el-menu>
</template>
<style scoped>
.my-menu {
  background-color: transparent;
  font-weight: 800;
  width: 10em;
  border: 0;
}
.my-item:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
.is-active {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
<script>
export default {
  name: "msg-side"
};
</script>
