<template>
    <div>
        <el-card v-for="item in list" :key="item.id" class="mb-3">
            <div flex="dir:top">
                <span style="color:#bcbcbc"> 内容来自：{{item.author}}</span>
                <h3>{{item.title}}</h3>
                <div flex="main:justify cross:end">
                    <span>{{item.description}}</span>
                    <el-button type="text" style="padding:0" @click="$router.push(`/news/${type}/${item.id}`)">阅读全文</el-button>
                </div>
                <span style="color:#bcbcbc;font-size:0.8em" class="mt-3">
                    <i class="el-icon-view"></i> 浏览：{{item.skim}}次
                </span>
            </div>
        </el-card>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
  name: "news-list",
  props: ["list"],
  computed: {
    type() {
      return this.$route.params.type || "科研进展";
    }
  }
};
</script>
