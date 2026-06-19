<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  surname: '',
  email: '',
  message: '',
});

const showNotif = ref(false);

const handleSubmit = () => {
  console.log('Datos enviados:', form);
  showNotif.value = true;
  setTimeout(() => {
    showNotif.value = false;
  }, 3000);

  form.name = '';
  form.surname = '';
  form.email = '';
  form.message = '';
};
</script>

<template>
  <section class="contact-section" id="contact">
    <div class="glow-blob"></div>

    <div class="contact-container">
      <div class="contact-header">
        <h1>{{ $t('contact.title') }}</h1>
        <div class="header-line"></div>
      </div>

      <div class="contact-content">
        <div class="cta-message">
          <p class="cta-intro-text">{{ $t('contact.cta.intro') }}</p>
          <h2 class="cta-title">{{ $t('contact.cta.heading') }}</h2>
          <a href="https://proud-sea-096db2110.7.azurestaticapps.net" class="cta-demo-button">
            {{ $t('contact.cta.demo-button') }}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
          <div class="stats-row">
            <div class="stat-item">
              <span class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </span>
              {{ $t('contact.cta.stat-optics') }}
            </div>
            <div class="stat-item">
              <span class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </span>
              {{ $t('contact.cta.satisfied-clients', 190) }}
            </div>
          </div>
        </div>

        <div class="form-card">
          <div v-if="showNotif" class="basic-notif">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Message sent!
          </div>

          <form @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group">
                <label for="name">{{ $t('contact.form.name') }}</label>
                <input type="text" id="name" v-model="form.name" :placeholder="$t('contact.form.placeholder')" />
              </div>
              <div class="form-group">
                <label for="surname">{{ $t('contact.form.surname') }}</label>
                <input type="text" id="surname" v-model="form.surname" :placeholder="$t('contact.form.placeholder')" />
              </div>
            </div>
            <div class="form-group">
              <label for="email">{{ $t('contact.form.email') }}</label>
              <input type="email" id="email" v-model="form.email" :placeholder="$t('contact.form.placeholder')" />
            </div>
            <div class="form-group">
              <label for="message">{{ $t('contact.form.message') }}</label>
              <textarea id="message" v-model="form.message" :placeholder="$t('contact.form.placeholder')" rows="4"></textarea>
            </div>
            <button type="submit" class="submit-button">
              {{ $t('contact.form.submit') }}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: linear-gradient(160deg, #3a4f5a 0%, #1a2a35 40%, #090d10 100%);
  color: #ffffff;
  padding: 100px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
  font-family: 'Segoe UI', sans-serif;
  position: relative;
  overflow: hidden;
}

.glow-blob {
  position: absolute;
  width: 500px;
  height: 500px;
  background: #00c1b0;
  border-radius: 50%;
  filter: blur(160px);
  opacity: 0.05;
  top: -100px;
  right: -100px;
  pointer-events: none;
}

.contact-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
  position: relative;
  z-index: 1;
}

.contact-header {
  margin-bottom: 72px;
}

.contact-header h1 {
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0 0 16px;
  text-align: left;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.5px;
}

.header-line {
  width: 40px;
  height: 2px;
  background: #00c1b0;
  border-radius: 999px;
}

.contact-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

.cta-message {
  flex: 1;
}

.cta-intro-text {
  font-size: 1rem;
  color: #00c1b0;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 16px;
}

.cta-title {
  font-size: 3.2rem;
  font-weight: 700;
  margin: 0 0 32px;
  line-height: 1.1;
  letter-spacing: -1px;
}

.cta-demo-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #00c1b0;
  color: white;
  border: none;
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 36px;
  transition: all 0.25s ease;
  text-decoration: none;
}

.cta-demo-button:hover {
  background: #00a89a;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 193, 176, 0.3);
}

.cta-demo-button svg {
  transition: transform 0.2s ease;
}

.cta-demo-button:hover svg {
  transform: translateX(3px);
}

.stats-row {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
}

.stat-icon {
  color: #00c1b0;
  display: flex;
  align-items: center;
}

.form-card {
  flex: 0 0 440px;
  background: rgba(255, 255, 255, 0.97);
  border-radius: 20px;
  padding: 36px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.basic-notif {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 193, 176, 0.1);
  color: #00a89a;
  border: 1px solid rgba(0, 193, 176, 0.3);
  padding: 10px 14px;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 0.9rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.form-group {
  margin-bottom: 16px;
  text-align: left;
}

.form-group label {
  display: block;
  color: #444;
  font-weight: 600;
  margin-bottom: 6px;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 11px 14px;
  background: #f8fafc;
  color: #1a1a1a;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.95rem;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  font-family: 'Segoe UI', sans-serif;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #b0bec5;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #00c1b0;
  box-shadow: 0 0 0 3px rgba(0, 193, 176, 0.12);
  background: #ffffff;
}

.form-group textarea {
  resize: none;
}

.submit-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #00c1b0;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  transition: all 0.25s ease;
  font-family: 'Segoe UI', sans-serif;
}

.submit-button:hover {
  background: #00a89a;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(0, 193, 176, 0.3);
}

@media (max-width: 900px) {
  .contact-content {
    flex-direction: column;
    gap: 48px;
  }

  .form-card {
    width: 100%;
    flex: none;
  }

  .cta-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 80px 0;
  }

  .contact-container {
    padding: 0 20px;
  }

  .cta-title {
    font-size: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
