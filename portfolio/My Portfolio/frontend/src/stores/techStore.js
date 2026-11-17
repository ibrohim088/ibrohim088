import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getTechnologies } from '../services/api.js'

export const useTechStore = defineStore('technology', () => {
  const technologies = ref([])
  const loading = ref(false)
  const error = ref(null)
  const errorCode = ref(null)

  const fetch = async () => {
    loading.value = true
    
    try {
      const { data } = await getTechnologies()
      technologies.value = data
      error.value = null
      errorCode.value = null

    } catch (err) {
      error.value = err.message || 'Failed to load technologies data'
      errorCode.value = err.response?.status || 'NETWORK'

    } finally {
      loading.value = false
    }
  }

  return { technologies, loading, error, fetch }
})