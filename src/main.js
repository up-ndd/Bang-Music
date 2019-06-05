import Vue from "vue";
import Vant from 'vant';
import 'vant/lib/index.css';
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Video from "./components/Video.vue";
import Personal from "./components/Personal.vue";

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
        }
    ]
});

new Vue({
    el: "#app",
    router,
    render: h => h(App)
}).$mount("#app");
