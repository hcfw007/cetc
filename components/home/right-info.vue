<template>
    <div class="dark-tab" flex>
        <div flex="dir:top " class="dark-tab-header">
            <div v-for="item in header" :key="item.index" class="dark-tab-item" :class="{'active':item.index === act}" @click="act = item.index">{{item.title}}</div>
        </div>
        <div class="dark-tab-body">
            <div v-for="(item,index) in info[act]" :key="item.id" flex class="my-3">
                <div class="line-index mr-1">{{index+1}}</div>
                <nuxt-link to="#">{{item.title}} {{item.value}}</nuxt-link>
                <img style="width:1em;height:1em" src="~/static/up.svg" v-if="item.arrow === 'up'">
                <img style="width:1em;height:1em" src="~/static/down.svg" v-else>
            </div>
        </div>
    </div>
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
.tab-item {
  max-height: 55vh;
  overflow: scroll;
}
.dark-tab-item {
  font-size: 1em;
  width: 1em;
  line-height: 1em;
  white-space: unset;
  padding: 0 1em;
  padding: 0.5em;
  transition-duration: 0.5s;
}

.dark-tab-item.active {
  background-color: #060813;
}

.dark-tab-item:hover {
  color: #409eff;
  cursor: pointer;
}
.dark-tab {
  background-color: #060813;
  border: 1px solid #fff;
  color: #fff;
  max-height: 20em;
}
.dark-tab-header {
  background-color: #0d485f;
  width: 2em;
}
.dark-tab-body {
  overflow: scroll;
  padding: 1em;
  text-overflow: ellipsis;
  overflow-x: hidden;
}
.line-index {
  display: inline-block;
  vertical-align: top;
  line-height: 1.1em;
  min-width: 1.1em;
  height: 1.1em;
  padding: 0.1em;
  background-color: #d02f15;
  color: #fff;
  text-align: center;
}
</style>
<script>
export default {
  name: "rightInfo",
  data() {
    return {
      act: "item1",
      header: [
        {
          title: "新闻热点",
          index: "item1"
        },
        {
          title: "新闻热点",
          index: "item2"
        },
        {
          title: "新闻热点",
          index: "item3"
        },
        {
          title: "新闻热点",
          index: "item4"
        }
      ]
    };
  },
  computed: {
    info() {
      return this.$store.state.map.rightInfo;
    }
  }
};
</script>
