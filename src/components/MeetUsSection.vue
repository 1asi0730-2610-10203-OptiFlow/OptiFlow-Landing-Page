<script setup>
const PRODUCT_VIDEO_ID = 'Girt_BoVPt4';

const TEAM_VIDEO_EMBED_URL = 'https://www.canva.com/design/DAHORfJQdwA/3K6Vy6wpk10S1bUKFjRbQw/watch?embed';
const TEAM_VIDEO_LINK = 'https://www.canva.com/design/DAHORfJQdwA/3K6Vy6wpk10S1bUKFjRbQw/watch?utm_content=DAHORfJQdwA&utm_campaign=designshare&utm_medium=embeds&utm_source=link';
</script>

<template>
  <section class="meet-us-section" id="meet-us">
    <div class="meet-us-grid-bg"></div>
    <div class="meet-us-glow meet-us-glow-1"></div>
    <div class="meet-us-glow meet-us-glow-2"></div>

    <div class="meet-us-container">
      <div class="meet-us-header">
        <span class="meet-us-badge">
          <span class="meet-us-badge-dot"></span>
          {{ $t('meet-us.badge') }}
        </span>
        <h2 class="meet-us-title">{{ $t('meet-us.title') }}</h2>
        <p class="meet-us-subtitle">{{ $t('meet-us.subtitle') }}</p>
      </div>

      <div class="videos-grid">
        <article class="video-card">
          <div class="video-frame">
            <iframe
              :src="`https://www.youtube.com/embed/${PRODUCT_VIDEO_ID}`"
              title="OptiFlow - Product overview"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          <span class="video-label product-label">{{ $t('meet-us.product.label') }}</span>
          <h3 class="video-heading">{{ $t('meet-us.product.heading') }}</h3>
          <p class="video-text">{{ $t('meet-us.product.text') }}</p>
        </article>

        <article class="video-card">
          <div class="video-frame">
            <iframe
              :src="TEAM_VIDEO_EMBED_URL"
              title="OptiFlow - Meet the team"
              loading="lazy"
              allow="fullscreen"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </div>
          <a :href="TEAM_VIDEO_LINK" target="_blank" rel="noopener" class="video-attribution">OptiFlow, de Nicolás Fernando</a>
          <span class="video-label team-label">{{ $t('meet-us.team.label') }}</span>
          <h3 class="video-heading">{{ $t('meet-us.team.heading') }}</h3>
          <p class="video-text">{{ $t('meet-us.team.text') }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.meet-us-section {
  --bg-color: #05070a;
  --card-bg: rgba(255, 255, 255, 0.035);
  --card-border: rgba(255, 255, 255, 0.08);
  --accent-color: #00c1b0;
  --accent-bright: #00e6cf;
  --secondary: #a3e635;
  --ice: #9ec3cf;
  --text-main: #ffffff;
  --text-muted: #b7c2c9;

  position: relative;
  background: linear-gradient(160deg, #050a0a 0%, #000d0a 100%);
  padding: 120px 20px;
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
}

.meet-us-grid-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(0, 193, 176, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 193, 176, 0.07) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 60% at 70% 20%, black 30%, transparent 85%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 70% 20%, black 30%, transparent 85%);
}

.meet-us-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.16;
  pointer-events: none;
  z-index: 0;
}

.meet-us-glow-1 {
  width: 560px;
  height: 560px;
  background: var(--accent-color);
  top: -160px;
  left: -120px;
}

.meet-us-glow-2 {
  width: 520px;
  height: 520px;
  background: var(--secondary);
  bottom: -160px;
  right: -120px;
}

.meet-us-container {
  position: relative;
  z-index: 1;
  max-width: 1140px;
  margin: 0 auto;
}

.meet-us-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.meet-us-badge {
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

.meet-us-badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent-bright);
  box-shadow: 0 0 8px 2px rgba(0, 230, 207, 0.8);
}

.meet-us-title {
  color: var(--text-main);
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin: 0;
  text-transform: uppercase;
}

.meet-us-subtitle {
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 0;
}

.videos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
}

.video-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 28px;
  padding: 24px;
  backdrop-filter: blur(14px);
  transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.35s ease, border-color 0.35s ease;
}

.video-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 193, 176, 0.35);
  box-shadow: 0 24px 64px rgba(0, 193, 176, 0.12);
}

.video-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 18px;
  overflow: hidden;
  background: #000;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
  margin-bottom: 24px;
}

.video-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-attribution {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
  opacity: 0.6;
  text-decoration: none;
  margin: -14px 0 16px;
  transition: opacity 0.2s ease, color 0.2s ease;
}

.video-attribution:hover {
  opacity: 1;
  color: var(--accent-bright);
}

.video-label {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.product-label {
  color: var(--accent-bright);
}

.team-label {
  color: var(--secondary);
}

.video-heading {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 12px;
  letter-spacing: -0.3px;
}

.video-text {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.75;
  margin: 0;
}

@media (max-width: 860px) {
  .meet-us-section {
    padding: 80px 20px;
  }

  .videos-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .meet-us-title {
    font-size: 2rem;
  }

  .video-card {
    padding: 18px;
  }
}
</style>
