<template>
  <div>
    <my-container>
      <infoContainer></infoContainer>
    </my-container>
  </div>
</template>

<style scoped>

</style>
<script>
import { MyContainer } from "~/components/layout"
import infoContainer from '~/components/info/infoContainer'
export default {
  data() {
    return {
      type: "",
      searchStr: "",
    }
  },
  components: {
    MyContainer,
    infoContainer,
  },
  mounted() {
  },
};
</script>
