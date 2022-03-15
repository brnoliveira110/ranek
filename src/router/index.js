import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Produto from "../views/Produto.vue";
import Login from "../views/Login.vue";
import UsuarioView from "../views/usuario/UsuarioView.vue";

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
    component: Login,
  },

  {
    path: "/usuario",
    name: "usuario",
    component: UsuarioView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
