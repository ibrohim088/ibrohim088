<template>
  <div class="fb-wrap">
    <div class="fb-card">
      <div class="fb-icon" v-html="emptyIcon"></div>
      <h1 class="fb-title">{{ $t('fallback.title') || 'No Content Available' }}</h1>
      <p class="fb-sub">{{ $t('fallback.subtitle') || 'The data you are looking for is currently empty' }}</p>

      <div class="fb-info">
        <p class="fb-message">{{ message || 'No data to display' }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  message: {
    type: String,
    default: 'No data available'
  }
})

const router = useRouter()
const goToHome = () => router.push('/')

const emptyIcon = computed(() => {
  const c = 'var(--icon-important)'

  return `
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="30" stroke="${c}" stroke-width="2"/>
      <line x1="30" y1="40" x2="50" y2="40" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
})
</script>

<style scoped>
.fb-wrap {

  background: var(--bg-primary);
}

.fb-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radiuse-first);
  padding: 40px 20px;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
}

:deep(.dark) .fb-card {
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.24);
}

.fb-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fb-icon svg {
  width: 100%;
  height: 100%;
}

.fb-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-title);
  margin-bottom: 8px;
}

.fb-sub {
  font-size: 14px;
  color: var(--text);
  margin-bottom: 20px;
  line-height: 1.6;
}

.fb-info {
  background: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
}

:deep(.dark) .fb-info {
  background: rgba(255, 255, 255, 0.02);
}

.fb-message {
  font-size: 13px;
  color: var(--text);
  margin: 0;
}

.fb-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radiuse-first);
  color: var(--text-title);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.fb-btn:hover {
  background: var(--bg-hover);
  border-color: var(--icon-important);
  color: var(--icon-important);
}

.fb-btn svg {
  width: 16px;
  height: 16px;
}
</style>
