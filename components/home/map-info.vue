<template>
  <div>
    <el-tabs activate-name="实验室" v-model="mapActive" type="border-card" @tab-click="tabClickHandler">
      <el-tab-pane v-for="(item,index) in tabList" :key="index" :label="item" :name="item" class="tab-item">
        <el-popover class="pop" v-for="(each,index0) in mapData" :key="each.id" placement="right" width="70" trigger="hover">
          <div class="pa-3 province-item" slot="reference" flex>
            <span>{{index0+1}}</span>
            <span class="mx-3">{{each.name}}</span>
            <el-progress :percentage="getPersent(each.value)" color="#D02F15" status="exception" class="progress" flex-box="1"></el-progress>
            <span>{{each.value}}</span>
          </div>
          <div v-if="item === '实验室'">
            <div class="py-2" v-for="lab in labList[each.name]" :key="lab.id">
              <nuxt-link to="#" class="title">{{lab.name}}</nuxt-link>
            </div>
          </div>
          <div v-else>
            <div class="py-2 pr-2" v-for="lab in info[each.name][item]" :key="lab.id" flex="main:justify">
              <nuxt-link to="#" class="title">{{lab.labName}}</nuxt-link>
              <span>{{lab.number}}</span>
            </div>
          </div>
        </el-popover>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped>
.title {
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dark-card {
  border-top: 0;
}
.tab-item {
  max-height: 55vh;
  overflow: scroll;
}
.province-item:hover {
  background-color: #0d485f;
  margin: -1em, 0;
}
a {
  text-decoration-line: none;
}
a:link {
  color: #fff;
}
a:visited {
  color: #fff;
}
a:hover {
  color: #8bc5ff;
}
</style>
<style>
.el-popover {
  background-color: rgba(6, 8, 19, 0.9);
  color: #fff;
}
.el-progress-bar__outer {
  background-color: transparent;
}
.el-tabs--border-card > .el-tabs__header {
  background-color: #0d485f;
  border-bottom: 0;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: #fff;
  background-color: #060813;
  border: 0;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item {
  color: #fff;
}
.el-tabs--border-card {
  background-color: #060813;
  color: #fff;
}
.el-tabs--border-card > .el-tabs__content {
  padding: 0;
}
</style>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "mapInfo",
  beforeCreate() {
    this.$store.commit("map/onShow", "实验室");
  },
  data() {
    return {
      mapActive: "实验室",
      tabList: ["实验室", "人才", "科研", "设备"]
    };
  },
  computed: {
    ...mapState("map", ["mapData", "info", "labList"]),
    ...mapGetters("map", ["maxMapData", "minMapData"])
  },
  methods: {
    tabClickHandler({ name }) {
      this.$store.commit("map/onShow", name);
    },
    getPersent(num) {
      return Math.floor(100 * num / this.maxMapData);
    }
  }
};
</script>
