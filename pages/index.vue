<template>
  <div>
    <!-- <div class="home-header">开放共享</div> -->
    <my-container flex="dir:top cross:center main:center" class="home-container">
      <el-row type="flex">
        <el-col :span="6">
          <map-info></map-info>
        </el-col>
        <el-col :span="13">
          <china-map @hover="handlehover" v-bind:province="provinceData" class="my-map" />
        </el-col>
        <el-col :span="5" style="align-self:flex-end">
          <right-info></right-info>
        </el-col>
      </el-row>
    </my-container>
    <el-dialog :visible.sync="dialogVisible">
      <!-- 暂时性显示方案 -->
      <talent-list v-if="filter2 === '人才队伍'" :list="talentList"></talent-list>
      <machine-list v-if="filter2 === '设备设施'" :list="machineList"></machine-list>
      <research-list v-if="filter2 === '科研成果'" :list="researchList"></research-list>
    </el-dialog>
  </div>
</template>


<style scoped>
.filter1 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.filter2 {
  position: absolute;
  left: 0;
  bottom: 0;
  /* transform: translateX(-50%); */
}
.home-header {
  background-color: #24292e;
  color: #fff;
  font-weight: 400;
  font-size: 1.2em;
  padding: 1em;
  padding-bottom: 0;
}
.home-nav {
  margin-bottom: 2em;
}
.home-container {
  flex-wrap: nowrap;
  min-height: calc(100vh - 8em);
}
</style>

<script>
import ChinaMap from "~/components/home/map";
import MapInfo from "~/components/home/map-info";
import RightInfo from "~/components/home/right-info";
import { MyContainer } from "~/components/layout";
importy
export default {
  data() {
    return {
      filter2: "人才队伍",
      dialogVisible: false,
      talentList: [],
      machineList: [],
      researchList: []
    };
  },
  computed: {
    provinceData() {
      return this.$store.state.map.mapData;
    },
    popoverInfo() {
      return this.$store.state.map.info;
    }
  },
  components: {
    ChinaMap,
    MyContainer,
    MapInfo,
    RightInfo
  },
  methods: {
    handleClick(provinceName) {
      this.talentList = this.popoverInfo[provinceName].talentList;
      this.machineList = this.popoverInfo[provinceName].machineList;
      this.researchList = this.popoverInfo[provinceName].researchList;
      this.dialogVisible = true;
    }
  }
};
</script>

