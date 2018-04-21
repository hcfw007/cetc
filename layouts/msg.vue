<template>
    <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="16">
            <el-container flex="dir:top" style="min-height:100vh">
                <el-header style="margin-top:1em">
                    <my-header/>
                </el-header>
                <el-main flex-box="1" style="position:relative">
                    <el-row>
                        <el-col :span="6">
                            <msg-side></msg-side>
                        </el-col>
                        <el-col :span="18">
                            <nuxt/>
                        </el-col>
                    </el-row>
                </el-main>
                <my-footer/>
            </el-container>
        </el-col>
    </el-row>
</template>
<style scoped>
body {
  margin: 0;
  padding: 0;
  background-image: url("~/static/bg.jpg");
  background-size: cover;
  background-attachment: fixed;
}
</style>
<script>
import { MsgSide, MyFooter, MyHeader } from "~/components/layout";
export default {
  name: "msg",
  components: { MsgSide, MyFooter, MyHeader }
};
</script>
