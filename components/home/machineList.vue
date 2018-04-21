<template>
  <ul>
    <li v-for="machine in list" v-bind:key="machine.id" flex="main:justify">
      <span>{{machine.name}}</span>
      <el-button type="text" style="padding:0">详情</el-button>
    </li>
  </ul>
</template>
<style scoped>
li{
  padding: 10px;
  border-top: 1px solid #228EFF;
}
li:first-child {
  border-top: 0;
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
