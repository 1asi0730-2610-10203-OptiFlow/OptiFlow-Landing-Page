<script setup>
import {ref } from "vue";



const activeItem = ref('Features'); // 'Features' is active by default
const menuItems = ['Features', 'Modules', 'Benefits', 'Contact'];

const hover = () => {
  return !selected;
}


</script>

<template>

<header class = "main-header" id = "main-header">
  <nav class="nav-bar">
    <div class = "logo" id = "logo">
      <img src = "">
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
      <button class ="login-btn" id ="login-btn"> Login </button>
    </div>

  </nav>
</header>
</template>

<style scoped>

.main-header {
  background: black;
  display: flex;
  flex-direction: column;
  font-family: "Istok Web";
  justify-content: space-between;
  align-items: center;

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
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 65%;
}



ul {
  list-style-type: none;
  display:flex;
  gap: 20%;
  justify-content: center;
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
  display: flex;
  border: none;
  background: #93C1CE;
  border-radius: 15px;
  padding: 50%;
  padding-left: 200%;
  padding-right: 200%;
  cursor: pointer;

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


</style>