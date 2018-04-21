<template>
  <div>
    <div v-for="item in list" :key="item.id" flex="dir:top" class="list-item">
      <div flex="main:justify">
        <span>
          <el-button type="text">{{item.name}}</el-button>
        </span>
        <span style="color:#bcbcbc">来自:
          <el-button type="text">{{item.lab}}</el-button>
        </span>
      </div>
      <div>
        {{item.description}}
      </div>
    </div>
  </div>
</template>
<style scoped>
.list-item {
  padding: 1em;
  border-top: 1px solid #bcbcbc;
}
.list-item:first-child {
  border-top: 0;
  padding-top: 0;
}
.list-item:last-child {
  padding-bottom: 0;
}
</style>
<script>
export default {
  name: "machine-list",
  data() {
    return {};
  },
  props: ["list"]
};
</script>
