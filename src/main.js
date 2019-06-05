import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Viode from "./components/Viode.vue";
import Personal from "./components/Personal.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
      name: "H"
    },
    {
      path: "/Viode",
      component: Viode,
      name: "V"
    },
    {
      path: "/Personal",
      component: Personal,
      name: "P"
    }
  ]
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
}).$mount("#app");
