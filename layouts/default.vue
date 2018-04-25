<template>
  <el-container flex="dir:top main:justify" style="min-height:100vh;max-width:100vw;overflow-x:hidden">
    <el-header style="background:#07212A;">
      <my-header/>
    </el-header>
    <el-main style="padding:0">
      <nuxt/>
    </el-main>
    <el-footer>
      <my-footer/>
    </el-footer>
  </el-container>

</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-image: url("~/static/bg.jpg");
  background-size: cover;
  background-attachment: fixed;
}
a {
  text-decoration-line: none;
}
a:link {
  color: #409eff;
}
a:visited {
  color: #409eff;
}
a:hover {
  color: #98cbff;
}
</style>
<script>
import { MyHeader, MyFooter } from "~/components/layout";
export default {
  components: { MyHeader, MyFooter }
};
</script>
