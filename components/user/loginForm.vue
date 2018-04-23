<template>
  <el-form :model="form">
    <el-form-item>
      <el-input v-model="form.username" placeholder="用户名"> </el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="form.password" placeholder="密码"> </el-input>
    </el-form-item>
    <span style="color:#bcbcbc" class="mb-1">实验室管理员
      <nuxt-link to="#">注册</nuxt-link>
    </span>
    <el-button type="primary" @click="onSubmit" style="width:100%">登陆</el-button>
  </el-form>
</template>
<style scoped>

</style>
<script>
export default {
  name: "login-form",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.user.isLogin;
    }
  },
  methods: {
    onSubmit() {
      this.$store.commit("user/login", this.form);
      this.isLogin && this.$emit("login");
    }
  }
};
</script>
