import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getEducation } from '../services/api.js'

export const useEducationStore = defineStore('education', () => {
  const education = ref([])
  const loading = ref(false)
  const error = ref(null)
  const errorCode = ref(null)

  const fetch = async () => {
    loading.value = true
    try {
      const { data } = await getEducation()
      console.log('edu: ', data);
      education.value = data
      error.value = null
      errorCode.value = null

    } catch (err) {
      error.value = err.message || 'Failed to load education data'
      errorCode.value = err.response?.status || 'NETWORK'

    } finally {
      loading.value = false
    }
  }

  return { education, loading, error, errorCode, fetch }
})

