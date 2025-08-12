import type { ComponentOptions } from "vue"
import { 
  createRouter, 
  createWebHistory, 
  type NavigationGuardNext, 
  type RouteLocationNormalized, 
  type Router, 
  type RouteRecordRaw 
} from "vue-router"
import mainRouter from "./modules/main.router"
import foodRouter from "./modules/food.router"
import historyRouter from "./modules/history.router"
import appointmentRouter from "./modules/appointment.router"

export interface IRouteRedirect {
  name : string
}

export const routes : RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: (): ComponentOptions => import("@/pages/HomePage.vue")
  },
  mainRouter,
  foodRouter,
  historyRouter,
  appointmentRouter
]

export const routerConfig = {
  history: createWebHistory(),
  routes
}

const router: Router = createRouter(routerConfig)

const DEFAULT_TITLE: string = 'Diabetes App'

router.afterEach((to: RouteLocationNormalized): void => {
  document.title = to?.meta?.title ? `${DEFAULT_TITLE} | ${to.meta.title}` : DEFAULT_TITLE
})

router.beforeEach((
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext): void => {
  // const userStore = useAuthStore()
  // const userToken: string = userStore?.userToken.accessToken

  // if (to?.meta?.auth && !userToken) {
  //   router.replace({ name: 'LoginPage' })
  //   return
  // }
  next()
})

export default router

