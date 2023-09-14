import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/merch',
    name: 'merch',
    component: () => import('../views/MerchView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/',
    name: 'logIn',
    component: () => import('../views/LogInView.vue')
  },
  {
    path: '/single/:id',
    name: 'single',
    props: true,
    component: () => import('../views/SingleItemView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    props: true,
    component: () => import('../views/cartView.vue')
  },
  {
    path: '/editM/:id',
    name: 'editM',
    props: true,
    component: () => import('../views/EditMView.vue'),
  },
  {
    path: '/editU/:id',
    name: 'editU',
    props: true,
    component: () => import('../views/EditUView.vue'),
  },
  {
    path: '/singleU',
    name: 'singleU',
    props: true,
    component: () => import('../views/SingleUserView.vue'),
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../views/OrdersView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
