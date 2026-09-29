<template>
  <div class="contact-form">
    <h2>{{ t('contact.title') }}</h2>
    <p class="contact-form__subtitle">{{ t('contact.subtitle') }}</p>

    <form @submit.prevent="onSubmit">
      <div class="contact-form__grid">
        <div class="form-field">
          <label>{{ t('contact.name') }}</label>
          <input v-model="form.name" type="text" :placeholder="t('contact.name')" />
          <span class="error">{{ errors.name }}</span>
        </div>
        <div class="form-field">
          <label>{{ t('contact.email') }}</label>
          <input v-model="form.email" type="email" :placeholder="t('contact.email')" />
          <span class="error">{{ errors.email }}</span>
        </div>
        <div class="form-field">
          <label>{{ t('contact.subject') }}</label>
          <input v-model="form.subject" type="text" :placeholder="t('contact.subject')" />
        </div>
        <div class="form-field">
          <label>{{ t('contact.phone') }}</label>
          <input v-model="form.phone" type="text" :placeholder="t('contact.phone')" />
        </div>
      </div>

      <div class="form-field">
        <label>{{ t('contact.message') }}</label>
        <textarea v-model="form.message" rows="5" :placeholder="t('contact.message')"></textarea>
        <span class="error">{{ errors.message }}</span>
      </div>

      <button type="submit" :disabled="loading" class="submit-btn">
        {{ loading ? t('contact.submitting') : t('contact.submit') }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { sendContact } from '../../services/api'

const { t } = useI18n()
const toast = useToast()
const loading = ref(false)

const form = reactive({ name: '', email: '', phone: '', subject: '', message: '' })

const errors = reactive({ name: '', email: '', message: '' })

const validate = () => {
  errors.name = form.name.length < 2 ? t('validation.name') : ''
  errors.email = !form.email.includes('@') ? t('validation.email') : ''
  errors.message = form.message.length < 5 ? t('validation.message') : ''
  return !errors.name && !errors.email && !errors.message
}

const onSubmit = async () => {
  if (!validate()) return
  loading.value = true
  try {
    await sendContact(form)
    toast.success(t('contact.success'))
    Object.keys(form).forEach(k => form[k] = '')
  } catch {
    toast.error(t('contact.error'))
  } finally {
    loading.value = false
  }
}
</script>
