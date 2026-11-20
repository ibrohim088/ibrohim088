import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCertificates } from '../services/api.js'

export const useCertificateStore = defineStore('certificate', () => {
  const certificates = ref([])
  const loading = ref(false)
  const error = ref(null)
  const errorCode = ref(null)

  const fetch = async () => {
    loading.value = true
    try {
      const { data } = await getCertificates()
      certificates.value = data
      error.value = null
      errorCode.value = null
    } catch (err) {
      error.value = err.message || 'Failed to load certificates'
      errorCode.value = err.response?.status || 'NETWORK'
    } finally {
      loading.value = false
    }
  }

  return { certificates, loading, error, errorCode, fetch }
})