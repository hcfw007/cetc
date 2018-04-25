<template>
  <div>
    <!-- <div class="home-header">开放共享</div> -->
    <my-container flex="dir:top cross:center main:center" class="home-container">
      <el-row type="flex">
        <el-col :span="6">
          <map-info></map-info>
        </el-col>
        <el-col :span="13">
          <china-map v-bind:province="mapData" class="my-map" />
        </el-col>
        <el-col :span="5" style="align-self:flex-end">
          <right-info></right-info>
        </el-col>
      </el-row>
    </my-container>
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
import { mapState } from "vuex";
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
    ...mapState("map", ["info", "mapData"])
  },
  components: {
    ChinaMap,
    MyContainer,
    MapInfo,
    RightInfo
  },
  methods: {
    handleHove(provinceName) {}
  }
};
</script>

