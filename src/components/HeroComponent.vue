<script setup>
import { ref } from 'vue';
import "@fontsource/istok-web";

const activeItem = ref('30%');

// Agrupamos en objetos para facilitar el v-for
const benefits = ref([
  { percentage: '30%', label: 'Reducción en errores médicos' },
  { percentage: '40%', label: 'Aumento en volumen de atención' },
  { percentage: '90%', label: 'Menos trabajos rehechos' },
  { percentage: '80%', label: 'Menos consultas de pacientes' }
]);
</script>

<template>
  <section class = "hero-section" id = "hero-section">
    <div class ="hero-wrapper" id = "hero-wrapper">

      <div class ="hero-title" id = "hero-tittle">
        <h1> Transforma la gestión de tu óptica con OptiFlow </h1>
        <p class="hero-description"> Conecta consultorio, ventas y laboratorio en una sola plataforma. Elimina errores de comunicación, reduce tiempos de espera y aumenta la rentabilidad de tu optica.</p>
        <button type="submit" class = "hero-button" >
          Comenzar ahora <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </button>
      </div>

      <div class = "beneifts-column" id = "beneifs-column">
        <div v-for="item in benefits"
             :key="item.percentage"
             class="benefit-item"
             @click="activeItem = item.percentage"
             :class="{ 'is-active': activeItem === item.percentage }"
        >
          <span class="benefit-number">{{ item.percentage }}</span>
          <p class="benefit-label">{{ item.label }}</p>

        </div>
      </div>


    </div>
  </section>

</template>

<style scoped>

*{
  font-family: 'Istok Web';
}

.hero-section {
  background: linear-gradient(45deg, white, mediumturquoise,g darkturquoise);
  padding: 0;
  padding-top: 3%;
  padding-bottom: 3%;
  margin: 0;
}
.hero-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr; /* Left column (title) is twice as wide as right column (benefits) */
  gap: 60px;
  align-items: start; /* Align items to the top */
}

.beneifts-column{
  display: grid;
  grid-template-columns: 0fr 1fr;
  padding-top: 1%;

}
.hero-title {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers the title content */
  text-align: center; /* Centers the text inside */
  padding-top: 15%;
}

.hero-title h1 {
  font-size: 40px;
  margin-bottom: 20px;
  color:white;
}

.hero-description {
  color: lightgray;
  max-width: 600px; /* Prevents text from being too wide */
}

.hero-button {
  margin-top: 20px;
}

/* All benefit items stack in the right column */
.benefit-item {
  color:white;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 20px 0;
  grid-column: 2; /* Forces all benefits into column 2 (right side) */
  transition: transform 0.2s; /* Optional: smooth hover effect */
}

.benefit-number {
  color: aqua;
}
.benefit-item:hover {
  transform: scale(1.05); /* Optional: slight grow on hover */
}

.benefit-item.is-active {
  /* Add styles for active state if needed */
  opacity: 1;
}

.benefit-number {
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
}

.benefit-label {
  margin-top: 8px;
  font-size: 14px;
}

.hero-title button {
  color: black;
  border: none;
  border-radius: 10px;
  background-color:aqua;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  padding: 1%;
  gap: 10px;

}


.hero-title h3 {
  font-size: 16px;
}

.hero-benefit {
  color: white;
}
</style>