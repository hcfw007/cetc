<template>
  <el-menu class="my-menu" text-color="#555" :default-active="$route.params.type||'科研进展'">
    <nuxt-link to="/news/科研进展">
      <el-menu-item index="科研进展" class="my-item">
        <i class="el-icon-tickets" />
        <span slot="title">科研进展</span>
      </el-menu-item>
    </nuxt-link>
    <nuxt-link to="/news/运行管理">
      <el-menu-item index="运行管理" class="my-item">
        <i class="el-icon-news"></i>

        <span slot="title">运行管理</span>
      </el-menu-item>
    </nuxt-link>
    <nuxt-link to="/news/通知公告">
      <el-menu-item index="通知公告" class="my-item">
        <i class="el-icon-message"></i>
        <span slot="title">通知公告</span>
      </el-menu-item>
    </nuxt-link>
    <nuxt-link to="/news/行业动态">
      <el-menu-item index="行业动态" class="my-item">
        <i class="el-icon-bell"></i>
        <span slot="title">行业动态</span>
      </el-menu-item>
    </nuxt-link>
  </el-menu>
</template>
<style scoped>
.my-menu {
  background-color: transparent;
  font-weight: 800;
  width: 10em;
  border: 0;
}
a {
  text-decoration-line: none;
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
  name: "news-side",
  computed: {}
};
</script>

