<template >
  <china-map @click="handleClick" v-bind:province="provinceData" />
</template>


<script>
import ChinaMap from "~/components/map";
export default {
  data() {
    return {
      provinceData: [
        {
          name: "西藏",
          value: 3
        },
        {
          name: "北京",
          value: 100
        },
        {
          name: "黑龙江",
          value: 1
        },
        {
          name: "广西",
          value: 10
        },
        {
          name: "台湾",
          value: 20
        },
        {
          name: "海南",
          value: 15
        },
        {
          name: "新疆",
          value: 7
        },
        {
          name: "内蒙古",
          value: 10
        },
        {
          name: "江西",
          value: 12
        },
        {
          name: "湖北",
          value: 27
        }
      ]
    };
  },
  components: { ChinaMap },
  methods: {
    handleClick(provinceName) {
      console.log(provinceName);
    }
  }
};
</script>

<style>

</style>
