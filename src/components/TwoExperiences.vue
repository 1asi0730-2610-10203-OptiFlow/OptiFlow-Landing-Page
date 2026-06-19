<script setup>
</script>

<template>
  <section class="two-experiences" id="two-experiences">
    <div class="glow-blob glow-client"></div>
    <div class="glow-blob glow-optics"></div>

    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ $t('two-experiences.title') }}</h2>
        <div class="title-underline"></div>
      </div>

      <div class="cards-wrapper">
        <!-- Client Card -->
        <article class="exp-card">
          <div class="card-top-bar client-bar"></div>
          <div class="icon-wrap client-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <h3 class="card-heading">{{ $t('two-experiences.client.heading') }}</h3>
          <p class="card-subtitle">{{ $t('two-experiences.client.subtitle') }}</p>
          <p class="card-body">{{ $t('two-experiences.client.description') }}</p>
        </article>

        <div class="vs-divider">
          <div class="vs-line"></div>
          <div class="vs-dot"></div>
          <div class="vs-line"></div>
        </div>

        <!-- Optics Card -->
        <article class="exp-card optics-card">
          <div class="card-top-bar optics-bar"></div>
          <div class="icon-wrap optics-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
          </div>
          <h3 class="card-heading">{{ $t('two-experiences.optics.heading') }}</h3>
          <p class="card-body">{{ $t('two-experiences.optics.description1') }}</p>
          <p class="card-body">{{ $t('two-experiences.optics.description2') }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.two-experiences {
  --accent: #00f2c3;
  --secondary: #a3e635;
  --bg: #050a0a;
  --border: #064e3b;
  --text-main: #ffffff;
  --text-muted: #a0aec0;

  position: relative;
  background: linear-gradient(160deg, #050a0a 0%, #000d0a 100%);
  padding: 120px 20px;
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
}

.glow-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.08;
  pointer-events: none;
}

.glow-client {
  width: 600px;
  height: 600px;
  background: var(--accent);
  top: -150px;
  left: -100px;
}

.glow-optics {
  width: 600px;
  height: 600px;
  background: var(--secondary);
  bottom: -150px;
  right: -100px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 72px;
}

.section-title {
  color: var(--text-main);
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin: 0 0 20px;
  text-transform: uppercase;
}

.title-underline {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--secondary));
  border-radius: 999px;
  margin: 0 auto;
}

.cards-wrapper {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: stretch;
  gap: 0;
}

.exp-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 28px;
  padding: 48px 40px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.exp-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent);
  box-shadow: 0 24px 64px rgba(0, 242, 195, 0.12);
  background: rgba(0, 242, 195, 0.03);
}

.exp-card.optics-card:hover {
  border-color: var(--secondary);
  box-shadow: 0 24px 64px rgba(163, 230, 53, 0.12);
  background: rgba(163, 230, 53, 0.03);
}

.card-top-bar {
  position: absolute;
  top: 0;
  left: 32px;
  right: 32px;
  height: 3px;
  border-radius: 0 0 4px 4px;
}

.client-bar {
  background: linear-gradient(90deg, var(--accent), rgba(0, 242, 195, 0.1));
}

.optics-bar {
  background: linear-gradient(90deg, var(--secondary), rgba(163, 230, 53, 0.1));
}

.icon-wrap {
  width: 68px;
  height: 68px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.exp-card:hover .icon-wrap {
  transform: scale(1.1);
}

.client-icon {
  background: rgba(0, 242, 195, 0.08);
  border: 1px solid rgba(0, 242, 195, 0.2);
  color: var(--accent);
}

.optics-icon {
  background: rgba(163, 230, 53, 0.08);
  border: 1px solid rgba(163, 230, 53, 0.2);
  color: var(--secondary);
}

.card-heading {
  font-size: 1.55rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 14px;
  letter-spacing: -0.3px;
}

.card-subtitle {
  font-size: 0.95rem;
  color: var(--accent);
  font-style: italic;
  margin: 0 0 20px;
  line-height: 1.6;
  opacity: 0.85;
}

.card-body {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.75;
  margin: 0 0 14px;
}

.card-body:last-of-type {
  margin-bottom: 0;
}

.vs-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 36px;
  gap: 0;
}

.vs-line {
  width: 1px;
  flex: 1;
  background: linear-gradient(to bottom, transparent, rgba(6, 78, 59, 0.6), transparent);
}

.vs-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 16px var(--accent), 0 0 32px rgba(0, 242, 195, 0.3);
  flex-shrink: 0;
  margin: 12px 0;
}

@media (max-width: 860px) {
  .two-experiences {
    padding: 80px 20px;
  }

  .cards-wrapper {
    grid-template-columns: 1fr;
  }

  .vs-divider {
    flex-direction: row;
    padding: 28px 0;
  }

  .vs-line {
    flex: 1;
    width: auto;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(6, 78, 59, 0.6), transparent);
  }

  .vs-dot {
    margin: 0 16px;
  }

  .section-title {
    font-size: 2rem;
  }

  .exp-card {
    padding: 36px 28px;
  }
}
</style>
