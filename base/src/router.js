import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "*",
    redirect: "/Home"
  },
  {
    name: "user",
    component: () => import("./view/user"),
    meta: {
      title: "个人中心"
    }
  },
  {
    name: "Hot",
    component: () => import("./view/Hot"),
    meta: {
      title: "热播"
    }
  },
  {
    name: "Home",
    component: () => import("./view/Home"),
    meta: {
      title: "商品详情"
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || "/" + (route.name || "");
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export { router };
