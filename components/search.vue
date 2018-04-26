<template>
  <div>
    <el-input v-popover:pop placeholder="搜索" class="search mr-3" prefix-icon="el-icon-search" v-model="searchStr" />
    <el-popover ref="pop" placement="bottom-end" v-model="popVisible">
      <span v-if="result.length < 1 || !result.length">搜索结果为空</span>
      <div v-for="item in result" :key="item.title">
        <span style="color:#bcbcbc;font-weight:600">{{item.title}}</span>
        <div v-for="each in item.content" :key="each.subTitle" class="item">
          <nuxt-link :to="{path: '/searchResult', query: {searchStr: searchStr, type: item.title}}">
            <h4>{{each.subTitle}}</h4>
            <p>{{each.description}}</p>
          </nuxt-link>
        </div>
      </div>
    </el-popover>
  </div>
</template>
<style>
.search {
  width: 15em;
  background-color: #062129;
}
.search > .el-input__inner {
  background-color: transparent;
  color: #fff;
}
a:link {
  color: #fff;
}
a:visited {
  color: #fff;
}
a:hover {
  color: #b8d9fa;
}
</style>
<script>
import { mapState } from "vuex";
export default {
  name: "my-search",
  data() {
    return {
      searchStr: "",
      popVisible: false
    };
  },
  computed: {
    ...mapState("search", ["result"])
  },
  watch: {
    searchStr: function(str) {
      this.searchSubmit()
    }
  },
  methods: {
    searchSubmit() {
      this.$store.commit("search/submit", this.searchStr);
    }
  }
};
</script>
