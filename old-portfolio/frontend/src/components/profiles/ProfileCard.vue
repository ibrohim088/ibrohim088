<template>
  <AppCard :is-loading="loading" variant="profile">
    <div class="profile-card__image">
      <img v-if="profile?.photo" :src="profile.photo" :alt="profile?.name" />
      <div v-else class="profile-card__placeholder">
        <span>Portfolio Image</span>
      </div>
    </div>

    <h2 class="profile-card__name">{{ profile?.name }}</h2>
    <p class="profile-card__role">{{ profile?.role }}</p>

    <SocialLinks :socials="profile?.socials" />
  </AppCard>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SocialLinks from './SocialLinks.vue'
import AppCard from '../UI/AppCard.vue'

const { t } = useI18n()
const isOpen = ref(false)

defineProps({ profile: Object, loading: Boolean })
</script>