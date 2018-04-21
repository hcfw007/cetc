<template>
  <el-form :model="form">
    <el-form-item>
      <el-input v-model="form.username" placeholder="用户名"> </el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="form.password" placeholder="密码"> </el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="form.checkPassword" placeholder="确认密码"> </el-input>
    </el-form-item>
    <el-button type="primary" @click="onSubmit">注册</el-button>
  </el-form>
</template>
<style scoped>

</style>
<script>
export default {
  name: "signup-form",
  data() {
    return {
      form: {
        username: "",
        password: "",
        checkPassword: ""
      }
    };
  },
  methods: {
    onSubmit() {
      return false;
    }
  }
};
</script>
