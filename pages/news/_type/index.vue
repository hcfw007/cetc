<template>
  <el-row>
    <el-col :span="6">
      <news-side></news-side>
    </el-col>
    <el-col :span="18">
      <div flex="dir:top" v-if="typedArticle">
        <el-card v-for="item in typedArticle" :key="item.title" class="mb-3">
          <div flex="dir:top">
            <span style="color:#bcbcbc"> 内容来自：{{item.author}}</span>
            <h3>{{item.title}}</h3>
            <div flex="main:justify cross:end">
              <span>{{item.description}}</span>
              <el-button type="text" style="padding:0">阅读全文</el-button>
            </div>
            <span style="color:#bcbcbc;font-size:0.8em" class="mt-3">
              <i class="el-icon-view"></i> 浏览：{{item.skim}}次
            </span>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<style>

</style>
<script>
import NewsSide from "~/components/news/side";
export default {
  asyncData({ params, store }) {
    let type = params.type || "科研进展";
    store.commit("news/classify", type);
    return { index: type };
  },
  components: { NewsSide },
  computed: {
    typedArticle() {
      return this.$store.state.news.typedArticle;
    }
  }
};
</script>
