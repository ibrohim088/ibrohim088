<template>
  <div class="cert-item">
    <div class="cert-item__thumb">
      <img v-if="item.image" :src="item.image" :alt="item.name" />
      <div v-else class="cert-item__thumb-placeholder"></div>
    </div>

    <div class="cert-item__info">
      <p class="cert-item__name">{{ item.name }}</p>
      <p class="cert-item__meta">{{ item.organization }} • {{ item.date }}</p>
    </div>

    <span class="cert-item__badge">{{ item.route }}</span>
  </div>
</template>

<script setup>
defineProps({ item: Object })
</script>