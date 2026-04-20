<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import "@fontsource/istok-web";
import {plane} from "three/addons";

const activeItem = ref('30%');
const canvasRef = ref(null);

// Declare variables WITHOUT type annotations (this is JavaScript, not TypeScript)
let scene;
let camera;
let renderer;
let objects = [];
let animationId;

const benefits = ref([
  { percentage: '30%', label: 'Reducción en errores médicos' },
  { percentage: '40%', label: 'Aumento en volumen de atención' },
  { percentage: '90%', label: 'Menos trabajos rehechos' },
  { percentage: '80%', label: 'Menos consultas de pacientes' }
]);

// Initialize Three.js scene
const initThree = () => {
  // Scene setup - use THREE.Scene (capital S)
  scene = new THREE.Scene();

  // Camera setup - use THREE.PerspectiveCamera (correct capitalization)
  camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
  );
  camera.position.z = 5;

  // Renderer setup
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    alpha: true,
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Add lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0x00ffff, 1);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  // Create 3D objects
  createObjects();

  // Start animation
  animate();
};

// Create various 3D objects
const createObjects = () => {
  // 1. Torus (donut shape)
  const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
  const torusMaterial = new THREE.MeshStandardMaterial({
    color: 0x00ffff,
    wireframe: false,
    metalness: 0.5,
    roughness: 0.2
  });
  const torus = new THREE.Mesh(torusGeometry, torusMaterial);
  torus.position.set(-3, 2, 0);
  scene.add(torus);
  objects.push({ mesh: torus, rotationSpeed: { x: 0.01, y: 0.02 } });

  // 2. Cube
  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  const cubeMaterial = new THREE.MeshStandardMaterial({
    color: 0xff00ff,
    metalness: 0.7,
    roughness: 0.3
  });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(3, -2, -2);
  scene.add(cube);
  objects.push({ mesh: cube, rotationSpeed: { x: 0.02, y: 0.01 } });

  // 3. Sphere
  const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
  const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0x00ff00,
    metalness: 0.6,
    roughness: 0.4
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(0, -3, -1);
  scene.add(sphere);
  objects.push({ mesh: sphere, rotationSpeed: { x: 0.015, y: 0.025 } });

  // 4. Icosahedron (crystal-like)
  const icoGeometry = new THREE.IcosahedronGeometry(1, 0);
  const icoMaterial = new THREE.MeshStandardMaterial({
    color: 0xffff00,
    wireframe: true,
    metalness: 0.8
  });
  const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
  icosahedron.position.set(2, 3, -3);
  scene.add(icosahedron);
  objects.push({ mesh: icosahedron, rotationSpeed: { x: 0.01, y: 0.03 } });
};

// Animation loop
const animate = () => {
  animationId = requestAnimationFrame(animate);

  // Rotate each object
  objects.forEach(obj => {
    obj.mesh.rotation.x += obj.rotationSpeed.x;
    obj.mesh.rotation.y += obj.rotationSpeed.y;
  });

  // Optional: Add floating motion
  objects.forEach((obj, index) => {
    obj.mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
  });

  renderer.render(scene, camera);
};

// Handle window resize
const handleResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

// Lifecycle hooks
onMounted(() => {
  initThree();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  cancelAnimationFrame(animationId);
  if (renderer) {
    renderer.dispose();
  }
});
</script>


<template>
  <section class = "hero-section" id = "hero-section">
    <canvas ref="canvasRef" class="three-canvas"></canvas>

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
* {
  font-family: 'Istok Web';
}

.hero-section {
  opacity: 1;
  color:white;
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

/* Three.js Canvas as background */
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
  background: linear-gradient(0deg, turquoise,  black);
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
  padding-top: 80px;
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
  background: turquoise;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  align-content: center;
  align-items: center;
  align-items: center;
  padding: 1%;
  text-align: center;
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
}

.benefit-item:hover {
  transform: scale(1.05);
}

.benefit-number {
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
  color: cyan;
}

.benefit-label {
  margin-top: 8px;
  font-size: 14px;
  color: white;
}
</style>