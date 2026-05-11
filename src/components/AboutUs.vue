<script setup>
import '@fontsource/josefin-sans/700.css';
import '@fontsource/montserrat/400.css';
</script>

<template>
  <section class="about-section" id="about-us">
    <div class="about-title-wrap">
      <h2 class="about-title">{{ $t('about.title') }}</h2>
    </div>

    <div class="about-cards">
      <div class="about-card">
        <h3 class="card-heading">{{ $t('about.mission.title') }}</h3>
        <p class="card-text">{{ $t('about.mission.text') }}</p>
      </div>
      <div class="about-card">
        <h3 class="card-heading">{{ $t('about.vision.title') }}</h3>
        <p class="card-text">{{ $t('about.vision.text') }}</p>
      </div>
    </div>

    <div class="about-banner">
      <h4 class="banner-title">OptiFlow</h4>
      <p class="banner-text">{{ $t('about.banner') }}</p>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background: linear-gradient(to bottom, #2bc3b6, #155d57);
  padding: 30px 50px 112px;
  width: 100%;
  box-sizing: border-box;
  opacity: 0.83;
}

.about-title-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 19px;
}

.about-title {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #000000;
  text-align: center;
  margin: 0;
}

.about-cards {
  display: flex;
  gap: 19px;
  margin-bottom: 19px;
}

.about-card {
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 56px;
  box-sizing: border-box;
  overflow: hidden;
  flex: 1;
}

.card-heading {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #00c1b0;
  margin: 0;
  white-space: nowrap;
}

.card-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  text-align: center;
  margin: 0;
  line-height: 1.6;
}

.about-banner {
  background: #000000;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-height: 177px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 24px 40px;
  box-sizing: border-box;
  text-align: center;
}

.banner-title {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  margin: 0;
}

.banner-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  margin: 0;
  line-height: 1.6;
  max-width: 866px;
}

@media (max-width: 768px) {
  .about-section {
    padding: 30px 24px 60px;
  }

  .about-cards {
    flex-direction: column;
  }

  .about-card {
    height: auto;
    padding: 32px 24px;
  }
}
</style>
