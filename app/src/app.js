import Vue from "vue";
require('./bootstrap');
// import './assets/css/styles.css';


import router from "./router";
import App from "./App.vue";
import store from "./store";
import vuetify from './plugins/vuetify';
import * as types from "./store/mutation-types";

import "./assets/css/styles.css";


new Vue({
  el: "#app",
  store,
  router,
  vuetify,
  render: h => h(App),
  created() {
    this.$store.commit(types.RESET_LOADING_PROGRESS);
    this.$store.dispatch("getAllCategories");
    this.$store.dispatch("getAllPages");
  }
});