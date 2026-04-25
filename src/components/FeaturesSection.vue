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
          <h3 class="feature-title">{{ $t(`features.cards.${key}.title`) }}</h3>
          <p class="feature-description">{{ $t(`features.cards.${key}.description`) }}</p>
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
  --text-muted: #a0aec0;
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
  gap: 20px;
}

.feature-card {
  background-color: var(--card-bg);
  padding: 40px 25px;
  border-radius: 20px;
  border: 2px solid var(--border-color);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  /* Transición suave para el efecto hover */
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-12px);
  border-color: var(--accent-color);
  box-shadow: 0 15px 35px rgba(0, 242, 195, 0.15);
}

.feature-card:nth-child(n+4):hover {
  border-color: var(--secondary-accent);
  box-shadow: 0 15px 35px rgba(163, 230, 53, 0.15);
}

.feature-icon-container {
  margin-bottom: 20px;
}

.feature-icon {
  width: 50px;
  height: 40px;
  border-radius: 12px;
  background-color: var(--accent-color);
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
}

.feature-card:nth-child(n+4) .feature-icon {
  background-color: var(--secondary-accent);
}

.feature-title {
  color: var(--text-main);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.3;
}

.feature-description {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
