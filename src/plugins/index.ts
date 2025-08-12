import router from "@/routers"
import type { App } from "vue"
import dayjs from "./Dayjs.plugin"
import pinia from "./Pinia.plugin"

export default function registerPlugins(app : App<Element>): App<Element> {
  return app
  .use(router)
  .use(pinia)
  .use(dayjs)
}