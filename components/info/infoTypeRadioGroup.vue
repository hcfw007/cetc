<template>
  <div class="search-type-radio-group-container">
    <el-radio-group v-model="infoType">
      <el-radio-button v-for="item in infoTypes" :label="item" :key="item">
        {{ item }}
         <img src="~/static/caret-right.svg" class="active-img" v-if="infoType == item">
      </el-radio-button>
    </el-radio-group>
  </div>
</template>
<style lang="stylus" scoped>
.radio-container
  padding-bottom: 1em
.el-radio-group
  display: block
  border-left: solid 3px #409eff
  padding-left: 10px
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
.active-img
  position:relative
  top: 2px
</style>
<script>
export default {
  name: "infoTypeRadioGroup",
  data() {
    return {
      infoType: "科研成果",
    }
  },
  props: {
    infoTypes: {
      type: Array,
      default: () => {
        return ["基本信息", "科研任务", "科研成果", "科研队伍", "资源共享", "学术交流", "我的合作"]
      }
    }
  },
  beforeMount() {
  },
  methods: {
  }
};
</script>
