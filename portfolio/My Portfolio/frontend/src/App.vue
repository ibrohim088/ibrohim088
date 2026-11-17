<template>
  <div :class="{ dark: themeStore.isDark }" class="app">
    <AppKineticBackground />

    <TheNavbar />
    <main class="main">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { useThemeStore } from './stores/themeStore'
import TheNavbar from './components/layout/TheNavbar.vue'
import TheFooter from './components/layout/TheFooter.vue'
import AppKineticBackground from './components/UI/AppKineticBackground.vue';

const themeStore = useThemeStore()
</script>