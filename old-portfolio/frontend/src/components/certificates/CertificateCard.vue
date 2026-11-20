<template>
  <AppCard :is-loading="loading" variant="certificate">
    <h3>{{ t('certificate.title') }}</h3>
    <CertificateItem
      v-for="item in certificates"
      :key="item.id"
      :item="item"
    />
  </AppCard>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import CertificateItem from './CertificateItem.vue'
import AppCard from '../UI/AppCard.vue'

const { t } = useI18n()
defineProps({ certificates: Array, loading: Boolean })
</script>