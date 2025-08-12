import type { ComponentOptions } from 'vue'

export default {
  path: '/history',
  name: 'HistoryPage',
  component: (): ComponentOptions => import('@/pages/history/HistoryPage.vue'),
  children: [
    {
      path: '',
      name: 'HistoryList',
      component: () : ComponentOptions => import('@/pages/history/pages/HistoryList.vue')
    }
  ]
}