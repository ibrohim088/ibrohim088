<template>
  <div class="tech-item">
    <div class="tech-item__icon">
      <img v-if="tech.icon" :src="tech.icon" :alt="tech.name" />
      <Icon v-else icon="mdi:code-tags" />
    </div>
    <p class="tech-item__name">{{ tech.name }}</p>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
defineProps({ tech: Object })
</script>