<template>
  <div>
    <my-container>
      <infoEntityContainer></infoEntityContainer>
    </my-container>
  </div>
</template>

<style scoped>

</style>
<script>
import { MyContainer } from "~/components/layout"
import infoEntityContainer from '~/components/info/infoEntityContainer'
export default {
  data() {
    return {
      type: "",
      searchStr: "",
    }
  },
  components: {
    MyContainer,
    infoEntityContainer,
  },
  mounted() {
  },
};
</script>
