// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/:country', // Dynamic route for country names
    name: 'Country',
    component: () => import('../pages/CountryView.vue'), // Make sure to create this view
    props: true, // Pass route params as props to the component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
