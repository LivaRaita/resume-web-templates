import Vue from "vue";
import VueRouter from "vue-router";
import ResumeTemplate from "../views/ResumeTemplate.vue";
import ResumeEdit from "../views/ResumeEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ResumeTemplate",
    component: ResumeTemplate
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  { path: "/resume/edit", name: "ResumeEdit", component: ResumeEdit }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
