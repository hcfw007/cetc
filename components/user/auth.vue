<template>
  <div>
    <el-dialog title="用户登录" :visible.sync="dialogVisible" width="30em">
      <login-form @login="dialogVisible = false"></login-form>
    </el-dialog>
    <el-button @click="dialogVisible = true" v-if="!isLogin">登录</el-button>
    <el-button v-else type="text">{{lab.name}}</el-button>
  </div>
</template>
<style scoped>

</style>

<script>
import loginForm from "~/components/user/loginForm";
import { mapState } from "vuex";
export default {
  name: "auth",
  components: { loginForm },
  data() {
    return {
      dialogVisible: false
    };
  },
  computed: {
    ...mapState("user", ["isLogin", "lab", "accessToken"])
  }
};
</script>

