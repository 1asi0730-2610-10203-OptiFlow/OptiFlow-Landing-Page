<script setup>

</script>

<template>
  <section class="two-experiences" id="two-experiences">
    <div class="container">

      <!-- TITLE -->
      <h2 class="title">Experiencias para todos</h2>

      <!-- CARD 1 -->
      <div class="experience-card">
        <h3>¿Eres un cliente?</h3>
        <p class="subtitle">
          ¿Sientes que no recibes respuestas de las ópticas?, ¿retrasos largos y falta de comunicación?
        </p>
        <p>
          OptiFlow permite que puedas rastrear desde una aplicación web el estado de tu orden,
          sin tener que ir al local físicamente o tener que insistir constantemente por información a la empresa.
        </p>
      </div>

      <!-- CARD 2 -->
      <div class="experience-card">
        <h3>¿Eres una óptica?</h3>
        <p>
          Mejora el CRM de tu empresa mediante la aplicación para clientes, mejora la emisión y el rastreo de órdenes y citas,
          mejora el registro, creación y análisis de ventas y organiza la información de tus clientes.
        </p>
        <p>
          Nuestro sistema permitirá acelerar tu flujo de trabajo, minimizando el margen de error al digitalizar
          y concentrar toda la comunicación en un solo sistema práctico y sencillo de usar.
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.two-experiences {
  font-family: 'Istok Web';
}

/* SECTION */
.two-experiences {
  background: #00C1B0;
  padding: 100px 20px;
  display: flex;
  justify-content: center;
}

/* CONTAINER */
.container {
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

/* TITLE */
.title {
  text-align: center;
  color: white; /* cambia a blanco en tu sección */
  font-size: 2.5rem; /* 🔥 igual que Features */
  margin-bottom: 30px; /* mismo espacio que header */
  text-transform: uppercase; /* 🔥 igual */
  letter-spacing: 2px; /* 🔥 igual */
  font-weight: 600;
}

/* CARD */
.experience-card {
  background: #f5f5f5;
  border-radius: 20px;
  padding: 40px 50px;
  text-align: center;
  color: #333;
  line-height: 1.6;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
}

/* HOVER */
.experience-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

/* TITLES INSIDE CARD */
.experience-card h3 {
  color: #93C1CE;
  font-size: 20px;
  margin-bottom: 15px;
}

/* SUBTEXT */
.subtitle {
  margin-bottom: 10px;
}
</style>