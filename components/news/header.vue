<template>
  <div>
    <div class="home-header">新闻公告</div>
    <div class="home-nav">
      <el-menu mode="horizontal" text-color="#bcbcbc" background-color="#24292e" active-text-color="#fff" :default-active="'/news/'+($route.params.type||'科研进展')" router>
        <el-menu-item index="/news/科研进展">
          <span slot="title">科研进展</span>
        </el-menu-item>
        <el-menu-item index="/news/运行管理">
          <span slot="title">运行管理</span>
        </el-menu-item>
        <el-menu-item index="/news/通知公告">
          <span slot="title">通知公告</span>
        </el-menu-item>
        <el-menu-item index="/news/行业动态">
          <span slot="title">行业动态</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<style scoped>
.home-header {
  background-color: #24292e;
  color: #fff;
  font-weight: 400;
  font-size: 1.2em;
  padding: 1em;
  padding-bottom: 0;
}
.home-nav {
  margin-bottom: 2em;
}
</style>
<script>
export default {
  name: "news-side",
  computed: {}
};
</script>

