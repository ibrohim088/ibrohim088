<template>
  <div class="social-links">
    <a v-if="socials?.telegram" :href="socials.telegram" target="_blank">
      <img :src="telegram" alt="">
    </a>
    <a v-if="socials?.linkedin" :href="socials.linkedin" target="_blank">
      <img :src="linkedin" alt="">
    </a>
    <a v-if="socials?.phone" :href="`tel:${socials.phone}`">
      <img :src="tel" alt="">
    </a>
    <a v-if="socials?.github" :href="socials.github" target="_blank">
      <img :src="github" alt="">
    </a>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useThemeStore } from '../../stores/themeStore'
defineProps({ socials: Object })

const themeStore = useThemeStore()

const telegram = computed(() => themeStore.isDark ? "/dark/socials/telegram.svg" : "/icons/socials/telegram.svg")
const linkedin = computed(() => themeStore.isDark ? "/dark/socials/linkedin.svg" : "/icons/socials/linkedin.svg")
const tel = computed(() => themeStore.isDark ? "/dark/socials/tel.svg" : "/icons/socials/tel.svg")
const github = computed(() => themeStore.isDark ? "/dark/socials/github.svg" : "/icons/socials/github.svg")

</script>