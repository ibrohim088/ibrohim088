<template>
  <AppCard :is-loading="loading" variant="tech">
    <h3>{{ t('tech.title') }}</h3>
    <div class="tech-card__grid">
      <TechItem v-for="tech in technologies" :key="tech._id" :tech="tech" />
    </div>
  </AppCard>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import TechItem from './TechItem.vue'
import AppCard from '../UI/AppCard.vue'

const { t } = useI18n()
defineProps({ technologies: Array, loading: Boolean })
</script>