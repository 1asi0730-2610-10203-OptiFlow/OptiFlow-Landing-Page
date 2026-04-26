<script setup>
import { ref } from 'vue';

const isAnnual = ref(false);

const togglePricing = () => {
  isAnnual.value = !isAnnual.value;
};
</script>

<template>
  <section class="pricing" id="precios">
    <div class="pricing-container">
      <!-- Header -->
      <div class="pricing-header">
        <span class="pricing-badge">{{ $t('pricing-section.badge') }}</span>
        <p class="pricing-description" v-html="$t('pricing-section.description')"></p>
      </div>

      <!-- Toggle -->
      <div class="pricing-toggle-wrapper">
        <div class="pricing-toggle">
          <button 
            class="toggle-btn" 
            :class="{ active: !isAnnual }" 
            @click="togglePricing">
            {{ $t('pricing-section.toggle.monthly') }}
          </button>
          <button 
            class="toggle-btn" 
            :class="{ active: isAnnual }" 
            @click="togglePricing">
            {{ $t('pricing-section.toggle.annual') }} <span class="separator">·</span> <span class="discount-badge">{{ $t('pricing-section.toggle.save') }}</span>
          </button>
        </div>
      </div>

      <!-- Grid -->
      <div class="pricing-grid">
        <!-- Card Lite -->
        <article class="pricing-card">
          <div class="card-top">
            <h3 class="plan-name">{{ $t('pricing-section.cards.lite.name') }}</h3>
            <p class="plan-tagline" v-html="$t('pricing-section.cards.lite.tagline')"></p>
            <div class="price-container">
              <span class="currency">S/.</span>
              <span class="amount">{{ isAnnual ? $t('pricing-section.cards.lite.price_annual') : $t('pricing-section.cards.lite.price_monthly') }}</span>
              <span class="period">{{ $i18n.locale === 'es' ? '/mes' : '/mo' }}</span>
            </div>
          </div>
          <div class="card-features-wrapper">
            <ul class="feature-list">
              <li v-for="(feature, index) in $tm('pricing-section.cards.lite.features')" :key="index">
                <span class="check-icon">✓</span> {{ $rt(feature) }}
              </li>
            </ul>
            <button class="plan-btn outline">{{ $t('pricing-section.cards.lite.cta') }}</button>
          </div>
        </article>

        <!-- Card Pro (Featured) -->
        <article class="pricing-card featured">
          <div class="card-top">
            <h3 class="plan-name">{{ $t('pricing-section.cards.pro.name') }}</h3>
            <p class="plan-tagline" v-html="$t('pricing-section.cards.pro.tagline')"></p>
            <div class="price-container">
              <span class="currency">S/.</span>
              <span class="amount">{{ isAnnual ? $t('pricing-section.cards.pro.price_annual') : $t('pricing-section.cards.pro.price_monthly') }}</span>
              <span class="period">{{ $i18n.locale === 'es' ? '/mes' : '/mo' }}</span>
            </div>
          </div>
          <div class="card-features-wrapper">
            <ul class="feature-list">
              <li v-for="(feature, index) in $tm('pricing-section.cards.pro.features')" :key="index">
                <span class="check-icon">✓</span> {{ $rt(feature) }}
              </li>
            </ul>
            <button class="plan-btn solid">{{ $t('pricing-section.cards.pro.cta') }}</button>
          </div>
        </article>

        <!-- Card Max -->
        <article class="pricing-card">
          <div class="card-top">
            <h3 class="plan-name">{{ $t('pricing-section.cards.max.name') }}</h3>
            <p class="plan-tagline" v-html="$t('pricing-section.cards.max.tagline')"></p>
            <div class="price-container">
              <span class="currency">S/.</span>
              <span class="amount">{{ isAnnual ? $t('pricing-section.cards.max.price_annual') : $t('pricing-section.cards.max.price_monthly') }}</span>
              <span class="period">{{ $i18n.locale === 'es' ? '/mes' : '/mo' }}</span>
            </div>
          </div>
          <div class="card-features-wrapper">
            <ul class="feature-list">
              <li v-for="(feature, index) in $tm('pricing-section.cards.max.features')" :key="index">
                <span class="check-icon">✓</span> {{ $rt(feature) }}
              </li>
            </ul>
            <button class="plan-btn outline">{{ $t('pricing-section.cards.max.cta') }}</button>
          </div>
        </article>
      </div>

      <!-- Footer Section -->
      <div class="pricing-footer">
        <p class="disclaimer" v-html="$t('pricing-section.disclaimer')"></p>
        <div class="contact-btn-wrapper">
          <button class="contact-btn">{{ $t('pricing-section.contact_btn') }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing {
  --bg-color: #000000;
  --card-bg: #000000;
  --accent-color: #00f2c3;
  --secondary-accent: #a3e635;
  --text-main: #ffffff;
  --text-muted: #a0aec0;
  --border-color: #064e3b;
  --hover-shadow: rgba(0, 242, 195, 0.15);

  padding: 80px 0;
  background: linear-gradient(135deg, #8ee0a3 0%, #04bda8 100%);
  color: var(--text-main);
}

.pricing-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
}

.pricing-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  margin-bottom: 52px;
}

.pricing-badge {
  display: inline-block;
  background: var(--accent-color);
  color: var(--bg-color);
  font-family: 'Segoe UI', sans-serif;
  font-size: 24px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  white-space: nowrap;
  flex-shrink: 0;
  line-height: 1.2;
}

.pricing-description {
  font-family: 'Segoe UI', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-main); /* Cambiado para mejor contraste en el fondo nuevo */
  margin: 0 auto;
  padding-top: 4px;
  max-width: 800px;
}

@media (max-width: 850px) {
  .pricing-header {
    flex-direction: column;
    gap: 16px;
  }
}

/* Toggle Styles */
.pricing-toggle-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 64px;
}

.pricing-toggle {
  background: var(--card-bg);
  border-radius: 14px;
  padding: 6px;
  display: flex;
  gap: 8px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
  border: 1px solid var(--border-color);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.pricing-toggle:hover {
  box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.6);
  transform: translateY(-2px);
}

.toggle-btn {
  font-family: 'Segoe UI', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 28px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

.toggle-btn:hover:not(.active) {
  background: rgba(255, 255, 255, 0.05);
  transform: scale(1.02);
}

.toggle-btn.active {
  background: var(--accent-color);
  color: var(--bg-color);
}

.toggle-btn.active:hover {
  background: var(--secondary-accent);
  transform: scale(1.02);
}

.discount-badge {
  color: var(--accent-color);
  font-weight: 500;
}

.toggle-btn.active .discount-badge {
  color: var(--bg-color);
  opacity: 0.9;
}

.separator {
  color: var(--accent-color);
  font-weight: bold;
}

.toggle-btn.active .separator {
  color: var(--bg-color);
}


/* Grid and Cards */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: stretch;
}

.pricing-card {
  background: var(--card-bg);
  border: 2px solid var(--border-color);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
  position: relative;
}

.pricing-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent-color);
  box-shadow: 0 15px 35px var(--hover-shadow);
}

.pricing-card.featured {
  border-color: var(--accent-color);
  border-width: 2px;
  transform: scale(1.05);
  z-index: 2;
  box-shadow: 0px 30px 60px rgba(0, 242, 195, 0.1);
  background: var(--bg-color);
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-12px);
  box-shadow: 0 20px 45px var(--hover-shadow);
}

/* Card Top Section */
.card-top {
  padding: 48px 32px 24px 32px;
  text-align: center;
}

.featured .pricing-badge {
  background: var(--accent-color);
  color: var(--bg-color);
  padding: 10px 20px;
  border-radius: 10px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 24px;
  font-weight: 600;
}

.plan-name {
  font-family: 'Segoe UI', sans-serif;
  font-size: 38px;
  font-weight: 700;
  margin: 0 0 12px 0;
  letter-spacing: -0.5px;
  color: var(--text-main);
}

.plan-tagline {
  font-family: 'Segoe UI', sans-serif;
  font-size: 16px;
  color: var(--text-muted);
  margin: 0 0 16px 0;
  line-height: 1.4;
}

/* Price Alignment Fix */
.price-container {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 2px;
  margin-top: 10px;
}

.currency {
  font-family: 'Segoe UI', sans-serif;
  font-size: 18px;
  font-weight: 600;
  transform: translateY(-25px); /* Top alignment */
  color: var(--text-muted);
}

.amount {
  font-family: 'Segoe UI', sans-serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 1;
  color: var(--text-main);
  letter-spacing: -1.5px;
}

.period {
  font-family: 'Segoe UI', sans-serif;
  font-size: 18px;
  color: var(--text-muted);
  margin-left: 4px;
}

/* Card Features Section (The Inner Box) */
.card-features-wrapper {
  margin: 12px 16px 16px 16px;
  padding: 40px 24px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.featured .card-features-wrapper {
  background: rgba(0, 242, 195, 0.05);
  border: 1px solid rgba(0, 242, 195, 0.2);
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  text-align: left;
}

.feature-list li {
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  color: var(--text-main);
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  line-height: 1.3;
  font-weight: 500;
}

/* Circular Check Icon */
.check-icon {
  width: 24px;
  height: 24px;
  background: var(--border-color);
  color: var(--text-main);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
}

.pricing-card:hover .check-icon {
  background: var(--accent-color);
  color: var(--bg-color);
}

.featured .check-icon {
  background: var(--accent-color);
  color: var(--bg-color);
}

/* Plan Button */
.plan-btn {
  width: 100%;
  padding: 16px;
  border-radius: 14px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
}

.plan-btn.outline {
  background: transparent;
  color: var(--accent-color);
  border: 1.5px solid var(--accent-color);
}

.plan-btn.outline:hover {
  background: var(--accent-color);
  color: var(--bg-color);
}

.plan-btn.solid {
  background: var(--accent-color);
  color: var(--bg-color);
  border: none;
}

.plan-btn.solid:hover {
  background: var(--secondary-accent);
  transform: scale(1.02);
}

/* Footer and Disclaimer */
.pricing-footer {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.disclaimer {
  font-family: 'Segoe UI', sans-serif;
  font-size: 16px;
  color: var(--text-muted);
  line-height: 1.6;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.contact-btn-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.contact-btn {
  background: var(--accent-color);
  color: var(--bg-color);
  border: none;
  border-radius: 12px;
  padding: 14px 28px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 10px 20px rgba(0, 242, 195, 0.2);
}

.contact-btn:hover {
  background: var(--secondary-accent);
  transform: translateY(-2px);
  box-shadow: 0px 15px 30px rgba(163, 230, 53, 0.3);
}

/* Responsive Design */
@media (max-width: 1050px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  .pricing-card.featured {
    grid-column: span 2;
    max-width: 480px;
    margin: 0 auto;
    transform: scale(1.02);
  }

  .pricing-card.featured:hover {
    transform: scale(1.02) translateY(-10px);
  }
}

@media (max-width: 768px) {
  .pricing-container {
    padding: 0 24px;
  }

  .pricing-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
    margin-bottom: 40px;
  }

  .pricing-description {
    padding-top: 0;
    font-size: 15px;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .pricing-card.featured {
    grid-column: span 1;
    transform: none;
    max-width: 420px;
  }

  .pricing-card.featured:hover {
    transform: translateY(-8px);
  }

  .amount {
    font-size: 56px;
  }

  .contact-btn-wrapper {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .pricing {
    padding: 60px 0;
  }

  .toggle-btn {
    padding: 10px 16px;
    font-size: 14px;
  }

  .card-top {
    padding: 32px 20px;
  }

  .card-features-wrapper {
    margin: 10px;
    padding: 32px 16px;
  }

  .amount {
    font-size: 48px;
  }

  .disclaimer {
    font-size: 13px;
    line-height: 1.5;
  }
}
</style>
