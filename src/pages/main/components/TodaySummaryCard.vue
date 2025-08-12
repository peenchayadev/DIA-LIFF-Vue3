<template>
	<div class="w-full h-fit rounded-[16px] bg-white shadow-sm p-[20px]">
		<div class="flex items-center justify-between mb-[16px]">
			<p class="font-bold">
        สรุปภาพรวมวันนี้
      </p>
			<p class="text-gray-400">
        {{ item?.measurementCount }} ครั้งที่วัด</p>
		</div>
		<div class="bg-gradient-to-br from-sky-300 to-sky-400 rounded-xl p-4 text-white flex justify-between items-center">
			<div>
				<p class="text-sm opacity-80">
          ระดับน้ำตาลล่าสุด
        </p>
				<p class="text-4xl font-bold">
					{{ item?.latestLevel?.value || 0 }}
					<span class="text-lg font-medium opacity-80">
            mg/dL
          </span>
				</p>
				<p class="text-sm opacity-80 mt-1">
          อยู่ในเกณฑ์{{ statusGlucoseLabel(item?.latestLevel?.status) }}
        </p>
			</div>
			<Icon icon="lucide:heart-handshake" />
		</div>
		<div class="grid grid-cols-3 gap-4 mt-4">
			<div class="bg-stone-100 rounded-lg p-3 text-center">
				<p class="text-sm text-stone-500">
          เฉลี่ย
        </p>
				<p class="text-xl font-bold text-stone-800">
          {{ item?.average || 0 }}
        </p>
			</div>
			<div class="bg-stone-100 rounded-lg p-3 text-center">
				<p class="text-sm text-stone-500">
          สูงสุด
        </p>
				<p class="text-xl font-bold text-red-500">
          {{ item?.maximum || 0 }}</p>
			</div>
			<div class="bg-stone-100 rounded-lg p-3 text-center">
				<p class="text-sm text-stone-500">
          ต่ำสุด
        </p>
				<p class="text-xl font-bold text-blue-500">
          {{ item?.minimum || 0}}
        </p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { IGlucoseSummaryResponse } from '@/models/Response/GlucoseResponse.model';
import { statusGlucoseLabel } from '@/utils/global';

interface IProps {
	item: IGlucoseSummaryResponse
}

defineProps<IProps>()

</script>

<style scoped>

</style>
