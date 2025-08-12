<template>
	<div
		id="app-root"
		class="min-h-screen bg-gray-100">
		<Loading/>
		<Navbar />
		<main
			id="main-content"
			class="w-full max-w-[560px] mx-auto p-[16px]">
			<router-view v-slot="{ Component, route }">
				<transition
					name="slide-fade"
					mode="out-in"
					appear>
					<component :is="Component" :key="route.path" />
				</transition>
			</router-view>
		</main>
		<MenuFooter />
	</div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import MenuFooter from '@/components/MenuFooter.vue'
import Loading from '@/components/Loading.vue';
</script>

<style scoped>
/* Smooth slide-fade transition */
.slide-fade-enter-active {
	transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-fade-leave-active {
	transition: all 0.3s cubic-bezier(0.55, 0.06, 0.68, 0.19);
}

.slide-fade-enter-from {
	opacity: 0;
	transform: translateX(20px) scale(0.98);
}

.slide-fade-leave-to {
	opacity: 0;
	transform: translateX(-20px) scale(0.98);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
	opacity: 1;
	transform: translateX(0) scale(1);
}

/* Ensure smooth rendering */
.slide-fade-enter-active,
.slide-fade-leave-active {
	will-change: transform, opacity;
	backface-visibility: hidden;
	-webkit-backface-visibility: hidden;
}
</style>
