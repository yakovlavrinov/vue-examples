import { createRouter, createWebHistory } from "vue-router";
import { MainPage } from "src/pages/MainPage";

const routes = [{ path: "/", component: MainPage }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
