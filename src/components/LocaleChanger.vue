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
  appearance: none;
  -webkit-appearance: none;
  background-color: rgba(0, 193, 176, 0.06);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2300C1B0' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  color: #cbd5e1;
  border: 1px solid rgba(0, 193, 176, 0.3);
  border-radius: 999px;
  padding: 8px 34px 8px 16px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background-color 0.2s;
  outline: none;
}

.locale-select:hover,
.locale-select:focus {
  border-color: #00C1B0;
  color: #ffffff;
  background-color: rgba(0, 193, 176, 0.12);
}

.locale-select option {
  background: #0d1a1f;
  color: #ffffff;
}
</style>
