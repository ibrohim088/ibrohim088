<template>
  <div class="contact">
    <div class="contact__grid">
      <ProfileCard :profile="profileStore.profile" :loading="profileStore.loading" />
      <ContactForm />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProfileStore } from '../stores/profileStore'
import ProfileCard from '../components/profiles/ProfileCard.vue'
import ContactForm from '../components/contacts/ContactForm.vue'

const profileStore = useProfileStore()

onMounted(() => {
  if (!profileStore.profile) profileStore.fetch()
})
</script>