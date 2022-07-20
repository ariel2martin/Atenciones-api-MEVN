import Vue from "vue";
import VueRouter from "vue-router";



Vue.use(VueRouter);
//nombre igual que el path
const routes = [

  {
    path: "/graficodinamico",
    name: "graficodinamico",
    component: () =>
      import(/* webpackChunkName: "datos"*/ "./views/ej-nada.vue"),
  },
  {
    path: "/",
    name: "graficodinamico",
    component: () =>
      import(/* webpackChunkName: "datos"*/ "./views/ej-nada.vue"),
  }, {
    path: "/relays",
    name: "relays",
    component: () =>
      import(/* webpackChunkName: "datos"*/ "./views/ej-nada.vue"),
  }, {
    path: "/tabla",
    name: "tabla",
    component: () =>
      import(/* webpackChunkName: "datos"*/ "./views/ej-nada.vue"),
  }, {
    path: "/asign",
    name: "asign",
    component: () =>
      import(/* webpackChunkName: "datos"*/ "./views/ej-nada.vue"),
  }, {
    path: "/peer",
    name: "peer",
    component: () =>
      import(/* webpackChunkName: "datos"*/ "./views/ej-nada.vue"),
  }, {
    path: "/sorteo",
    name: "sorteo",
    component: () =>
      import(/* webpackChunkName: "datos"*/ "./views/ej-nada.vue"),
  },];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
