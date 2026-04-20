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
  </nav>
</header>
</template>

<style scoped>

.main-header {
  background: black;
  display: flex;
  justify-content: center;
  font-family: "Istok Web";

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



ul {
  list-style-type: none;
  display:flex;
  gap: 10%;
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



</style>