<template>
  <div >
    <el-radio-group v-model="formType" style="margin-bottom:22px">
      <el-radio-button label="登陆"></el-radio-button>
      <el-radio-button label="注册"></el-radio-button>
    </el-radio-group>
    <login-form v-if="formType==='登陆'"> </login-form>
    <signup-form v-if="formType==='注册'"> </signup-form>
  </div>
</template>
<style scoped>

</style>

<script>
import loginForm from "~/components/user/loginForm";
import signupForm from "~/components/user/signupForm";
export default {
  name: "user-dialog",
  components: { loginForm, signupForm },
  data() {
    return {
      formType: "登陆"
    };
  }
};
</script>

