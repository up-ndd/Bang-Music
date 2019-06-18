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
import ColloceDatile from "./pages/ColloceDatile.vue";
import Broadcast from "./pages/Broadcast.vue";
import SirenFM from "./components/SirenFM.vue";
import Meirituijian from "./components/Meirituijian.vue";
import Tuijiangedan from "./components/Tuijiangedan.vue";
import Paihangbang from "./components/Paihangbang.vue";
import SouSuo from "./pages/SouSuo.vue";
import MusicListDesc from "./components/MusicListDesc.vue";

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
      path: "/pages/Like",
      component: Like,
      name: "Like"
    },
    {
      path: "/pages/Colloce",
      component: Colloce,
      name: "Colloce"
    },
    {
      path: "/pages/ColloceDatile",
      component: ColloceDatile,
      name: "ColloceDatile"
    },
    {
      path: "/pages/Songs",
      component: Songs,
      name: "Songs"
    },
    {
      path: "/pages/Broadcast",
      component: Broadcast,
      name: "Broadcast"
    },
    {
      path: "/SirenFM",
      component: SirenFM,
      name: "SirenFM"
    },
    {
      path: "/Meirituijian",
      component: Meirituijian,
      name: "Meirituijian"
    },
    {
      path: "/Tuijiangedan",
      component: Tuijiangedan,
      name: "Tuijiangedan"
    },
    {
      path: "/Paihangbang",
      component: Paihangbang,
      name: "Paihangbang"
    },
    {
      path: "/MusicListDesc",
      component: MusicListDesc,
      name: "MusicListDesc"
    },
    {
      path: "/pages/SouSuo",
      component: SouSuo,
      name: "SouSuo"
    }
  ]
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
