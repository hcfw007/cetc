<template>
  <div>
    <div v-for="research in list" v-bind:key="research.id">
      <el-button type="text" style="padding:0">{{research.name}}</el-button>
      <div flex="main:justify cross:center">
        <span>
          <span>科研成果类型：</span>
          <span>{{research.type}}</span>
        </span>
        <span>
          <span>来自：</span>
          <el-button>
            {{research.lab}}
          </el-button>
        </span>

      </div>
    </div>
  </div>
</template>
<style scoped>
li {
  padding: 10px;
  border-top: 1px solid #228eff;
}
li:first-child {
  border-top: 0;
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
