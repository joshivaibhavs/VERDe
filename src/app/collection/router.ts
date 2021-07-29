import { RouteRecordRaw } from 'vue-router';
import { featureRoutes } from '../feature/router';
import Collection from './index.vue';

export const collectionRoutes: RouteRecordRaw[] = [
  {
    path: 'collection/:collectionId',
    component: Collection,
    name: 'Collection',
    children: featureRoutes,
  },
];
