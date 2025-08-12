import type { ComponentOptions } from 'vue'

export default {
	path: '/appointment',
	name: 'AppointmentPage',
	component: (): ComponentOptions => import('@/pages/appointment/AppointmentPage.vue'),
	children: [
		{
			path: '',
			name: 'AppointmentList',
			component: (): ComponentOptions => import('@/pages/appointment/pages/AppointmentList.vue')
		}
	]
}
