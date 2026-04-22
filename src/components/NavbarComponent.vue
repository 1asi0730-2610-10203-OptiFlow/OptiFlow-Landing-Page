<script setup>
import {ref } from "vue";
import logo from "../assets/logo.svg";



const activeItem = ref('Features'); // 'Features' is active by default
const menuItems = ['About Us', 'Features', 'Two Experiences', 'Pricing', 'Contact'];
const hover = () => {
  return !selected;
}


</script>

<template>

<header class = "main-header" id = "main-header">
  <nav class="nav-bar">
    <div class="logo">
      <img :src="logo" class="logo-img">
      <span class="logo-text">
        Opti<span class="highlight">Flow</span>
      </span>
    </div>
    <ul class="nav-list">
      <button
          v-for="item in menuItems"
          :key="item"
          @click="activeItem = item"
          :class="['nav-item', { 'is-active': activeItem === item }]"
      >
        {{ item }}
      </button>
    </ul>

    <div class = "login-btn-wrapper">
      <button class ="login-btn" id ="login-btn"> Iniciar Sesión </button>
    </div>

  </nav>
</header>
</template>

<style scoped>

.main-header {
  background: black;
  flex-direction: column;
  font-family: "Istok Web";
  justify-content: space-between;

}

.main-header::after {
  background: white;
  display: flex;
  justify-content: center;
  width: 0%;
}
.main-header:hover {
  transition: background ease-in-out 0.5s;

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
}

/* Create the hidden line */
.nav-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #42b883;
  transition: width 0.3s ease-in-out; /* This makes it "spawn" smoothly */
}

.nav-item:hover {
  color:white;
  transition: width 0.5s ease-in-out;

}
.nav-item:hover::after {
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
  transition: 0.2s ease;
}

.login-btn:hover {
  background: #c3dde6;
}

.login-btn:hover {
  background: #c8e3ed;
  transition: 0.2s ease-in-out;

}

.login-btn-wrapper {
  display:flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
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

</style>