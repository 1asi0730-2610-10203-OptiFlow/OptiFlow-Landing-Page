<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import "@fontsource/istok-web";

const activeItem = ref('medical');
const canvasRef = ref(null);

let scene, camera, renderer, objects = [], animationId;

// Only ids and icons live here — labels are resolved via $t('hero.benefits.<id>')
const benefits = ref([
  {
    id: 'medical',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>`,
  },
  {
    id: 'satisfaction',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>`,
  },
  {
    id: 'communication',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>`,
  },
  {
    id: 'workflow',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
]);

const initThree = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const pointLight = new THREE.PointLight(0x00ffff, 1);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  createObjects();
  animate();
};

const createObjects = () => {
  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 100),
    new THREE.MeshStandardMaterial({ color: 0x00ffff, metalness: 0.5, roughness: 0.2 })
  );
  torus.position.set(-3, 2, 0);
  scene.add(torus);
  objects.push({ mesh: torus, rotationSpeed: { x: 0.01, y: 0.02 } });

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0xff00ff, metalness: 0.7, roughness: 0.3 })
  );
  cube.position.set(3, -2, -2);
  scene.add(cube);
  objects.push({ mesh: cube, rotationSpeed: { x: 0.02, y: 0.01 } });

  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.8, 32, 32),
    new THREE.MeshStandardMaterial({ color: 0x00ff00, metalness: 0.6, roughness: 0.4 })
  );
  sphere.position.set(0, -3, -1);
  scene.add(sphere);
  objects.push({ mesh: sphere, rotationSpeed: { x: 0.015, y: 0.025 } });

  const icosahedron = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1, 0),
    new THREE.MeshStandardMaterial({ color: 0xffff00, wireframe: true, metalness: 0.8 })
  );
  icosahedron.position.set(2, 3, -3);
  scene.add(icosahedron);
  objects.push({ mesh: icosahedron, rotationSpeed: { x: 0.01, y: 0.03 } });
};

const animate = () => {
  animationId = requestAnimationFrame(animate);
  objects.forEach((obj, index) => {
    obj.mesh.rotation.x += obj.rotationSpeed.x;
    obj.mesh.rotation.y += obj.rotationSpeed.y;
    obj.mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
  });
  renderer.render(scene, camera);
};

const handleResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

onMounted(() => {
  initThree();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  cancelAnimationFrame(animationId);
  if (renderer) renderer.dispose();
});
</script>

<template>
  <section class="hero-section" id="hero-section">
    <canvas ref="canvasRef" class="three-canvas"></canvas>

    <div class="hero-wrapper" id="hero-wrapper">
      <div class="hero-title" id="hero-title">
        <h1>{{ $t('hero.title') }}</h1>
        <p class="hero-description">{{ $t('hero.description') }}</p>
        <button type="button" class="hero-button">
          {{ $t('hero.cta') }}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <div class="benefits-column" id="benefits-column">
        <div
          v-for="item in benefits"
          :key="item.id"
          class="benefit-item"
          @click="activeItem = item.id"
          :class="{ 'is-active': activeItem === item.id }"
        >
          <div class="benefit-icon" v-html="item.icon"></div>
          <p class="benefit-label">{{ $t(`hero.benefits.${item.id}`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  font-family: 'Istok Web';
}

.hero-section {
  opacity: 1;
  color: white;
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.three-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.6;
}

.hero-wrapper {
  background: linear-gradient(0deg, #00C1B0, black);
  opacity: 0.8;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: start;
  padding: 40px;
  min-height: 100vh;
}

.hero-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 20%;
}

.hero-title h1 {
  font-size: 40px;
  margin-bottom: 20px;
}

.hero-description {
  color: lightgray;
  max-width: 600px;
  margin-bottom: 20px;
}

.hero-button {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  background: #00C1B0;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  text-align: center;
  transition: background 0.3s;
}

.hero-button:hover {
  background: #00a89a;
}

.arrow-icon {
  transition: transform 0.3s;
}

.hero-button:hover .arrow-icon {
  transform: translateX(4px);
}

.benefits-column {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 40px;
}

.benefit-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
  padding: 20px;
  border-radius: 8px;
}

.benefit-item:hover {
  transform: scale(1.05);
  background: rgba(0, 193, 176, 0.1);
}

.benefit-item.is-active {
  background: rgba(0, 193, 176, 0.2);
}

.benefit-icon {
  color: #00C1B0;
  margin-bottom: 12px;
  transition: transform 0.3s;
}

.benefit-item:hover .benefit-icon {
  transform: rotateY(360deg);
}

.benefit-label {
  margin: 0;
  font-size: 14px;
  color: white;
  max-width: 200px;
}
</style>
