<template>
  <div>
    <my-container>
      <resultContainer :query="query"></resultContainer>
    </my-container>
  </div>
</template>

<style scoped>

</style>
<script>
import { MyContainer } from "~/components/layout"
import resultContainer from "~/components/searchResult/resultContainer"

export default {
  async asyncData ({query}) {
    return {
      query: query,
    }
  },
  data() {
    return {
      type: "",
      searchStr: "",
    }
  },
  components: {
    MyContainer,
    resultContainer,
  },
  mounted() {
    this.type = this.query.type == "实验室" ? "设备设施" : this.query.type
    this.searchStr = this.query.searchStr
  },
};
</script>
