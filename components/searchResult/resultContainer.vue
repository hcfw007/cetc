<template>
  <div class="result-contaienr">
    <el-row>
      <el-col :span="24">
        <h3 class="title">
          搜索
        </h3>
        <h4 class="subtitle">
          按推荐优化搜索
        </h4>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <searchTypeRadioGroup :query="query"></searchTypeRadioGroup>
      </el-col>
      <el-col :span="18">
        <el-input
          class="searchInput"
          placeholder="请输入搜索内容"
          v-model="searchStr">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <span class="result-count">大约{{ typedArticle.length }}项符合<span class="result-count-str" v-once>{{ searchStr }}</span>的查询结果，以下是1-{{ typedArticle.length > 20 ? 20 : typedArticle.length }}项</span>
        <list :list="typedArticle"></list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import searchTypeRadioGroup from './searchTypeRadioGroup'
import list from './list'

export default {
  name: "resultContainer",
  props: ["query"],
  data() {
    return {
      searchStr: "",
    }
  },
  components: {
    searchTypeRadioGroup,
    list,
  },
  beforeMount() {
    this.searchStr = this.query.searchStr
  },
  computed: {
    typedArticle() {
      return this.$store.state.searchResult.typedArticle
    }
  },
}
</script>

<style lang="stylus" scoped>
div.result-contaienr
  border-radius: 10px
  border: 2px solid #ffffff
  background-color: #f1f1f1
  padding: 4em
  padding-top: 2em
  padding-bottom: 2em
  margin-top: 2em
h3.title
  font-size: 26px
  font-weight: bold
  margin-bottom: 5px
h4.subtitle
  font-size: 14px
  margin-top: 5px
.el-input >>> input
  background-color: #e7e7e7
span.result-count
  font-size: 14px
  .result-count-str
    color: #FF9932
</style>
