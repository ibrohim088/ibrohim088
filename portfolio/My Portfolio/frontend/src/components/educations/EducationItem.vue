<template>
  <div class="education-item">
    <div class="education-item__logo">
      <img v-if="item.logo" :src="item.logo" :alt="item.name" />
    </div>
    <div class="education-item__info">
      <p class="education-item__name">{{ item.name }}</p>
      <p class="education-item__period">
        {{ t('education.period') }} - {{ item.period }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
defineProps({ item: Object })
</script>