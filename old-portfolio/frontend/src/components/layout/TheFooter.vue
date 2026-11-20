<template>
  <footer class="footer">
    <div class="footer__left">
      <p>{{ t('footer.rights') }}</p>
    </div>

    <div class="footer__relative">

      <!-- Dropdown -->
      <div v-if="isOpen" class="file-dropdown">

        <!-- Loading -->
        <div v-if="isInitialLoading" class="file-loader-container">
          <AppLoader :size="20" />
        </div>

        <!-- Error -->
        <div v-else-if="isError" class="file-error-msg">
          <p>{{ t('resume.error_loading') }}</p>
        </div>

        <template v-else>

          <!-- Step 1: Asosiy menu -->
          <template v-if="!activeType">
            <button class="file-menu-item" @click="activeType = 'cv'">
              <img width="23px" :src="cv" alt="">
              <span>CV</span>
              <span class="file-arrow">›</span>
            </button>
            <button class="file-menu-item" @click="activeType = 'resume'">
              <img width="24px" :src="resume" alt="">
              <span>Resume</span>
              <span class="file-arrow">›</span>
            </button>
          </template>

          <!-- Step 2: CV tillari -->
          <template v-else-if="activeType === 'cv'">
            <button class="file-back" @click="activeType = null">
              ‹ {{ t('footer.back') }}
              <span class="file-back-sep">|</span>
              CV
            </button>
            <button class="file-lang-item" @click="handleDownload('cv', 'uz')" :disabled="isDownloading">
              <img src="/icons/flag/uz.svg" alt=""> CV yuklab olish
              <span class="file-lang-code">UZ</span>
            </button>
            <button class="file-lang-item" @click="handleDownload('cv', 'ru')" :disabled="isDownloading">
              <img src="/icons/flag/ru.svg" alt=""> Скачать CV
              <span class="file-lang-code">RU</span>
            </button>
            <button class="file-lang-item" @click="handleDownload('cv', 'en')" :disabled="isDownloading">
              <img src="/icons/flag/en.svg" alt=""> Download CV
              <span class="file-lang-code">EN</span>
            </button>
          </template>

          <!-- Step 3: Resume tillari -->
          <template v-else-if="activeType === 'resume'">
            <button class="file-back" @click="activeType = null">
              ‹ {{ t('footer.back') }}
              <span class="file-back-sep">|</span>
              Resume
            </button>
            <button class="file-lang-item" @click="handleDownload('resume', 'uz')" :disabled="isDownloading">
              <img src="/icons/flag/uz.svg" alt=""> Rezyume yuklab olish
              <span class="file-lang-code">UZ</span>
            </button>
            <button class="file-lang-item" @click="handleDownload('resume', 'ru')" :disabled="isDownloading">
              <img src="/icons/flag/ru.svg" alt=""> Скачать резюме
              <span class="file-lang-code">RU</span>
            </button>
            <button class="file-lang-item" @click="handleDownload('resume', 'en')" :disabled="isDownloading">
              <img src="/icons/flag/en.svg" alt=""> Download Resume
              <span class="file-lang-code">EN</span>
            </button>
          </template>

        </template>
      </div>

      <!-- Asosiy tugma -->
      <button class="file-btn" @click="toggleOpen">
        <AppLoader v-if="isDownloading" :size="18" />
        <template v-else>
          <img width="22px" :src="resume" alt="">
          <span>CV / Resume</span>
        </template>
        <img :src="isOpen ? arrowTop : arrowRight" alt="">
      </button>

    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { downloadResume, downloadCV, getProfile } from '../../services/api'
import { useThemeStore } from '../../stores/themeStore'
import AppLoader from '../UI/AppLoader.vue'

const { t } = useI18n()
const themeStore = useThemeStore()

const isOpen = ref(false)
const activeType = ref(null)  // null | 'cv' | 'resume'
const isInitialLoading = ref(true)
const isError = ref(false)
const isDownloading = ref(false)

const arrowTop = computed(() => themeStore.isDark ? '/dark/arrow/top.svg' : '/icons/arrow/top.svg')
const arrowRight = computed(() => themeStore.isDark ? '/dark/arrow/right.svg' : '/icons/arrow/right.svg')
const resume = computed(() => themeStore.isDark ? '/dark/resume.svg' : '/icons/resume.svg')
const cv = computed(() => themeStore.isDark ? '/dark/cv.svg' : '/icons/cv.svg')

const toggleOpen = () => {
  isOpen.value = !isOpen.value
  if (!isOpen.value) activeType.value = null  // yopilganda reset
}

onMounted(async () => {
  try {
    isInitialLoading.value = true
    await getProfile()
    isError.value = false
  } catch (error) {
    isError.value = true
  } finally {
    isInitialLoading.value = false
  }
})

const handleDownload = async (type, lang) => {
  try {
    isDownloading.value = true
    if (type === 'cv') {
      await downloadCV(lang)
    } else {
      await downloadResume(lang)
    }
  } catch (error) {
    isError.value = true
  } finally {
    isDownloading.value = false
  }
}
</script>