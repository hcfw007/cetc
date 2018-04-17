<template>
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="16">
      <el-container flex="dir:top box:justify" style="height:100vh">
        <el-header style="margin-top:3em">
          <my-header></my-header>
        </el-header>
        <el-main style="overflow:hidden">
          <el-row>
            <el-col :xs="8" :sm="8" :md="8" :lg="6" :xl="6">
              <index-side></index-side>
            </el-col>
            <el-col :xs="16" :sm="16" :md="16" :lg="18" :xl="18">
              <nuxt/>
            </el-col>
          </el-row>
          </el-main>
          <my-footer/>
        </el-container>
      </el-col>
    </el-row>
</template>

<style>
body {
  background-image: url("~/static/bg.jpg");
  background-size: cover;
  background-attachment: fixed;
}
</style>
<script>
import { MyHeader, IndexSide, MyFooter } from "~/components/layout";
export default {
  components: { MyHeader, IndexSide, MyFooter }
};
</script>
