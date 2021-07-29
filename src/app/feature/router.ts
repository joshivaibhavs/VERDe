import { RouteRecordRaw } from 'vue-router';
import { subfeatureRoutes } from '../subfeature/router';
import Feature from './index.vue';

export const featureRoutes: RouteRecordRaw[] = [
  {
    path: 'feature/:featureId',
    component: Feature,
    name: 'Feature',
    children: subfeatureRoutes,
  },
];
