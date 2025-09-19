

import { MainPage } from "src/pages/MainPage";
import { createRouter, createWebHistory } from "vue-router";


const routes = [{ path: "/", component: MainPage }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
