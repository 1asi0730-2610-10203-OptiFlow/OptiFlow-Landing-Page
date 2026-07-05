<script setup>
import { ref } from 'vue'

const isAnnual = ref(false)

const togglePricing = () => {
  isAnnual.value = !isAnnual.value
}

const baseUrl = import.meta.env.VITE_APP_BASE_URL || 'https://proud-sea-096db2110.7.azurestaticapps.net'

const loadingPlan = ref(null)

function handleSubscribe(planKey) {
  loadingPlan.value = planKey
  window.location.href = `${baseUrl}/register`
}
</script>

<template>
  <section class="pricing" id="pricing">
    <div class="pricing-glow pricing-glow-1"></div>
    <div class="pricing-glow pricing-glow-2"></div>
    <div class="pricing-grid-bg"></div>

    <div class="pricing-container">
      <!-- Header -->
      <div class="pricing-header">
        <span class="pricing-badge">
          <span class="pricing-badge-dot"></span>
          {{ $t('pricing-section.badge') }}
        </span>
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
            <button
                class="plan-btn outline"
                :disabled="loadingPlan === 'lite'"
                @click="handleSubscribe('lite')"
            >
              {{ loadingPlan === 'lite' ? '...' : $t('pricing-section.cards.lite.cta') }}
            </button>
          </div>
        </article>

        <!-- Card Pro (Featured) -->
        <article class="pricing-card featured">
          <span class="popular-badge">{{ $t('pricing-section.popular') }}</span>
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
            <button
                class="plan-btn solid"
                :disabled="loadingPlan === 'pro'"
                @click="handleSubscribe('pro')"
            >
              {{ loadingPlan === 'pro' ? '...' : $t('pricing-section.cards.pro.cta') }}
            </button>
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
            <button
                class="plan-btn outline"
                :disabled="loadingPlan === 'max'"
                @click="handleSubscribe('max')"
            >
              {{ loadingPlan === 'max' ? '...' : $t('pricing-section.cards.max.cta') }}
            </button>
          </div>
        </article>
      </div>

      <!-- Footer Section -->
      <div class="pricing-footer">
        <p class="disclaimer" v-html="$t('pricing-section.disclaimer')"></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing {
  --bg-color: #05070a;
  --card-bg: rgba(255, 255, 255, 0.035);
  --card-border: rgba(255, 255, 255, 0.08);
  --accent-color: #00c1b0;
  --accent-bright: #00e6cf;
  --ice: #9ec3cf;
  --text-main: #ffffff;
  --text-muted: #b7c2c9;

  position: relative;
  padding: 100px 0;
  background: var(--bg-color);
  color: var(--text-main);
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
}

.pricing-grid-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(0, 193, 176, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 193, 176, 0.07) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 20%, black 30%, transparent 85%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 20%, black 30%, transparent 85%);
}

.pricing-glow {
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.35;
  pointer-events: none;
}

.pricing-glow-1 {
  width: 480px;
  height: 480px;
  top: -140px;
  left: -120px;
  background: radial-gradient(circle, rgba(0, 193, 176, 0.55), transparent 70%);
}

.pricing-glow-2 {
  width: 420px;
  height: 420px;
  bottom: -160px;
  right: -100px;
  background: radial-gradient(circle, rgba(158, 195, 207, 0.4), transparent 70%);
}

.pricing-container {
  position: relative;
  z-index: 1;
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
  gap: 18px;
  margin-bottom: 52px;
}

.pricing-badge {
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

.pricing-badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent-bright);
  box-shadow: 0 0 8px 2px rgba(0, 230, 207, 0.8);
}

.pricing-description {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0 auto;
  max-width: 700px;
}

/* Toggle Styles */
.pricing-toggle-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 64px;
}

.pricing-toggle {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border-radius: 14px;
  padding: 6px;
  display: flex;
  gap: 8px;
  border: 1px solid var(--card-border);
}

.toggle-btn {
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 26px;
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
  color: var(--text-main);
}

.toggle-btn.active {
  background: linear-gradient(135deg, var(--accent-color), #009488);
  color: white;
  box-shadow: 0 4px 16px -4px rgba(0, 193, 176, 0.6);
}

.discount-badge,
.separator {
  color: var(--accent-bright);
  font-weight: 600;
}

.toggle-btn.active .discount-badge,
.toggle-btn.active .separator {
  color: white;
  opacity: 0.9;
}

/* Grid and Cards */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: stretch;
}

.pricing-card {
  position: relative;
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--card-border);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.35s ease, box-shadow 0.35s ease;
}

.pricing-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 193, 176, 0.4);
  box-shadow: 0 20px 45px -20px rgba(0, 193, 176, 0.35);
}

.pricing-card.featured {
  border-color: rgba(0, 193, 176, 0.5);
  transform: scale(1.04);
  z-index: 2;
  box-shadow: 0 25px 60px -20px rgba(0, 193, 176, 0.35);
  background: linear-gradient(180deg, rgba(0, 193, 176, 0.08), rgba(255, 255, 255, 0.03));
}

.pricing-card.featured:hover {
  transform: scale(1.04) translateY(-8px);
  box-shadow: 0 28px 65px -18px rgba(0, 193, 176, 0.5);
}

.popular-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, var(--accent-bright), var(--accent-color));
  color: #05070a;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 7px 18px;
  border-radius: 999px;
  box-shadow: 0 6px 18px -4px rgba(0, 230, 207, 0.6);
  white-space: nowrap;
}

/* Card Top Section */
.card-top {
  padding: 44px 32px 20px 32px;
  text-align: center;
}

.plan-name {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 10px 0;
  letter-spacing: -0.5px;
  color: var(--text-main);
}

.plan-tagline {
  font-size: 15px;
  color: var(--text-muted);
  margin: 0 0 16px 0;
  line-height: 1.4;
  min-height: 42px;
}

.price-container {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 2px;
  margin-top: 10px;
}

.currency {
  font-size: 18px;
  font-weight: 600;
  transform: translateY(-25px);
  color: var(--text-muted);
}

.amount {
  font-size: 58px;
  font-weight: 700;
  line-height: 1;
  color: var(--text-main);
  letter-spacing: -1.5px;
}

.featured .amount {
  background: linear-gradient(90deg, var(--accent-bright), var(--ice));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.period {
  font-size: 16px;
  color: var(--text-muted);
  margin-left: 4px;
}

/* Card Features Section */
.card-features-wrapper {
  margin: 8px 16px 20px 16px;
  padding: 32px 24px;
  background: rgba(255, 255, 255, 0.025);
  border-radius: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.featured .card-features-wrapper {
  background: rgba(0, 193, 176, 0.06);
  border: 1px solid rgba(0, 193, 176, 0.2);
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  text-align: left;
}

.feature-list li {
  font-size: 14px;
  color: var(--text-main);
  margin-bottom: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  line-height: 1.4;
  font-weight: 500;
}

.check-icon {
  width: 22px;
  height: 22px;
  background: rgba(0, 193, 176, 0.14);
  color: var(--accent-bright);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
  margin-top: 1px;
}

.featured .check-icon {
  background: var(--accent-color);
  color: white;
}

/* Plan Button */
.plan-btn {
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
}

.plan-btn.outline {
  background: transparent;
  color: var(--accent-bright);
  border: 1.5px solid rgba(0, 193, 176, 0.5);
}

.plan-btn.outline:hover {
  background: rgba(0, 193, 176, 0.1);
  border-color: var(--accent-bright);
}

.plan-btn.solid {
  position: relative;
  background: linear-gradient(135deg, var(--accent-color), #009488);
  color: white;
  border: none;
  overflow: hidden;
  box-shadow: 0 8px 24px -8px rgba(0, 193, 176, 0.6);
}

.plan-btn.solid:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px -8px rgba(0, 193, 176, 0.8);
}

/* Footer and Disclaimer */
.pricing-footer {
  margin-top: 48px;
}

.disclaimer {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  opacity: 0.85;
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
    transform: scale(1.02) translateY(-8px);
  }
}

@media (max-width: 768px) {
  .pricing {
    padding: 70px 0;
  }

  .pricing-container {
    padding: 0 24px;
  }

  .pricing-header {
    margin-bottom: 40px;
  }

  .pricing-description {
    font-size: 15px;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 40px;
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
    font-size: 52px;
  }
}

@media (max-width: 480px) {
  .toggle-btn {
    padding: 10px 16px;
    font-size: 14px;
  }

  .card-top {
    padding: 32px 20px 16px;
  }

  .card-features-wrapper {
    margin: 8px 10px 16px;
    padding: 28px 16px;
  }

  .amount {
    font-size: 46px;
  }

  .disclaimer {
    font-size: 13px;
  }
}
</style>
