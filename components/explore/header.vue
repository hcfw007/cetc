<template>
  <div>
    <div class="home-header">发现</div>
    <div class="home-nav">
      <el-menu mode="horizontal" text-color="#bcbcbc" background-color="#24292e" active-text-color="#fff" :default-active="'/explore/'+($route.params.type)" router>
        <el-menu-item index="/explore/人才队伍">
          <span slot="title">人才队伍</span>
        </el-menu-item>
        <el-menu-item index="/explore/设备设施">
          <span slot="title">设备设施</span>
        </el-menu-item>
        <el-menu-item index="/explore/科研成果">
          <span slot="title">科研成果</span>
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
  name: "explore-header",
  computed: {}
};
</script>

