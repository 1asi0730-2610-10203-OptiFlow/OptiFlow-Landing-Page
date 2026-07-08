<script setup>
import { ref, onMounted } from 'vue'

// Hardcoded on purpose: the landing page ships to GitHub Pages, which has no build-time secrets.
// Same OAuth client id as the main app. The landing page's origin must be added to this client's
// "Authorized JavaScript origins" in the Google Cloud console for the button to render.
const GOOGLE_CLIENT_ID = '142434327690-3f06ihg44vvcre2cq1uu12o1lkcqaklu.apps.googleusercontent.com'
const appBaseUrl = import.meta.env.VITE_APP_BASE_URL || 'https://proud-sea-096db2110.7.azurestaticapps.net'

const container = ref(null)
let initialized = false

function render() {
  if (!window.google?.accounts?.id || !container.value) return false
  if (!initialized) {
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: ({ credential }) => {
        // Hand the Google credential to the app's login, which exchanges it for a session.
        window.location.href = `${appBaseUrl}/login?gcred=${encodeURIComponent(credential)}`
      },
    })
    initialized = true
  }
  window.google.accounts.id.renderButton(container.value, {
    type: 'standard',
    theme: 'outline',
    size: 'large',
    text: 'continue_with',
    shape: 'pill',
    logo_alignment: 'center',
  })
  return true
}

onMounted(() => {
  // The GSI script loads async from index.html, so it may not be ready yet — retry briefly.
  if (!render()) {
    let tries = 0
    const timer = setInterval(() => {
      if (render() || ++tries >= 25) clearInterval(timer)
    }, 200)
  }
})
</script>

<template>
  <div ref="container" class="google-login-btn"></div>
</template>

<style scoped>
.google-login-btn { display: inline-flex; align-items: center; }
</style>
