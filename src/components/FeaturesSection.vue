<script setup>
const features = [
  {
    key: 'consultations',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/></svg>`,
    accent: '#00f2c3',
  },
  {
    key: 'inventory',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    accent: '#00f2c3',
  },
  {
    key: 'laboratory',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 3v7l-4.5 9A1 1 0 0 0 6.5 21h11a1 1 0 0 0 .9-1.45L14 10V3"/><line x1="6" y1="16" x2="18" y2="16"/></svg>`,
    accent: '#00f2c3',
  },
  {
    key: 'crm',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    accent: '#a3e635',
  },
  {
    key: 'sales',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
    accent: '#a3e635',
  },
  {
    key: 'analytics',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    accent: '#a3e635',
  },
]
</script>

<template>
  <section id="features" class="features-section">
    <div class="container">
      <div class="header">
        <div class="badge">Features</div>
        <h2>{{ $t('features.title') }}</h2>
        <p class="subtitle">{{ $t('features.subtitle') }}</p>
      </div>

      <div class="features-grid">
        <div
          v-for="feat in features"
          :key="feat.key"
          class="feature-card"
          :style="{ '--card-accent': feat.accent }"
        >
          <div class="feature-icon-wrap" v-html="feat.icon"></div>
          <h3 class="feature-title">{{ $t(`features.cards.${feat.key}.title`) }}</h3>
          <p class="feature-description">{{ $t(`features.cards.${feat.key}.description`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  --accent: #00f2c3;
  --secondary: #a3e635;
  --bg: #000000;
  --text-main: #ffffff;
  --text-muted: #a0aec0;
  --border: #064e3b;

  background-color: var(--bg);
  padding: 100px 20px;
  font-family: 'Segoe UI', sans-serif;
  color: white;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 64px;
}

.badge {
  display: inline-block;
  background: rgba(0, 242, 195, 0.1);
  color: var(--accent);
  border: 1px solid rgba(0, 242, 195, 0.25);
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 6px 18px;
  margin-bottom: 20px;
}

.header h2 {
  font-size: 2.6rem;
  color: var(--text-main);
  font-weight: 700;
  letter-spacing: -0.5px;
  margin: 0 0 16px;
}

.subtitle {
  font-size: 1rem;
  color: var(--text-muted);
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.02);
  padding: 40px 28px;
  border-radius: 24px;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 240px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: default;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--card-accent), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-card:hover {
  transform: translateY(-10px);
  border-color: var(--card-accent);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  background: rgba(255, 255, 255, 0.04);
}

.feature-icon-wrap {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: var(--card-accent);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.feature-card:hover .feature-icon-wrap {
  background: rgba(255, 255, 255, 0.06);
  transform: scale(1.08);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.feature-title {
  color: var(--text-main);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 10px;
  line-height: 1.3;
}

.feature-description {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.65;
  margin: 0;
}

@media (max-width: 768px) {
  .features-section {
    padding: 80px 20px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .header h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .feature-card {
    min-height: auto;
    padding: 32px 24px;
  }
}
</style>
