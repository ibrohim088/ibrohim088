import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getProfile } from '@/services/api'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref(null)
  const loading = ref(false)
  const error = ref(null)
  const errorCode = ref(null)

  const fetch = async () => {
    loading.value = true
    try {
      const { data } = await getProfile()
      console.log('prfoli: ', data);

      profile.value = data
      error.value = null
      errorCode.value = null

    } catch (err) {
      error.value = err.message || 'Failed to load profile data'
      errorCode.value = err.response?.status || 'NETWORK'

    } finally {
      loading.value = false
    }
  }

  return { profile, loading, error, fetch }
})