<template>
    <div>
        <explore-header/>
        <my-container>
            <!-- ID存在显示详细内容 否则显示全部列表 -->
            <explore-list :list="typedArticle" v-if="!ExploreID" />
            <div v-else> {{ExploreID}}</div>
        </my-container>
    </div>
</template>

<style scoped>

</style>
<script>
import ExploreHeader from "~/components/explore/header";
import ExploreList from "~/components/explore/list";
import { MyContainer } from "~/components/layout";
export default {
  asyncData({ params, store }) {
    let type = params.type || "人才队伍";
    // 替代性显示方案 实际应该是一个action请求
    store.commit("explore/classify", type);
    return { index: type, ExploreID: params.id };
  },
  components: { ExploreHeader, ExploreList, MyContainer },
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
