<script setup>
import { useI18n } from 'vue-i18n'

// useI18n({ useScope: 'global' }) gives us the same writable locale ref
// that $i18n.locale exposes in the Options API — v-model binds directly to it.
const { locale } = useI18n({ useScope: 'global' })

const locales = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
]
</script>

<template>
  <select v-model="locale" class="locale-select" aria-label="Language selector">
    <option v-for="loc in locales" :key="loc.code" :value="loc.code">
      {{ loc.label }}
    </option>
  </select>
</template>

<style scoped>
.locale-select {
  background: transparent;
  color: #cbd5e1;
  border: 1px solid #334155;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 13px;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
  outline: none;
}

.locale-select:hover,
.locale-select:focus {
  border-color: #00C1B0;
  color: #ffffff;
}

.locale-select option {
  background: #0f172a;
  color: #ffffff;
}
</style>
