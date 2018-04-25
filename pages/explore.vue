<template>
  <div>
    <my-container>
      <!-- ID存在显示详细内容 否则显示全部列表 -->
      <!-- <explore-list :list="typedArticle" v-if="!ExploreID" />
      <div v-else> {{ExploreID}}</div> -->
      <explore-list :list="typedArticle" />
    </my-container>
  </div>
</template>

<style scoped>

</style>
<script>
import ExploreList from "~/components/explore/list";
import { MyContainer } from "~/components/layout";
export default {
  // asyncData({ params, store }) {
  //   let type = params.type;
  //   console.log(params.type);
  //   // console.log("tmp_set=" + tmp_set);
  //   // 替代性显示方案 实际应该是一个action请求
  //   // store.commit("explore/classify", new Set());
  //   // return { index: type, ExploreID: params.id };
  // },
  components: { ExploreList, MyContainer },
  computed: {
    typedArticle() {
      return this.$store.state.explore.typedArticle;
    }
  },
  mounted() {
    console.log(this.$route.params);
  }
};
</script>
