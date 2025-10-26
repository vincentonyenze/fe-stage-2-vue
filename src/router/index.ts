import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: () => import('@/views/LandingPage.vue'),
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/auth/signup',
      name: 'Signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/DashboardPage.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/tickets',
      name: 'Tickets',
      component: () => import('@/views/TicketsPage.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

// Navigation guard for protected routes
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/auth/login')
  } else {
    next()
  }
})

export default router
