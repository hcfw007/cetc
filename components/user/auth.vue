<template>
  <div>
    <el-dialog title="用户登录" :visible.sync="dialogVisible" width="30em">
      <login-form @login="dialogVisible = false"></login-form>
    </el-dialog>
    <el-button @click="dialogVisible = true" v-if="!isLogin">登录</el-button>
    <el-popover v-else placement="bottom-end" width="100">
      <ui class="pop-list">
        <li>我的主页</li>
        <li>修改密码</li>
        <li>用户注销</li>
      </ui>
      <el-button slot="reference" type="text">{{lab.name}}</el-button>
    </el-popover>
  </div>
</template>
<style scoped>
.pop-list {
  list-style-type: none;
  margin: 0;
}
.pop-item {
  padding: 0;
}
</style>

<script>
import loginForm from "~/components/user/loginForm";
import { mapState } from "vuex";
export default {
  name: "auth",
  components: { loginForm },
  data() {
    return {
      dialogVisible: false,
      popVisible: false
    };
  },
  computed: {
    ...mapState("user", ["isLogin", "lab", "accessToken"])
  },
  mounted() {
    this.$store.commit("user/check");
  }
};
</script>

