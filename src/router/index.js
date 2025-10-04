import { createRouter, createWebHistory } from 'vue-router'

const GreetingView = () => import('@/views/GreetingView.vue')
const HomepageView = () => import('@/views/HomepageView.vue')
const AuthView = () => import('@/layouts/AuthView.vue')

const routes = [
  { path: '/', component: GreetingView },
  { path: '/map', component: HomepageView },
  { path: '/auth', component: AuthView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
