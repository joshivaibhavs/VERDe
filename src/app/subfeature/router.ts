import { RouteRecordRaw } from 'vue-router';
import { elementRoutes } from '../element/router';
import Subfeature from './index.vue';

export const subfeatureRoutes: RouteRecordRaw[] = [
  {
    path: 'subfeature/:subfeatureId',
    component: Subfeature,
    name: 'Subfeature',
    children: elementRoutes,
  },
];
