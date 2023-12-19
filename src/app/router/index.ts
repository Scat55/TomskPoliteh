import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import FormsPage from '@/pages/FormsPage.vue';
import RegPage from '@/pages/RegPage.vue';
import Create from '@/pages/CreateFormPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/forms',
      name: 'forms',
      component: FormsPage
    },
    {
      path: '/reg',
      name: 'reg',
      component: RegPage
    },
    {
      path: '/addForm',
      name: 'addForm',
      component: Create
    }
  ]
});

export default router;
