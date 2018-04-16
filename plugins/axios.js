import axios from "axios";
import Vue from "vue";

var instance = axios.create({
  baseURL: "https://api.example.com"
});

Vue.prototype.$http = instance;
