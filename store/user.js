import Vue from "vue";
export const state = () => ({
  isLogin: false,
  username: "test",
  password: "test",
  assessToken: "3k6jw9FqFeNQZSYW9QLBQJ5J",
  lab: {
    name: "北京某实验室"
  }
});

export const mutations = {
  login(state, { username, password }) {
    if (username === state.username && password === state.password) {
      state.isLogin = true;
      Vue.cookie.set("accessToken", state.assessToken);
    }
  },
  logout(state) {
    Vue.cookie.delete("accessToken");
    state.isLogin = false;
  },
  check(state) {
    if (Vue.cookie.get("accessToken") === state.assessToken) {
      state.isLogin = true;
    } else {
      Vue.cookie.delete("accessToken");
      state.isLogin = false;
    }
  }
};

export const getter = {
  getInfo(state) {
    let token = Vue.cookie.get("accessToken");
    if (token === state.assessToken) {
      return state.lab;
    } else {
      state.isLogin = false;
      Vue.cookie.delete("accessToken");
      return;
    }
  }
};
