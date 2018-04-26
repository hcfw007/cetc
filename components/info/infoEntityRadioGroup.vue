<template>
  <div class="search-type-radio-group-container">
    <el-radio-group v-model="infoEntitiy">
      <el-radio-button v-for="(item, index) in infoEntities" :label="item" :key="index">
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
  padding-left: 10px
label.el-radio-button
  display: block
.el-radio-button >>>
  display: block
  width: 33%
  float: left
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
  name: "infoEntityRadioGroup",
  data() {
    return {
      infoEntitiy: "xxx实验室1",
    }
  },
  props: {
    infoEntities: {
      type: Array,
      default: () => {
        return ["xxx实验室1", "xxx实验室2", "xxx实验室3", "xxx实验室4", "xxx实验室5", "xxx实验室6", "xxx实验室7", "xxx实验室8", "xxx实验室9", "xxx实验室10", "xxx实验室11", "xxx实验室12", "xxx实验室13", "xxx实验室14", "xxx实验室15", "xxx实验室16", "xxx实验室17", "xxx实验室18", "xxx实验室19", "xxx实验室20", "xxx实验室21"]
      }
    }
  },
  beforeMount() {
  },
  methods: {
  }
};
</script>
