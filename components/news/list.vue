<template>
  <div class="news-container">
    <news-checkbox></news-checkbox>
    <el-card v-for="item in list" :key="item.id" class="mb-3">
      <div flex="dir:top">
        <span style="color:#bcbcbc"> 内容来自：{{item.author}}</span>
        <h3>{{item.title}}</h3>
        <div flex="main:justify cross:end" ref="contextBox">
          <span>{{item.description}}</span>
          <el-button type="text" style="padding:0" @click="$router.push(`/news/${item.type}/${item.id}`)">阅读全文</el-button>
        </div>
        <span style="color:#bcbcbc;font-size:0.8em" class="mt-3">
          <i class="el-icon-view"></i> 浏览：{{item.skim}}次
        </span>
      </div>
    </el-card>
  </div>
</template>
<style scoped>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: element-icons;
}
.news-container {
  border-radius: 10px;
  border: 2px solid #ffffff;
  background-color: #e7e7e7;
  padding: 4em;
  padding-top: 2em;
  padding-bottom: 2em;
  margin-top: 2em;
}
news-checkbox {
  padding: 0;
  margin-bottom: 2em;
}
</style>
<script>
import NewsCheckbox from "~/components/news/checkbox";
export default {
  name: "news-list",
  props: ["list"],
  components: { NewsCheckbox },
  data() {
    return {
      ifShowContext: false
    };
  },
  computed: {
    expandArticle() {
      return this.$store.state.news.expandArticle;
    }
  }
};
</script>
