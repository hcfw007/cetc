<template>
  <div>
    <my-container>
      <!-- ID存在显示详细内容 否则显示全部列表 -->
      <!-- <news-list :list="typedArticle" v-if="!newsID" />
      <div v-else> {{newsID}}</div> -->
      <news-list :list="typedArticle" />
    </my-container>
  </div>
</template>

<style scoped>

</style>
<script>
import NewsList from "~/components/news/list";
import { MyContainer } from "~/components/layout";
export default {
  // asyncData({ params, store }) {
  //   let type = params.type;
  //   console.log(params.type);
  //   // console.log("tmp_set=" + tmp_set);
  //   // 替代性显示方案 实际应该是一个action请求
  //   // store.commit("news/classify", new Set());
  //   // return { index: type, newsID: params.id };
  // },
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
