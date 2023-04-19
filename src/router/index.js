import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import JobView from '../views/JobView.vue';
import JobDetails from '../views/JobDetails.vue';
import NotFound from '../views/NotFound.vue';
import MusicHome from '../views/Music/MusicHome.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/popular',
      name: 'popular',
      component: AboutView
    },
    {
      path: '/playlist',
      name: 'playlist',
      component: JobView
    },
    {
      path: '/jobs/:id',
      name: 'jobdetails',
      component: JobDetails,
      props: true
    },
    {
      path:'/music',
      name:'music',
      component:MusicHome,
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound
    },
  ]
})

export default router
