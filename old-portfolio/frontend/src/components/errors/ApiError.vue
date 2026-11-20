<template>
  <div class="ep-wrap">
    <div class="ep-card">
      <div class="ep-icon" v-html="currentIcon"></div>
      <h1 class="ep-title">{{ $t('errorPage.title') }}</h1>
      <p class="ep-sub">{{ $t('errorPage.subtitle') }}</p>

      <div class="ep-info">
        <div class="ep-row">
          <span class="ep-label">{{ $t('errorPage.labelMissing') }}</span>
          <span class="ep-val">{{ missingData || '---' }}</span>
        </div>
        <div class="ep-row">
          <span class="ep-label">{{ $t('errorPage.labelMessage') }}</span>
          <span class="ep-val">{{ errorMessage || '---' }}</span>
        </div>
        <div class="ep-row">
          <span class="ep-label">{{ $t('errorPage.labelCode') }}</span>
          <span class="ep-code">{{ errorCode || 'UNKNOWN' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['missingData', 'errorMessage', 'errorCode'])
const router = useRouter()
const goToHome = () => router.push('/')

const currentIcon = computed(() => {
  const code = Number(props.errorCode)
  const c = 'var(--icon-important)'

  if (code === 404) return `
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="36" r="20" stroke="${c}" stroke-width="2"/>
      <line x1="54" y1="50" x2="66" y2="62" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="34" y1="30" x2="46" y2="42" stroke="${c}" stroke-width="2" stroke-linecap="round" opacity=".4"/>
      <line x1="46" y1="30" x2="34" y2="42" stroke="${c}" stroke-width="2" stroke-linecap="round" opacity=".4"/>
    </svg>`

  if (code >= 500) return `
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="22" width="52" height="36" rx="5" stroke="${c}" stroke-width="2"/>
      <line x1="14" y1="33" x2="66" y2="33" stroke="${c}" stroke-width="2"/>
      <circle cx="22" cy="27.5" r="2" fill="${c}"/>
      <circle cx="30" cy="27.5" r="2" fill="${c}" opacity=".4"/>
      <circle cx="38" cy="27.5" r="2" fill="${c}" opacity=".2"/>
      <path d="M32 47 L40 40 L48 47" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="40" y1="40" x2="40" y2="52" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
    </svg>`

  return `
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 24 Q40 14 62 24" stroke="${c}" stroke-width="2" stroke-linecap="round" opacity=".2"/>
      <path d="M24 35 Q40 26 56 35" stroke="${c}" stroke-width="2" stroke-linecap="round" opacity=".45"/>
      <path d="M30 46 Q40 38 50 46" stroke="${c}" stroke-width="2" stroke-linecap="round" opacity=".7"/>
      <circle cx="40" cy="57" r="3" fill="${c}"/>
      <line x1="16" y1="16" x2="64" y2="64" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
})
</script>
