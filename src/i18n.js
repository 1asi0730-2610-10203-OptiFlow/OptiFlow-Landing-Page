import { createI18n } from 'vue-i18n'

// Equivalent of require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
// Vite uses import.meta.glob instead of webpack's require.context
function loadLocaleMessages() {
  const locales = import.meta.glob('./locales/*.json', { eager: true })
  const messages = {}
  for (const path in locales) {
    const matched = path.match(/([A-Za-z0-9-_]+)\.json$/i)
    if (matched && matched[1]) {
      messages[matched[1]] = locales[path].default
    }
  }
  return messages
}

export default createI18n({
  legacy: false,
  locale: import.meta.env.VITE_I18N_LOCALE || 'en',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
})
