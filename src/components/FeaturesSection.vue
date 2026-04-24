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
        <h2>{{ $t('features.title') }}</h2>
        <p>{{ $t('features.subtitle') }}</p>
      </div>

      <div class="features-grid">
        <div v-for="key in featureKeys" :key="key" class="feature-card">
          <h3>{{ $t(`features.cards.${key}.title`) }}</h3>
          <p>{{ $t(`features.cards.${key}.description`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  --bg-color: #050a0e;
  --card-bg: #0d161d;
  --accent-color: #00f2c3;
  --text-main: #ffffff;
  --text-muted: #a0aec0;

  background-color: var(--bg-color);
  padding: 80px 20px;
  font-family: 'Segoe UI', sans-serif;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 60px;
}

.header h2 {
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.header p {
  color: var(--text-muted);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.feature-card {
  background-color: var(--card-bg);
  padding: 40px 30px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent-color);
  box-shadow: 0 10px 30px rgba(0, 242, 195, 0.1);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--text-main);
}

.feature-card p {
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 1rem;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 0;
  background-color: var(--accent-color);
  transition: height 0.3s ease;
}

.feature-card:hover::before {
  height: 100%;
}
</style>
