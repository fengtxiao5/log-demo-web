import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/log/todo/todoList',
    name: 'todoList',
    component: () => import('@src/views/todo/todoList'),
  },
  {
    path: '/log/todo/finishStatistic',
    name: 'statistic',
    component: () => import('@src/views/todo/finishStatistic.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
