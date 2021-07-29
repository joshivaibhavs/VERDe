import { RouteRecordRaw } from 'vue-router';
import Element from './index.vue';

export const elementRoutes: RouteRecordRaw[] = [
  {
    path: 'element/:elementID',
    component: Element,
    name: 'Element',
  },
];
