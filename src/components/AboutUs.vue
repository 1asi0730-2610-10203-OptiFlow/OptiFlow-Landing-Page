<template>
  <section class="about-section" id="about-us">
    <div class="about-bg-decoration"></div>

    <div class="about-inner">
      <div class="about-title-wrap">
        <h2 class="about-title">{{ $t('about.title') }}</h2>
        <div class="title-line"></div>
      </div>

      <div class="about-cards">
        <div class="about-card">
          <div class="card-icon mission-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h3 class="card-heading">{{ $t('about.mission.title') }}</h3>
          <p class="card-text">{{ $t('about.mission.text') }}</p>
        </div>

        <div class="about-card">
          <div class="card-icon vision-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="3"/>
              <line x1="12" y1="2" x2="12" y2="5"/>
              <line x1="12" y1="19" x2="12" y2="22"/>
              <line x1="2" y1="12" x2="5" y2="12"/>
              <line x1="19" y1="12" x2="22" y2="12"/>
            </svg>
          </div>
          <h3 class="card-heading">{{ $t('about.vision.title') }}</h3>
          <p class="card-text">{{ $t('about.vision.text') }}</p>
        </div>
      </div>

      <div class="about-banner">
        <div class="banner-logo-mark">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        </div>
        <h4 class="banner-title">OptiFlow</h4>
        <p class="banner-text">{{ $t('about.banner') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background: linear-gradient(160deg, #1a7a72 0%, #0d4a45 60%, #0a3330 100%);
  padding: 80px 50px 100px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.about-bg-decoration {
  position: absolute;
  top: -120px;
  right: -120px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: rgba(0, 193, 176, 0.08);
  filter: blur(80px);
  pointer-events: none;
}

.about-inner {
  position: relative;
  z-index: 1;
}

.about-title-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  gap: 14px;
}

.about-title {
  font-family: 'Segoe UI', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #ffffff;
  text-align: center;
  margin: 0;
  letter-spacing: 1px;
}

.title-line {
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #00c1b0, rgba(0,193,176,0.1));
  border-radius: 999px;
}

.about-cards {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.about-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  padding: 44px 48px;
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.about-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.mission-icon {
  background: rgba(0, 193, 176, 0.1);
  color: #00c1b0;
  border: 1.5px solid rgba(0, 193, 176, 0.25);
}

.vision-icon {
  background: rgba(0, 193, 176, 0.1);
  color: #00c1b0;
  border: 1.5px solid rgba(0, 193, 176, 0.25);
}

.card-heading {
  font-family: 'Segoe UI', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #00c1b0;
  margin: 0;
}

.card-text {
  font-family: 'Segoe UI', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #333;
  text-align: center;
  margin: 0;
  line-height: 1.75;
}

.about-banner {
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 193, 176, 0.15);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  padding: 36px 48px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.banner-logo-mark {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(0, 193, 176, 0.12);
  border: 1px solid rgba(0, 193, 176, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00c1b0;
}

.banner-title {
  font-family: 'Segoe UI', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #ffffff;
  margin: 0;
}

.banner-text {
  font-family: 'Segoe UI', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  line-height: 1.75;
  max-width: 860px;
}

@media (max-width: 768px) {
  .about-section {
    padding: 60px 24px 80px;
  }

  .about-cards {
    flex-direction: column;
    gap: 16px;
  }

  .about-card {
    padding: 36px 28px;
  }

  .about-banner {
    padding: 28px 24px;
  }

  .about-title {
    font-size: 32px;
  }
}
</style>
