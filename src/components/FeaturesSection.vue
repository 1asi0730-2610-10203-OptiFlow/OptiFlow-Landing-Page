<script setup>
const featureKeys = [
  'consultations',
  'inventory',
  'laboratory',
  'crm',
  'sales',
  'analytics',
]
</script>

<template>
  <section id="features" class="features-section">
    <div class="container">
      <div class="header">
        <h2>Features</h2>
      </div>

      <div class="features-grid">
        <div v-for="key in featureKeys" :key="key" class="feature-card">
          <div class="feature-icon-container">
            <div class="feature-icon"></div>
          </div>
          <p class="feature-title">{{ $t(`features.cards.${key}.title`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  --bg-color: #000000;
  --card-bg: #000000;
  --accent-color: #00f2c3;
  --secondary-accent: #a3e635;
  --text-main: #ffffff;
  --border-color: #064e3b;

  background-color: var(--bg-color);
  padding: 80px 20px;
  font-family: 'Segoe UI', sans-serif;
  color: white;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h2 {
  font-size: 2.5rem;
  color: var(--accent-color);
  font-weight: bold;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.feature-card {
  background-color: var(--card-bg);
  padding: 50px 30px;
  border-radius: 20px;
  border: 2px solid var(--border-color);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.feature-icon-container {
  margin-bottom: 20px;
}

.feature-icon {
  width: 50px;
  height: 40px;
  border-radius: 15px;
  background-color: var(--accent-color);
}

.feature-card:nth-child(n+4) .feature-icon {
  background-color: var(--secondary-accent);
}

.feature-title {
  color: #d1d5db; /* Gris claro */
  font-size: 1.1rem;
  line-height: 1.4;
  margin: 0;
}

/* Responsivo: 1 columna en celulares */
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
