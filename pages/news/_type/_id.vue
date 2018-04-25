<template>
  <div>
    <!-- <news-header/> -->
    <my-container>
      <!-- ID存在显示详细内容 否则显示全部列表 -->
      <news-list :list="typedArticle" v-if="!NewsID" />
      <div v-else> {{NewsID}}</div>
    </my-container>
  </div>
</template>

<style scoped>

</style>
<script>
import NewsList from "~/components/news/list";
import { MyContainer } from "~/components/layout";
export default {
  asyncData({ params, store }) {
    let type = params.type || "科研进展";
    // 替代性显示方案 实际应该是一个action请求
    store.commit("news/classify", type);
    return { index: type, NewsID: params.id };
  },
  components: { NewsList, MyContainer },
  computed: {
    typedArticle() {
      return this.$store.state.news.typedArticle;
    }
  },
  mounted() {
    console.log(this.$route.params);
  }
};
</script>
