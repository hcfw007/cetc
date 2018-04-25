<template>
    <el-popover class="pop" placement="left" width="100" trigger="hover">
        <slot slot="reference"></slot>
        <div v-if="tab === '实验室'">
            <div class="py-2" v-for="lab in labList[province]" :key="lab.id">
                <nuxt-link to="#">{{lab.name}}</nuxt-link>
            </div>
        </div>
        <div v-else>
            <div class="py-2" v-for="lab in info[province][tab]" :key="lab.id" flex="main:justify">
                <nuxt-link to="#">{{lab.labName}}</nuxt-link>
                <span>{{lab.number}}</span>
            </div>
        </div>
    </el-popover>
</template>
<style scoped>
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
<script>
import { mapState } from "vuex";
export default {
  name: "map-pop",
  props: ["province"],
  computed: {
    ...mapState("map", ["info", "labList", "tab"])
  }
};
</script>
