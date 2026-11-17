<!-- <template>
  <div class="home">
    <div v-if="isLoading" class="loading-overlay">
      <div class="loader-container">
        <AppLoader />
      </div>
    </div>

    <div v-else class="home__grid">

      <div class="home__col-left">
        <ApiError v-if="profileStore.error" :errorCode="String(profileStore.errorCode)"
          :errorMessage="profileStore.error" missingData="Profile" />
        <FallbackContent v-else-if="!profileStore.profile || profileStore.error"
          :message="profileStore.error || 'Profile data not available'" />
        <ProfileCard v-else :profile="profileStore.profile" :loading="profileStore.loading" />
      </div>

      <div class="home__col-mid">
        <ApiError v-if="educationStore.error" :errorCode="String(educationStore.errorCode)"
          :errorMessage="educationStore.error" missingData="Education" />

        <FallbackContent v-else-if="!educationStore.education?.length || educationStore.error"
          :message="educationStore.error || 'Education data not available'" />

        <EducationCard v-else :education="educationStore.education" :loading="educationStore.loading" />

        <ApiError v-if="certificateStore.error" :errorCode="String(certificateStore.errorCode)"
          :errorMessage="certificateStore.error" missingData="Certificates" />

        <FallbackContent v-else-if="!certificateStore.certificates?.length || certificateStore.error"
          :message="certificateStore.error || 'Certificates data not available'" />

        <CertificateCard v-else :certificates="certificateStore.certificates" :loading="certificateStore.loading" />
      </div>

      <div class="home__col-right">
        <ApiError v-if="techStore.error" :errorCode="String(techStore.errorCode)" :errorMessage="techStore.error"
          missingData="Technologies" />

        <FallbackContent v-else-if="!techStore.technologies?.length || techStore.error"
          :message="techStore.error || 'Technologies data not available'" />

        <TechCard v-else :technologies="techStore.technologies" :loading="techStore.loading" />
      </div>

    </div>
  </div>
</template> -->
<template>
  <div class="home">
    <div v-if="isLoading" class="loading-overlay">
      <div class="loader-container"><AppLoader /></div>
    </div>

    <div v-else>
      <ErrorWrapper :stores="[profileStore, educationStore, techStore, certificateStore]">
        
        <div class="home__grid">
          <div class="home__col-left">
            <FallbackContent v-if="!profileStore.profile" message="Ma'lumot topilmadi" />
            <ProfileCard v-else :profile="profileStore.profile" />
          </div>

          <div class="home__col-mid">
            <EducationCard :education="educationStore.education" />
            <CertificateCard :certificates="certificateStore.certificates" />
          </div>

          <div class="home__col-right">
            <TechCard :technologies="techStore.technologies" />
          </div>
        </div>

      </ErrorWrapper>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useCertificateStore } from '../stores/certificateStore.js'
import { useEducationStore } from '../stores/educationStore.js'
import { useProfileStore } from '../stores/profileStore.js'
import { useTechStore } from '../stores/techStore.js'

import CertificateCard from '../components/certificates/CertificateCard.vue'
import EducationCard from '../components/educations/EducationCard.vue'
import ProfileCard from '../components/profiles/ProfileCard.vue'
import TechCard from '../components/technologies/TechCard.vue'

import AppLoader from '../components/UI/AppLoader.vue'

import FallbackContent from '../components/errors/FallbackContent.vue'
import ErrorWrapper from '../components/errors/ErrorWrapper.vue'

const profileStore = useProfileStore()
const educationStore = useEducationStore()
const techStore = useTechStore()
const certificateStore = useCertificateStore()

const isLoading = computed(() =>
  profileStore.loading && educationStore.loading && techStore.loading && certificateStore.loading
)

onMounted(() => {
  profileStore.fetch()
  educationStore.fetch()
  techStore.fetch()
  certificateStore.fetch()
})
</script>