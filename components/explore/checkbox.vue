<template>
  <div>
    <el-checkbox-group v-model="checkedType" @change="handleChange">
      <el-checkbox-button v-bind:label="'人才队伍'">
        人才队伍
      </el-checkbox-button>
      <el-checkbox-button :label="'设备设施'">
        设备设施
      </el-checkbox-button>
      <el-checkbox-button :label="'科研成果'">
        科研成果
      </el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>
<style scoped>
.home-header {
  background-color: #24292e;
  color: #fff;
  font-weight: 400;
  font-size: 1.2em;
  padding: 1em;
}
.home-nav {
  margin-bottom: 2em;
}
</style>
<script>
export default {
  name: "explore-checkbox",
  computed: {},
  data() {
    return {
      checkedType: ["人才队伍", "设备设施", "科研成果"]
    };
  },
  created() {
    this.$store.commit("explore/classify", [
      "人才队伍",
      "设备设施",
      "科研成果"
    ]);
  },
  methods: {
    handleChange(value) {
      console.log(this.value);
      console.log(this.checkedType);
      this.$store.commit("explore/classify", this.checkedType);
    }
  }
};
</script>

