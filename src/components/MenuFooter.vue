<template>
	<div class="fixed bottom-0 left-0 right-0 mx-auto bg-white border-t border-gray-200 w-full">
		<div
			class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl active:scale-95 cursor-pointer z-10">
			<Icon
				icon="lucide:plus"
				class="text-[24px] transition-transform duration-300" />
		</div>

		<div class="flex justify-between items-center align-center h-[70px] px-6 relative">
			<div class="flex space-x-7">
				<router-link
					:to="item.to"
					:class="isActive(item.to.name) ? 'text-sky-500 scale-105' : 'text-gray-400 hover:text-sky-500 hover:scale-105'"
					class="flex flex-col items-center text-gray-400 hover:text-sky-500 transition-all duration-300 transform"
					v-for="(item, i) in menu.slice(0, 2)"
					:key="`left-${i}`">
					<Icon
						:icon="item.icon"
						class="text-[24px]" />
					<p class="text-[12px]">
						{{ item.name }}
					</p>
				</router-link>
			</div>
			<div class="flex space-x-7">
				<router-link
					:to="item.to"
					:class="isActive(item.to.name) ? 'text-sky-500 scale-105' : 'text-gray-400 hover:text-sky-500 hover:scale-105'"
					class="flex flex-col items-center text-gray-400 hover:text-sky-500 transition-all duration-300 transform"
					v-for="(item, i) in menu.slice(2)"
					:key="`right-${i}`">
					<Icon
						:icon="item.icon"
						class="text-[24px]" />
					<p class="text-[12px]">
						{{ item.name }}
					</p>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'

import type { IMenu } from '@/models/global'
import { useRoute } from 'vue-router'

const route = useRoute()

const menu = ref<IMenu[]>([
	{ name: 'หน้าแรก', to: { name: 'MainList' }, icon: 'lucide:house' },
	{ name: 'นัดหมาย', to: { name: 'AppointmentList' }, icon: 'lucide:calendar' },
	{ name: 'อาหาร', to: { name: 'FoodList' }, icon: 'lucide:utensils' },
	{ name: 'ประวัติ', to: { name: 'HistoryList' }, icon: 'lucide:chart-column-increasing' }
])

const isActive = computed(() => (routeName: string): boolean => {
	return route.name === routeName
})
</script>

<style scoped></style>
