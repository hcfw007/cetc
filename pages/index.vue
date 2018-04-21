<template>
  <el-row type="flex" justify="center" style="position:relative">
    <el-col :span="20">
      <china-map @click="handleClick" v-bind:province="provinceData" class="my-map" />
      <div class="filter2" flex="dir:top">
        <span style="color:#555;font-weight:500;font-size:1.2em">开放共享</span>
        <el-tabs v-model="filter2">
          <el-tab-pane name="人才">
            <span slot="label">
              <i class="el-icon-date"></i> 人才
            </span>
          </el-tab-pane>
          <el-tab-pane name="科研">
            <span slot="label">
              <i class="el-icon-date"></i> 科研
            </span>
          </el-tab-pane>
          <el-tab-pane name="设备">
            <span slot="label">
              <i class="el-icon-date"></i> 设备
            </span>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-col>
    <el-dialog :visible.sync="dialogVisible">
      <talent-list v-if="filter2 === '人才'" :list="talentList"></talent-list>
      <machine-list v-if="filter2 === '设备'" :list="machineList"></machine-list>
      <research-list v-if="filter2 === '科研'" :list="researchList"></research-list>
    </el-dialog>
  </el-row>
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
</style>

<script>
import ChinaMap from "~/components/home/map";
import MySearch from "~/components/home/search";
import TalentList from "~/components/home/talentList";
import MachineList from "~/components/home/machineList";
import researchList from "~/components/home/researchList";
export default {
  data() {
    return {
      filter1: "开放共享",
      filter2: "人才",
      dialogVisible: false,
      talentList: []
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
  components: { ChinaMap, MySearch, TalentList, MachineList, researchList },
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

