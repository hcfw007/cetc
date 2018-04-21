<template>
  <div>
    <div v-for="research in list" flex="dir:top" v-bind:key="research.id" class="list-item">
      <span>
        <div flex="main:justify">
          <el-button type="text" style="padding:0">{{research.name}}</el-button>
          <span style="color:#bcbcbc">
            来自:
            <el-button type="text">
              {{research.lab}}
            </el-button>
          </span>
        </div>
        <span>科研成果类型：</span>
        <span>{{research.type}}</span>
      </span>
    </div>
  </div>
</template>
<style scoped>
.list-item {
  border-bottom: 1px solid #bcbcbc;
  padding: 1em;
}
.list-item:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}
.list-item:first-child {
  padding-top: 0;
}
</style>
<script>
export default {
  name: "research-list",
  data() {
    return {};
  },
  props: ["list"]
};
</script>
