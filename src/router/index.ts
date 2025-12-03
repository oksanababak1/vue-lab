import { createRouter, createWebHistory } from 'vue-router'
import OnboardingView from '@/views/OnboardingView.vue'
import AuthView from '@/views/AuthView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'onboarding',
      component: OnboardingView,
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
