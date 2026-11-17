<template>
  <AppCard :is-loading="loading" variant="education">
    <h3>{{ t('education.title') }}</h3>
    <EducationItem v-for="item in education" :key="item._id" :item="item" />
  </AppCard>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import EducationItem from './EducationItem.vue'
import AppCard from '../UI/AppCard.vue'

const { t } = useI18n()
defineProps({ education: Array, loading: Boolean })
</script>