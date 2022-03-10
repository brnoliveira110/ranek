import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Produto from "../views/Produto.vue";

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
];

const router = new VueRouter({
  routes,
});

export default router;
