import { RouteRecordRaw } from 'vue-router';
import { collectionRoutes } from '../collection/router';
import Home from './index.vue';

export const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    children: collectionRoutes,
  },
];
