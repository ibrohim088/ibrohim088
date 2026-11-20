<template>
  <div class="error-container">
    <div v-if="globalError" class="global-error-view">
      <ApiError :errorCode="String(globalErrorCode || 'NETWORK')" :errorMessage="formattedErrorMessage"
        :missingData="failedEndpoints" />
    </div>

    <slot v-else></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ApiError from './ApiError.vue'

const props = defineProps({
  stores: {
    type: Array,
    required: true
  }
})

// Birorta store-da xato bormi?
const globalError = computed(() => props.stores.some(s => s.error))

// Qaysi endpointlar ishlamay qolganini yig'ish
const failedEndpoints = computed(() => {
  return props.stores
    .filter(s => s.error)
    .map(s => s.$id)
    .join(', ')
})

const globalErrorCode = computed(() => {
  const firstError = props.stores.find(s => s.errorCode)
  return firstError ? firstError.errorCode : undefined
})

const formattedErrorMessage = computed(() => {
  return "Tizim bilan bog'lanishda uzilish yuz berdi. Iltimos, internetingizni tekshiring yoki keyinroq urinib ko'ring."
})
</script>