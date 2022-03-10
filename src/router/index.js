import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Produto from "../views/Produto.vue";
import LoginUsuario from "../views/LoginUsuario.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: Produto,
    props: true,
  },

  {
    path: "/login",
    name: "login",
    component: LoginUsuario,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
