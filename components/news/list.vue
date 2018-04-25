<template>
    <div class="news-container">
        <div class="button-group-container">
            <el-button-group>
                <el-button :type="isChecked('科研进展')" @click="handleClick('科研进展')">科研进展</el-button>
                <el-button :type="isChecked('运行管理')" @click="handleClick('运行管理')">运行管理</el-button>
                <el-button :type="isChecked('通知公告')" @click="handleClick('通知公告')">通知公告</el-button>
                <el-button :type="isChecked('行业动态')" @click="handleClick('行业动态')">行业动态</el-button>
            </el-button-group>
        </div>
        <el-card v-for=" item in list " :key="item.id " class="mb-3 ">
            <div flex="dir:top ">
                <span style="color:#bcbcbc "> 内容来自：{{item.author}}</span>
                <h3>{{item.title}}</h3>
                <div flex="main:justify cross:end ">
                    <span>{{item.description}}</span>
                    <el-button type="text " style="padding:0 " @click="$router.push(`/news/${type}/${item.id}`) ">阅读全文</el-button>
                </div>
                <span style="color:#bcbcbc;font-size:0.8em " class="mt-3 ">
                    <i class="el-icon-view "></i> 浏览：{{item.skim}}次
                </span>
            </div>
        </el-card>
    </div>
</template>
<style scoped>
.news-container {
  border-radius: 10px;
  border: 2px solid #ffffff;
  background-color: #e7e7e7;
  padding: 4em;
  padding-top: 2em;
  padding-bottom: 2em;
  margin-top: 2em;
}
.button-group-container {
  padding-bottom: 1em;
}
</style>
<script>
export default {
  name: "news-list",
  props: ["list"],
  computed: {
    type() {
      return this.$route.params.type || "科研进展";
    }
  },
  methods: {
    isChecked(value) {
      if (!this.$route.params.type) {
        return value === "科研进展" ? "primary" : "";
      } else {
        return value === this.$route.params.type ? "primary" : "";
      }
    },
    handleClick(value) {
      this.$router.push(`/news/${value}`);
    }
  }
};
</script>
