<template>
	<transition
		name="loading-fade"
		appear>
		<div
			v-if="loadingStore.isLoading"
			class="loading-overlay">
			<div class="loading-spinner">
				<div class="spinner">
					<div class="spinner-inner"></div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { useLoadingStore } from '@/stores/Loading'

const loadingStore = useLoadingStore()
</script>

<style scoped>
.loading-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(15, 23, 42, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);
}

.loading-spinner {
	display: flex;
	justify-content: center;
	align-items: center;
}

.spinner {
	position: relative;
	width: 80px;
	height: 80px;
}

.spinner::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: 3px solid transparent;
	border-top: 3px solid #3b82f6;
	border-right: 3px solid #60a5fa;
	border-radius: 50%;
	animation: spin 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}

.spinner::after {
	content: '';
	position: absolute;
	top: 8px;
	left: 8px;
	width: calc(100% - 16px);
	height: calc(100% - 16px);
	border: 2px solid transparent;
	border-top: 2px solid #60a5fa;
	border-radius: 50%;
	animation: spin 0.8s linear infinite reverse;
}

.spinner-inner {
	position: absolute;
	top: 20px;
	left: 20px;
	width: calc(100% - 40px);
	height: calc(100% - 40px);
	background: linear-gradient(45deg, #3b82f6, #60a5fa, #93c5fd);
	border-radius: 50%;
	animation: pulse 1.5s ease-in-out infinite alternate;
	filter: blur(1px);
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

@keyframes pulse {
	0% {
		transform: scale(0.8);
		opacity: 0.7;
	}
	100% {
		transform: scale(1);
		opacity: 0.3;
	}
}

/* Responsive */
@media (max-width: 768px) {
	.spinner {
		width: 60px;
		height: 60px;
	}
	
	.spinner-inner {
		top: 15px;
		left: 15px;
		width: calc(100% - 30px);
		height: calc(100% - 30px);
	}
	
	.spinner::after {
		top: 6px;
		left: 6px;
		width: calc(100% - 12px);
		height: calc(100% - 12px);
	}
}

/* Loading transition */
.loading-fade-enter-active,
.loading-fade-leave-active {
	transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.loading-fade-enter-from,
.loading-fade-leave-to {
	opacity: 0;
	backdrop-filter: blur(0px);
	-webkit-backdrop-filter: blur(0px);
}

.loading-fade-enter-to,
.loading-fade-leave-from {
	opacity: 1;
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);
}

@media (prefers-reduced-motion: reduce) {
	.spinner::before,
	.spinner::after {
		animation-duration: 2s;
	}
	
	.spinner-inner {
		animation-duration: 3s;
	}
	
	.loading-fade-enter-active,
	.loading-fade-leave-active {
		transition-duration: 0.5s;
	}
}
</style>