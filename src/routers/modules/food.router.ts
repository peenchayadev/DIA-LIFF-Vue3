import type { ComponentOptions } from 'vue'

export default {
  path: '/food',
  name: 'FoodPage',
  component: (): ComponentOptions => import('@/pages/food/FoodPage.vue'),
  children: [
    {
      path: '',
      name: 'FoodList',
      component: () : ComponentOptions => import('@/pages/food/pages/FoodList.vue')
    }
  ]
}