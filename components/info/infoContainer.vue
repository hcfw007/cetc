<template>
  <div class="result-contaienr">
    <el-row>
      <el-col :span="24">
        <h3 class="title">
          信息采集
        </h3>
        <h4 class="subtitle">
          点击Tab以录入对应信息
        </h4>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <infoTypeRadioGroup></infoTypeRadioGroup>
      </el-col>
      <el-col :span="18">
        <div class="input-group" v-for="(item, index) in infos" v-bind:key="index">
          <span class="input-title">
            {{ item.title }}：
          </span>
          <input :type="item.type ? item.type : 'text'" placeholder="内容" class="info-input">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import infoTypeRadioGroup from './infoTypeRadioGroup'

export default {
  name: "infoContainer",
  data() {
    return {
      searchStr: "",
      infos: [
        {
          title: "表单Title",
          type: "text",
        },
        {
          title: "表单Title",
          type: "text",
        },
        {
          title: "表单Title",
          type: "text",
        },
        {
          title: "表单Title",
          type: "text",
        },
        {
          title: "表单Title",
          type: "text",
        },
        {
          title: "表单Title",
          type: "text",
        },
      ]
    }
  },
  components: {
    infoTypeRadioGroup,
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
span.input-title
  font-size: 16px
  display: block
  font-weight: bold
input.info-input
  width: 100%
  background-color: #BABABB
  color: white
  border: none
  box-shadow: none
  font-size: 16px
  margin-bottom: 15px
  margin-top: 10px
  height: 25px
</style>
