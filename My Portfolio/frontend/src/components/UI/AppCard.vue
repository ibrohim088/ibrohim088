<template>
  <div v-if="isLoading" :class="getCardClass">
    <!-- Profile Skeleton -->
    <template v-if="variant === 'profile'">
      <div class="skeleton-avatar"></div>
      <div class="skeleton-line skeleton-line--lg"></div>
      <div class="skeleton-line skeleton-line--md"></div>
      <div class="skeleton-line skeleton-line--sm"></div>
      <div class="skeleton-buttons">
        <div class="skeleton-btn"></div>
        <div class="skeleton-btn"></div>
      </div>
    </template>

    <!-- Certificate Skeleton -->
    <template v-else-if="variant === 'certificate'">
      <div class="skeleton-line skeleton-line--lg"></div>
      <div class="skeleton-item" v-for="i in 3" :key="i">
        <div class="skeleton-cert-row">
          <div class="skeleton-cert-thumb"></div>
          <div class="skeleton-cert-info">
            <div class="skeleton-line skeleton-line--md"></div>
            <div class="skeleton-line skeleton-line--sm"></div>
          </div>
        </div>
      </div>
    </template>

    <!-- Education Skeleton -->
    <template v-else-if="variant === 'education'">
      <div class="skeleton-line skeleton-line--lg"></div>
      <div class="skeleton-item" v-for="i in 3" :key="i">
        <div class="skeleton-line skeleton-line--sm"></div>
        <div class="skeleton-line skeleton-line--xs"></div>
      </div>
    </template>

    <!-- Tech Skeleton -->
    <template v-else-if="variant === 'tech'">
      <div class="skeleton-line skeleton-line--lg"></div>
      <div class="skeleton-tech-grid">
        <div v-for="i in 8" :key="i" class="skeleton-tech-item"></div>
      </div>
    </template>
  </div>

  <!-- Content -->
  <div v-else :class="getCardClass">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'profile', 'education', 'tech', 'certificate'].includes(value)
  }
})

const getCardClass = computed(() => {
  const variants = {
    'profile': 'profile-card',
    'education': 'education-card',
    'tech': 'tech-card',
    'certificate': 'certificate-card'
  }
  return variants[props.variant] || 'default-card'
})
</script>

<style scoped>
/* ============================================
   SKELETON LOADING STYLES
   ============================================ */
   
.skeleton-line {
  height: 16px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 2s infinite;
}

:deep(.dark) .skeleton-line {
  background: linear-gradient(90deg, #2a3344 25%, #3a4454 50%, #2a3344 75%);
  background-size: 200% 100%;
}

.skeleton-line--lg {
  height: 24px;
  width: 100%;
}

.skeleton-line--md {
  height: 18px;
  width: 85%;
}

.skeleton-line--sm {
  height: 14px;
  width: 70%;
}

.skeleton-line--xs {
  height: 12px;
  width: 60%;
}

.skeleton-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
  margin: 0 auto 16px;
}

:deep(.dark) .skeleton-avatar {
  background: linear-gradient(90deg, #2a3344 25%, #3a4454 50%, #2a3344 75%);
  background-size: 200% 100%;
}

.skeleton-buttons {
  display: flex;
  gap: 8px;
  margin-top: 16px;
}

.skeleton-btn {
  flex: 1;
  height: 36px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 2s infinite;
}

:deep(.dark) .skeleton-btn {
  background: linear-gradient(90deg, #2a3344 25%, #3a4454 50%, #2a3344 75%);
  background-size: 200% 100%;
}

.skeleton-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  margin-top: 8px;
}

:deep(.dark) .skeleton-item {
  background: rgba(255, 255, 255, 0.02);
}

.skeleton-cert-row {
  display: flex;
  gap: 12px;
  align-items: center;
}

.skeleton-cert-thumb {
  width: 110px;
  height: 76px;
  border-radius: 4px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
  flex-shrink: 0;
}

:deep(.dark) .skeleton-cert-thumb {
  background: linear-gradient(90deg, #2a3344 25%, #3a4454 50%, #2a3344 75%);
  background-size: 200% 100%;
}

.skeleton-cert-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skeleton-tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 12px;
}

.skeleton-tech-item {
  aspect-ratio: 1;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 2s infinite;
}

:deep(.dark) .skeleton-tech-item {
  background: linear-gradient(90deg, #2a3344 25%, #3a4454 50%, #2a3344 75%);
  background-size: 200% 100%;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: calc(200% + 200px) 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .skeleton-tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>