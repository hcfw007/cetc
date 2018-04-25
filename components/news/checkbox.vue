<template>
  <div class="checkbox-container">
    <el-checkbox-group v-model="checkedType" @change="handleChange">
      <el-checkbox-button :label="'科研进展'">
        科研进展
      </el-checkbox-button>
      <el-checkbox-button :label="'运行管理'">
        运行管理
      </el-checkbox-button>
      <el-checkbox-button :label="'通知公告'">
        通知公告
      </el-checkbox-button>
      <el-checkbox-button :label="'行业动态'">
        行业动态
      </el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>
<style scoped>
.checkbox-container {
  padding-bottom: 1em;
}
el-checkbox-group {
  display: block;
  float: right;
}
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
  name: "news-checkbox",
  computed: {},
  data() {
    return {
      checkedType: ["科研进展", "运行管理", "通知公告", "行业动态"]
    };
  },
  created() {
    this.$store.commit("news/classify", [
      "科研进展",
      "运行管理",
      "通知公告",
      "行业动态"
    ]);
  },
  methods: {
    handleChange(value) {
      // console.log(this.value);
      // console.log(this.checkedType);
      this.$store.commit("news/classify", this.checkedType);
    }
  }
};
</script>

