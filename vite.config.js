import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// i18n options (Vite equivalent of vue.config.js pluginOptions.i18n):
//   locale: 'en'
//   fallbackLocale: 'en'
//   localeDir: 'src/locales'
//   enableInSFC: true  →  install @intlify/unplugin-vue-i18n to unlock <i18n> blocks in SFCs
export default defineConfig({
  plugins: [vue()],
})
