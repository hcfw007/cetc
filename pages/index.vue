<template>
  <el-row type="flex" justify="center">
    <el-col :span="20" style="position:relative">
      <china-map @click="handleClick" v-bind:province="provinceData" class="my-map" />
      <div class="filter2" flex>
        <el-radio-group v-model="filter1">
          <el-radio-button label="开放共享"></el-radio-button>
          <el-radio-button label="合作关系"></el-radio-button>
        </el-radio-group>
        <el-tabs v-model="filter2" class="ml-3">
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
  bottom: 0;
  /* transform: translateX(-50%); */
}
</style>

<script>
import ChinaMap from "~/components/home/map";
import MySearch from "~/components/home/search";
export default {
  data() {
    return {
      filter1: "开放共享",
      filter2: "人才"
    };
  },
  computed: {
    provinceData() {
      return this.$store.state.map.mapData;
    }
  },
  components: { ChinaMap, MySearch },
  methods: {
    handleClick(provinceName) {
      console.log(provinceName);
    }
  },
  mounted() {
    this.$store.commit("map/init");
  }
};
</script>

