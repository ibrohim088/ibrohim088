<template>
  <nav class="navbar">
    <div @click="goHome" class="navbar__logo">
      <div class="logo-box">
        <img :src="themeStore.isDark ? '/logo_dark.png' : '/logo.png'" alt="IZ" class="navbar__logo-img" />
      </div>
      <p class="navbar_logo-text">Ibrohim.<span>dev</span></p>
    </div>

    <ul class="navbar__links">
      <li class="navbar__item">
        <RouterLink class="navbar__link" to="/">
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2.40002C12 2.40002 4.32 8.16002 3.6 8.88002C2.88 9.60002 2.88 10.56 2.88 11.52V18.72C2.88 20.16 4.08 21.12 5.52 21.12H18.48C19.92 21.12 21.12 20.16 21.12 18.72V11.52C21.12 10.56 21.12 9.60002 20.4 8.88002C19.68 8.16002 12 2.40002 12 2.40002Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.12 13.44C9.84 15.12 14.16 15.12 14.88 13.32" stroke="currentColor" stroke-width="1.2"
                stroke-linecap="round" />
            </svg>
          </div>
          <span>{{ t('navbar.home') }}</span>
        </RouterLink>
      </li>

      <li class="navbar__item">
        <RouterLink class="navbar__link btn-outline" to="/contact">
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M19.68 3.59998H4.31998C2.87998 3.59998 1.91998 4.55998 1.91998 5.99998V14.88C1.91998 16.32 2.87998 17.28 4.31998 17.28H9.11998V20.4L13.92 17.28H19.68C21.12 17.28 22.08 16.32 22.08 14.88V5.99998C22.08 4.55998 21.12 3.59998 19.68 3.59998Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.71997 9.12H17.28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path d="M6.71997 12.96H14.88" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </div>
          <span>{{ t('navbar.contact') }}</span>
        </RouterLink>
      </li>

      <li class="navbar__item">
        <RouterLink class="navbar__link btn-outline" to="/about">
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-square-user-icon lucide-square-user">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <circle stroke="currentColor" cx="12" cy="10" r="3" />
              <path stroke="currentColor" d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
            </svg>
          </div>
          <span>{{ t('navbar.about') }}</span>
        </RouterLink>
      </li>

      <li class="navbar__item lang-group">
        <button class="lang-btn" v-for="lang in langs" :key="lang" :class="{ active: langStore.current === lang }"
          @click="changeLang(lang)">
          {{ lang.toUpperCase() }}
        </button>
      </li>

      <li class="navbar__item">
        <button class="theme-btn" @click="themeStore.toggle()">
          <img :src="!themeStore.isDark ? '/icons/moon.svg' : '/icons/sun.svg'" alt="">
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLangStore } from '../../stores/langStore'
import { useThemeStore } from '../../stores/themeStore'
import { useProfileStore } from '../../stores/profileStore'

const router = useRouter()
const { t, locale } = useI18n()
const langStore = useLangStore()
const themeStore = useThemeStore()
const profileStore = useProfileStore()
const langs = ['uz', 'ru', 'en']

const changeLang = (lang) => {
  locale.value = lang
  langStore.setLang(lang)
  profileStore.fetch()
}

const goHome = () => router.push('/')
</script>