import Vue from "vue";
import Router from "vue-router";
import LoginScreen from "../components/VendingMachineLogin.vue";
import AdminScreen from "../components/VendingMachineAdmin.vue";
import InventoryScreen from "../components/InventoryView.vue";
// import store from "../store";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "AdminScreen",
    component: AdminScreen
  },
  {
    path: "/login",
    name: "LoginScreen",
    component: LoginScreen
  },
  {
    path: "/inventory",
    name: InventoryScreen,
    component: InventoryScreen
  }
];

const router = new Router({
  routes,
  mode: "history"
});

// create a navigation guard here //

export default router;
