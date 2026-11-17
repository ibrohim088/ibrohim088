import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLangStore = defineStore('lang', () => {
  const current = ref(localStorage.getItem('lang') || 'uz')

  const setLang = (lang) => {
    current.value = lang
    localStorage.setItem('lang', lang)
  }

  return { current, setLang }
})