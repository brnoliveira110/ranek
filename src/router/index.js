import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Produto from "../views/Produto.vue";
import Login from "../views/Login.vue";
import UsuarioView from "../views/usuario/UsuarioView.vue";
import UsuarioProdutos from "../views/usuario/UsuarioProdutos.vue";
import UsuarioCompras from "../views/usuario/UsuarioCompras.vue";
import UsuarioVendas from "../views/usuario/UsuarioVendas.vue";
import UsuarioEditar from "../views/usuario/UsuarioEditar.vue";

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
    component: UsuarioView,
    children: [
      {
        path: "",
        name: "usuario",
        component: UsuarioProdutos,
      },
      {
        path: "compras",
        name: "UsuarioCompras",
        component: UsuarioCompras,
      },
      {
        path: "vendas",
        name: "UsuarioVendas",
        component: UsuarioVendas,
      },
      {
        path: "editar",
        name: "usuario-editar",
        component: UsuarioEditar,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
