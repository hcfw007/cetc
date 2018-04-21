<template>
  <el-input placeholder="请输入您要搜索的内容" prefix-icon="el-icon-search" v-model="searchStr" autofocus @keyup.enter.native="searchSubmit" />
</template>
<style scoped>

</style>
<script>
import { mapState } from "vuex";
export default {
  name: "my-search",
  data() {
    return {
      searchStr: ""
    };
  },
  computed: mapState("map", ["onSearch", "mapData"]),
  methods: {
    searchSubmit() {
      console.log("search");
      this.$store.commit("map/search", this.searchStr);
    }
  }
};
</script>
