import { createI18n } from 'vue-i18n'
import uz from './lang/uz.json'
import ru from './lang/ru.json'
import en from './lang/en.json'

const savedLang = localStorage.getItem('lang') || 'uz'

export default createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'uz',
  messages: { uz, ru, en }
})