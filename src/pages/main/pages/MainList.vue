<template>
	<div class="main-list-container">
		<div class="mb-[16px] flex items-center align-center">
			<div class="w-[72px] h-[72px] rounded-full bg-white overflow-hidden">
				<img
					:src="authStore.user.imageUrl || ''"
					alt="profile-line"
					class="w-full h-full object-cover" />
			</div>
			<div class="ml-[16px] text-[20px]">
				สวัสดีคุณ {{ authStore.user.displayName || '' }}
			</div>
		</div>
		<TodaySummaryCard :item="items" />
		<div class="w-full my-[16px]">
			<div>
				บันทึกวันนี้
			</div>
			<div class="bg-white rounded-[16px] shadow-sm p-[16px]">
				sss
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { AuthStore } from '@/stores/Auth'
import GlucoseProvider from '@/resources/providers/Glucose.provider'
import TodaySummaryCard from '@/pages/main/components/TodaySummaryCard.vue'
import { useLoadingStore } from '@/stores/Loading'
import type { IGlucoseSummaryResponse } from '@/models/Response/GlucoseResponse.model'

const authStore = AuthStore()
const loadingStore = useLoadingStore()

const GlucoseService = new GlucoseProvider()

const items = ref<IGlucoseSummaryResponse>({
	average: null,
	maximum: null,
	minimum: null,
	date: '',
	measurementCount: null,
	latestLevel: {
		recordedAt: '',
		status: '',
		value: 0
	}
})

async function onFetchTodaySummary(): Promise<void> {
	try {
		loadingStore.addLoading()
		
		const [res] = await Promise.all([
			GlucoseService.getTodaySummary(),
			new Promise(resolve => setTimeout(resolve, 500))
		])
		
		items.value = res.data
	} catch (error) {
		console.error(error)
	} finally {
		setTimeout(() => {
			loadingStore.removeLoading()
		}, 100)
	}
}

onMounted((): void => {
	onFetchTodaySummary()
})
</script>

<style scoped>
.main-list-container {
	animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

@keyframes fadeInUp {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

/* Smooth transitions for all child elements */
.main-list-container > * {
	transition: all 0.3s ease-out;
}

/* Profile section animation */
.main-list-container > div:first-child {
	animation-delay: 0.1s;
	animation-fill-mode: both;
}

/* Summary card animation */
.main-list-container > div:nth-child(2) {
	animation-delay: 0.2s;
	animation-fill-mode: both;
}

/* Menu section animation */
.main-list-container > p {
	animation-delay: 0.3s;
	animation-fill-mode: both;
}

.main-list-container > div:last-child {
	animation-delay: 0.4s;
	animation-fill-mode: both;
}
</style>
