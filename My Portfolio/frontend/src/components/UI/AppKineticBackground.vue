<template>
  <canvas ref="canvasRef" class="unique-bg"></canvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useThemeStore } from '../../stores/themeStore.js';

const themeStore = useThemeStore()
const canvasRef = ref(null);
let ctx, w, h, particles = [];

const createParticles = () => {
  particles = [];
  const count = (w * h) / 5000; 

  for (let i = 0; i < count; i++) {
    const isDark = themeStore.isDark;

    const darkColors = ['#ffffff', '#fdfbd3', '#e0e7ff'];
    const lightColors = ['#3b82f6', '#8b5cf6', '#94a3b8', '#60a5fa'];

    const palette = isDark ? darkColors : lightColors;
    const randomColor = palette[Math.floor(Math.random() * palette.length)];

    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * (isDark ? .5 : 3) + 0.5,
      density: (Math.random() * 30) + 0.5,
      color: randomColor,
      opacity: Math.random() * 0.5,
      blinkSpeed: Math.random() * 0.02 + 0.005
    });
  }
};

const animate = () => {
  if (!ctx) return;
  ctx.clearRect(0, 0, w, h);

  const isDark = themeStore.isDark;

  for (let p of particles) {
    // 1. Miltillash mantiqi
    if (isDark) {
      p.opacity += p.blinkSpeed;
      if (p.opacity > 1 || p.opacity < 0.2) p.blinkSpeed *= -1;
    }

    // 2. Tebranish va doimiy harakat
    p.x += Math.sin(Date.now() * 0.001 + p.density) * (isDark ? 0.2 : 0.4);
    p.y += Math.cos(Date.now() * 0.001 + p.density) * (isDark ? 0.2 : 0.4);

    // Ekranda chiqib ketishini oldini olish (ixtiyoriy)
    if (p.x > w) p.x = 0; else if (p.x < 0) p.x = w;
    if (p.y > h) p.y = 0; else if (p.y < 0) p.y = h;

    // 3. Chizish
    ctx.globalAlpha = isDark ? p.opacity : 0.4;
    ctx.fillStyle = p.color;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    // 4. Nur sochish effekti
    if (isDark && p.size > 1.5) {
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
    } else {
      ctx.shadowBlur = 0;
    }
  }

  requestAnimationFrame(animate);
};

watch(() => themeStore.isDark, () => {
  createParticles();
});

const handleResize = () => {
  if (!canvasRef.value) return;
  w = canvasRef.value.width = window.innerWidth;
  h = canvasRef.value.height = window.innerHeight;
  createParticles();
};

onMounted(() => {
  ctx = canvasRef.value.getContext('2d');
  handleResize();
  window.addEventListener('resize', handleResize);
  animate();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.unique-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
</style>