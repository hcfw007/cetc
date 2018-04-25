<template>
  <div>
    <el-dialog title="用户登录" :visible.sync="dialogVisible" width="30em">
      <login-form @login="dialogVisible = false"></login-form>
    </el-dialog>
    <el-button @click="dialogVisible = true" v-if="!isLogin" class="login-btn">登录</el-button>
    <el-popover v-else placement="bottom-end">
      <div flex>
        <div>
          <h3>{{lab.name}}</h3>
          <nuxt-link to="#">d\</nuxt-link>
        </div>
        <img class="pop-img" src="~/static/pop-avatar.svg" style="width:4em;height:4em">

      </div>

      <img slot="reference" src="~/static/pop-avatar.svg" class="pop-img" />
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
.pop-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #efefef;
  box-sizing: border-box;
  padding: 2px;
}
.pop-img:hover {
  cursor: pointer;
  opacity: 0.7;
}
.login-btn {
  background-color: #07222a;
  color: #fff;
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

