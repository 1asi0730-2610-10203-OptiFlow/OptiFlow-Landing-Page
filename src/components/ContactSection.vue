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
    <div class="contact-glow contact-glow-1"></div>
    <div class="contact-glow contact-glow-2"></div>
    <div class="contact-grid-bg"></div>

    <div class="contact-container">
      <div class="contact-header">
        <span class="contact-badge">
          <span class="contact-badge-dot"></span>
          {{ $t('contact.title') }}
        </span>
      </div>

      <div class="contact-content">
        <div class="cta-message">
          <p class="cta-intro-text">{{ $t('contact.cta.intro') }}</p>
          <h2 class="cta-title">{{ $t('contact.cta.heading') }}</h2>
          <a href="http://localhost:5174/register" class="cta-demo-button">
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
  --bg-color: #05070a;
  --card-bg: rgba(255, 255, 255, 0.035);
  --card-border: rgba(255, 255, 255, 0.08);
  --accent-color: #00c1b0;
  --accent-bright: #00e6cf;
  --ice: #9ec3cf;
  --text-main: #ffffff;
  --text-muted: #b7c2c9;

  background: var(--bg-color);
  color: var(--text-main);
  padding: 110px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
  font-family: 'Segoe UI', sans-serif;
  position: relative;
  overflow: hidden;
}

.contact-grid-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(0, 193, 176, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 193, 176, 0.07) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 75% 60% at 30% 30%, black 30%, transparent 85%);
  -webkit-mask-image: radial-gradient(ellipse 75% 60% at 30% 30%, black 30%, transparent 85%);
}

.contact-glow {
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  filter: blur(110px);
  opacity: 0.35;
  pointer-events: none;
}

.contact-glow-1 {
  width: 520px;
  height: 520px;
  top: -140px;
  right: -100px;
  background: radial-gradient(circle, rgba(0, 193, 176, 0.55), transparent 70%);
}

.contact-glow-2 {
  width: 420px;
  height: 420px;
  bottom: -160px;
  left: -120px;
  background: radial-gradient(circle, rgba(158, 195, 207, 0.35), transparent 70%);
}

.contact-container {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
}

.contact-header {
  margin-bottom: 56px;
}

.contact-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 999px;
  background: rgba(0, 193, 176, 0.1);
  border: 1px solid rgba(0, 193, 176, 0.4);
  color: #a6f2e8;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.contact-badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent-bright);
  box-shadow: 0 0 8px 2px rgba(0, 230, 207, 0.8);
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
  color: var(--accent-bright);
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
  background: linear-gradient(90deg, #ffffff, var(--ice) 70%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.cta-demo-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--accent-color), #009488);
  color: white;
  border: none;
  padding: 15px 32px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 36px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 8px 24px -8px rgba(0, 193, 176, 0.6);
}

.cta-demo-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -60%;
  width: 40%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.35), transparent);
  transform: skewX(-20deg);
  transition: left 0.6s ease;
}

.cta-demo-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px -8px rgba(0, 193, 176, 0.8);
}

.cta-demo-button:hover::before {
  left: 130%;
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
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--text-muted);
  width: fit-content;
  padding: 8px 16px;
  border-radius: 999px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  backdrop-filter: blur(8px);
}

.stat-icon {
  color: var(--accent-bright);
  display: flex;
  align-items: center;
}

.form-card {
  flex: 0 0 440px;
  background: var(--card-bg);
  backdrop-filter: blur(14px);
  border-radius: 22px;
  padding: 36px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
  border: 1px solid var(--card-border);
}

.basic-notif {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 193, 176, 0.12);
  color: var(--accent-bright);
  border: 1px solid rgba(0, 193, 176, 0.35);
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
  color: var(--ice);
  font-weight: 600;
  margin-bottom: 6px;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 11px 14px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-main);
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-size: 0.95rem;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  font-family: 'Segoe UI', sans-serif;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(183, 194, 201, 0.55);
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(0, 193, 176, 0.18);
  background: rgba(0, 193, 176, 0.06);
}

.form-group textarea {
  resize: none;
}

.submit-button {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--accent-color), #009488);
  color: white;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  font-family: 'Segoe UI', sans-serif;
  overflow: hidden;
  box-shadow: 0 8px 24px -8px rgba(0, 193, 176, 0.6);
}

.submit-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -60%;
  width: 40%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.35), transparent);
  transform: skewX(-20deg);
  transition: left 0.6s ease;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px -8px rgba(0, 193, 176, 0.8);
}

.submit-button:hover::before {
  left: 130%;
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
