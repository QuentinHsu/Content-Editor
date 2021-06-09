import Vue from 'vue'
import VueRouter from 'vue-router'
import * as ViewRoutes from './routes'

Vue.use(VueRouter)

const routes = []
for (const key in ViewRoutes) {
  if (Object.hasOwnProperty.call(ViewRoutes, key)) {
    const element = ViewRoutes[key];
    routes.push(...element)
  }
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
