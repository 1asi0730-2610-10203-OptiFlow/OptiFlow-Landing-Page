<template>
  <footer class="footer-section">
    <div class="footer-divider"></div>
    <p class="footer-copy">{{ $t('footer.copyright') }}</p>
  </footer>
</template>

<style scoped>
.footer-section {
  background-color: #ffffff;
  color: #333333;
  padding: 40px 0;
  width: 100%;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}

.footer-divider {
  border-top: 1px solid #eeeeee;
  max-width: 1200px;
  margin: 0 auto 24px auto;
}

.footer-copy {
  font-size: 0.9rem;
  color: #555555;
  margin: 0;
}
</style>
