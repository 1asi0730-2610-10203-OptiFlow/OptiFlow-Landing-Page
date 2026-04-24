<script setup>
</script>

<template>
  <section class="two-experiences" id="two-experiences">
    <div class="container">

      <h2 class="title">{{ $t('two-experiences.title') }}</h2>

      <div class="experience-card">
        <h3>{{ $t('two-experiences.client.heading') }}</h3>
        <p class="subtitle">{{ $t('two-experiences.client.subtitle') }}</p>
        <p>{{ $t('two-experiences.client.description') }}</p>
      </div>

      <div class="experience-card">
        <h3>{{ $t('two-experiences.optics.heading') }}</h3>
        <p>{{ $t('two-experiences.optics.description1') }}</p>
        <p>{{ $t('two-experiences.optics.description2') }}</p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.two-experiences {
  font-family: 'Istok Web';
  background: #00C1B0;
  padding: 100px 20px;
  display: flex;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.title {
  text-align: center;
  color: white;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}

.experience-card {
  background: #f5f5f5;
  border-radius: 20px;
  padding: 40px 50px;
  text-align: center;
  color: #333;
  line-height: 1.6;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.experience-card h3 {
  color: #93C1CE;
  font-size: 20px;
  margin-bottom: 15px;
}

.subtitle {
  margin-bottom: 10px;
}
</style>
