import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../../../pages/MainPage/ui/MainPage.vue";


const routes = [
  { path: "/", component: MainPage },
//   { path: "/user/:id", component: () => import("@/pages/user") }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
