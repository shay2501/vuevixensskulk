import Vue from "vue";
import App from "./App.vue";
import Home from "./views/Home";
import Pets from "./views/Pets";

import vuetify from "@/plugins/vuetify";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/pets",
    component: Pets
  }
];

const router = new VueRouter({ routes });

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
