import { homeRoutes } from '@/app/home/router';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../app/home/index.vue';

const routes: Array<RouteRecordRaw> = homeRoutes;

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
