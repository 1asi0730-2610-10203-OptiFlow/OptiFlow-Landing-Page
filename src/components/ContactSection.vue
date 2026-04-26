<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  surname: '',
  email: '',
  message: '',
});

const handleSubmit = () => {
  console.log('Datos enviados:', form);
};
</script>

<template>
  <section class="contact-section">
    <div class="contact-container">
      <div class="contact-header">
        <h1>{{ $t('contact.title') }}</h1>
      </div>

      <div class="contact-content">
        <div class="cta-message">
          <p class="cta-intro-text">{{ $t('contact.cta.intro') }}</p>
          <h2 class="cta-title">{{ $t('contact.cta.heading') }}</h2>
          <button class="cta-demo-button">{{ $t('contact.cta.demo-button') }}</button>
          <div class="stats-text">
            <span>{{ $t('contact.cta.stat-optics') }}</span>
            <!-- Pluralization: $t(key, n) selects the plural form based on count -->
            <span>{{ $t('contact.cta.satisfied-clients', 190) }}</span>
          </div>
        </div>

        <div class="form-card">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">{{ $t('contact.form.name') }}</label>
              <input type="text" id="name" v-model="form.name" :placeholder="$t('contact.form.placeholder')" />
            </div>
            <div class="form-group">
              <label for="surname">{{ $t('contact.form.surname') }}</label>
              <input type="text" id="surname" v-model="form.surname" :placeholder="$t('contact.form.placeholder')" />
            </div>
            <div class="form-group">
              <label for="email">{{ $t('contact.form.email') }}</label>
              <input type="email" id="email" v-model="form.email" :placeholder="$t('contact.form.placeholder')" />
            </div>
            <div class="form-group">
              <label for="message">{{ $t('contact.form.message') }}</label>
              <textarea id="message" v-model="form.message" :placeholder="$t('contact.form.placeholder')" rows="4"></textarea>
            </div>
            <button type="submit" class="submit-button">{{ $t('contact.form.submit') }}</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: #4a616d;
  background: linear-gradient(180deg, #4a616d 0%, #090d10 100%);
  color: #ffffff;
  padding: 100px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
  font-family: 'Segoe UI', sans-serif;
}

.contact-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
}

.contact-header h1 {
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 80px;
  text-align: left;
}

.contact-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

.cta-message {
  flex: 1;
  text-align: center;
}

.cta-intro-text {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 15px;
}

.cta-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  line-height: 1.1;
}

.cta-demo-button {
  background-color: #ffffff;
  color: #333;
  border: none;
  padding: 12px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 30px;
  transition: transform 0.2s ease;
}

.cta-demo-button:hover {
  transform: scale(1.05);
}

.stats-text {
  display: flex;
  gap: 20px;
  font-size: 0.9rem;
  justify-content: center;
  opacity: 0.8;
}

.form-card {
  flex: 0 0 420px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.form-group {
  margin-bottom: 18px;
  text-align: left;
}

.form-group label {
  display: block;
  color: #444;
  font-weight: 500;
  margin-bottom: 6px;
  font-size: 0.9rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #9ca3af;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #4a616d;
  box-shadow: 0 0 0 2px rgba(74, 97, 109, 0.1);
}

.submit-button {
  width: 100%;
  background-color: #333333;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
}

@media (max-width: 900px) {
  .contact-content {
    flex-direction: column;
  }
  .form-card {
    width: 100%;
    flex: none;
  }
}
</style>
