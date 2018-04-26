<template>
  <div class="search-type-radio-group-container">
    <el-radio-group v-model="searchType" @change="emmitChange(searchType)">
      <el-radio-button v-for="item in searchTypes" :label="item" :key="item">
        {{ item }}
      </el-radio-button>
    </el-radio-group>
  </div>
</template>
<style lang="stylus" scoped>
.radio-container
  padding-bottom: 1em
.el-radio-group
  display: block
label.el-radio-button
  display: block
.el-radio-button >>>
  span.el-radio-button__inner
    border: none
    box-shadow: none
    background-color: transparent
    font-size: 16px
    font-weight: bold
    padding: 12px 0px
  .el-radio-button__orig-radio:checked+.el-radio-button__inner
    color: #409EFF
.home-header
  background-color: #24292e
  color: #fff
  font-weight: 400
  font-size: 1.2em
  padding: 1em
.home-nav
  margin-bottom: 2em
</style>
<script>
export default {
  name: "searchTypeRadioGroup",
  data() {
    return {
      searchType: "",
    }
  },
  props: {
    searchTypes: {
      type: Array,
      default: () => {
        return ["人才队伍", "科研任务", "科研成果", "设备设施"]
      }
    },
    query: {
      type: Object
    },
  },
  beforeMount() {
    let type = this.query.type
    if (type == "实验室") type = "设备设施"
    this.$store.commit("searchResult/classify", type)
    this.searchType = type
  },
  methods: {
    emmitChange(value) {
      this.$store.commit("searchResult/classify", value)
    }
  }
};
</script>
