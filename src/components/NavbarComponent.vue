<script setup>
import { ref } from "vue";
import logo from "../assets/logo.svg";
import LocaleChanger from "./LocaleChanger.vue";

const activeItem = ref('features');
const menuOpen = ref(false);

const menuItems = [
  { id: 'about-us',        key: 'navbar.about-us',        href: '#about-us' },
  { id: 'features',        key: 'navbar.features',        href: '#features' },
  { id: 'two-experiences', key: 'navbar.two-experiences', href: '#two-experiences' },
  { id: 'pricing',         key: 'navbar.pricing',         href: '#pricing' },
  { id: 'contact',         key: 'navbar.contact',         href: '#contact' },
];

function handleNavClick(id) {
  activeItem.value = id;
  menuOpen.value = false;
}
</script>

<template>
  <header class="main-header" id="main-header">
    <nav class="nav-bar">
      <div class="logo">
        <img :src="logo" class="logo-img" alt="OptiFlow logo">
        <span class="logo-text">
          Opti<span class="highlight">Flow</span>
        </span>
      </div>

      <ul class="nav-list">
        <a
          v-for="item in menuItems"
          :key="item.id"
          :href="item.href"
          @click="handleNavClick(item.id)"
          :class="['nav-item', { 'is-active': activeItem === item.id }]"
        >
          {{ $t(item.key) }}
        </a>
      </ul>

      <div class="login-btn-wrapper">
        <LocaleChanger />
        <pv-button as="a" href="https://proud-sea-096db2110.7.azurestaticapps.net" class="login-btn" id="login-btn">{{ $t('navbar.login') }}</pv-button>
      </div>

      <button class="hamburger" :class="{ 'is-open': menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>

    <div class="mobile-menu" :class="{ 'is-open': menuOpen }">
      <a
        v-for="item in menuItems"
        :key="item.id"
        :href="item.href"
        @click="handleNavClick(item.id)"
        :class="['mobile-nav-item', { 'is-active': activeItem === item.id }]"
      >
        {{ $t(item.key) }}
      </a>
      <div class="mobile-actions">
        <LocaleChanger />
        <pv-button as="a" href="https://proud-sea-096db2110.7.azurestaticapps.net" class="login-btn">{{ $t('navbar.login') }}</pv-button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  background: black;
  font-family: "Istok Web";
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-bar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 15px 40px;
  box-sizing: border-box;
  font-size: 16px;
}

.nav-list {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.nav-item {
  position: relative;
  background: transparent;
  color: #94a3b8;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  transition: color 0.3s;
  text-decoration: none;
  display: inline-block;
}

.nav-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #42b883;
  transition: width 0.3s ease-in-out;
}

.nav-item:hover {
  color: white;
}

.nav-item:hover::after,
.nav-item.is-active::after {
  width: 100%;
}

.login-btn {
  background: #9ec3cf;
  color: black;
  padding: 10px 30px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  text-decoration: none;
}

.login-btn:hover {
  background: #c8e3ed;
}

.login-btn-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
}

.logo-img {
  height: 65px;
}

.logo-text {
  font-size: 18px;
  font-weight: 500;
}

.highlight {
  color: #00C1B0;
}

/* Hamburger — hidden on desktop */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.hamburger.is-open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.is-open span:nth-child(2) {
  opacity: 0;
}

.hamburger.is-open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile dropdown menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 24px 20px;
  border-top: 1px solid #1e1e1e;
  background: black;
}

.mobile-nav-item {
  color: #94a3b8;
  text-decoration: none;
  font-size: 16px;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #1a1a1a;
  transition: color 0.2s;
}

.mobile-nav-item:hover,
.mobile-nav-item.is-active {
  color: white;
}

.mobile-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 12px;
}

@media (max-width: 768px) {
  .nav-bar {
    grid-template-columns: auto auto;
    justify-content: space-between;
    padding: 12px 20px;
  }

  .nav-list,
  .login-btn-wrapper {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-menu.is-open {
    display: flex;
  }
}
</style>
