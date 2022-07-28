import Vue from "vue";
import VueRouter from "vue-router";



Vue.use(VueRouter);
//nombre igual que el path
const routes = [


  {

    path: "/atenciones",
    name: "atenciones",
    component: () =>
      import(/* webpackChunkName: "datos"*/ "./views/e-formulario.vue"),
  }, {
    path: "/",
    name: "atenciones",
    component: () =>
      import(/* webpackChunkName: "datos"*/ "./views/e-formulario.vue"),
  }, {
    path: "/abm",
    name: "abm",
    component: () =>
      import(/* webpackChunkName: "datos"*/ "./views/e-abm.vue"),
  },];

const router = new VueRouter({
  mode: "history",
  base: './',
  routes,
});

export default router;
