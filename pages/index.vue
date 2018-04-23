<template>
  <div>
    <div class="home-header">开放共享</div>
    <div class="home-nav">
      <el-menu mode="horizontal" default-active="人才队伍" text-color="#bcbcbc" background-color="#24292e" active-text-color="#fff" @select="val=>filter2=val">
        <el-menu-item index="人才队伍">人才队伍</el-menu-item>
        <el-menu-item index="科研任务">科研任务</el-menu-item>
        <el-menu-item index="设备设施">设备设施</el-menu-item>
        <el-menu-item index="科研成果">科研成果</el-menu-item>
      </el-menu>
    </div>
    <my-container>
      <china-map @click="handleClick" v-bind:province="provinceData" class="my-map" />
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
</style>

<script>
import ChinaMap from "~/components/home/map";
import TalentList from "~/components/home/talentList";
import MachineList from "~/components/home/machineList";
import researchList from "~/components/home/researchList";
import { MyContainer } from "~/components/layout";
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
      return this.$store.state.map.mapData[this.filter2];
    },
    popoverInfo() {
      return this.$store.state.map.info;
    }
  },
  components: {
    ChinaMap,
    TalentList,
    MachineList,
    researchList,
    MyContainer
  },
  methods: {
    handleClick(provinceName) {
      this.talentList = this.popoverInfo[provinceName].talentList;
      this.machineList = this.popoverInfo[provinceName].machineList;
      this.researchList = this.popoverInfo[provinceName].researchList;
      this.dialogVisible = true;
    }
  },
  mounted() {
    this.$store.commit("map/init");
  }
};
</script>

