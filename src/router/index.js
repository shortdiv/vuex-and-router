import Vue from "vue";
import Router from "vue-router";
import LoginScreen from "../components/VendingMachineLogin.vue";
import store from "../store";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "AdminScreen",
    component: () =>
      import(
        /* webpackChunkName: "admin" */ "../components/VendingMachineAdmin.vue"
      ),
    meta: {
      authRequired: true
    }
  },
  {
    path: "/login",
    name: "LoginScreen",
    component: LoginScreen
  },
  {
    path: "/inventory",
    name: "InventoryScreen",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../components/InventoryView.vue"),
    meta: {
      authRequired: true
    }
  }
];

const router = new Router({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some(route => route.meta.authRequired);
  if (!authRequired) return next();
  if (store.getters["isLoggedIn"]) {
    next();
  } else {
    next("/login");
  }
});

export default router;
