import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Video from "./components/Video.vue";
import Personal from "./components/Personal.vue";
import playmusic from "./components/playmusic.vue";
import Like from "./pages/Like.vue";
import Songs from "./pages/Songs.vue";
import Colloce from "./pages/Colloce.vue";
import Broadcast from "./pages/Broadcast.vue";
Vue.use(VueRouter);
Vue.use(Vant);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home"
    },
    {
      path: "/Video",
      component: Video,
      name: "Video"
    },
    {
      path: "/Personal",
      component: Personal,
      name: "Personal"
    },
    {
      path: "/playmusic",
      component: playmusic,
      name: "playmusic"
    },
    {
      path: "./pages/Like.vue",
      component: Like,
      name: "Like"
    },
    {
      path: "./pages/Colloce.vue",
      component: Colloce,
      name: "Colloce"
    },
    {
      path: "./pages/Songs.vue",
      component: Songs,
      name: "Songs"
    },
    {
      path: "./pages/Broadcast.vue",
      component: Broadcast,
      name: "Broadcast"
    }
  ]
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
}).$mount("#app");
