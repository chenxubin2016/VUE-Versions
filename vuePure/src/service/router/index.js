import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/components/HelloWorld')
  },
  {
    path: '/myPage',
    component: () => import('@/components/myPage')
  },
  {
    path: '/404',
    component: () => import('@/components/404')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})
