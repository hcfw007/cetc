<template>
  <div class="explore-container" flex="dir:top">
    <explore-checkbox flex="dir:top"></explore-checkbox>
    <el-card v-for="item in list" :key="item.id" class="mb-3">
      <div flex="dir:top">
        <span style="color:#bcbcbc"> 内容来自：{{item.author}}</span>
        <h3>{{item.title}}</h3>
        <div flex="main:justify cross:end" ref="contextBox">
          <span v-show="!expandArticle[item.id]">{{item.description}}</span>
          <el-button type="text" style="padding:0" @click="$store.commit('explore/expandToggle',item.id)" v-show="!expandArticle[item.id]">阅读全文</el-button>
          <pre v-if="expandArticle[item.id]">{{item.content}}</pre>
        </div>
        <el-button type="text" style="padding:0;align-self:flex-end;" @click="$store.commit('explore/expandToggle',item.id)" v-if="expandArticle[item.id]">收起</el-button>
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
.explore-container {
  border-radius: 10px;
  border: 2px solid #ffffff;
  background-color: #e7e7e7;
  padding: 4em;
  padding-top: 2em;
  padding-bottom: 2em;
  margin-top: 2em;
}
explore-checkbox {
  padding: 0;
  margin-bottom: 2em;
}
</style>
<script>
import ExploreCheckbox from "~/components/explore/checkbox";
export default {
  name: "explore-list",
  props: ["list"],
  components: { ExploreCheckbox },
  data() {
    return {
      ifShowContext: false
    };
  },
  computed: {
    expandArticle() {
      return this.$store.state.explore.expandArticle;
    }
  }
};
</script>
