<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import * as THREE from 'three';

const { t } = useI18n();

const canvasRef = ref(null);

let scene, camera, renderer, animationId;
let floaters = [];
let flares = [];
let cluster;
const mouse = { x: 0, y: 0 };
const targetRotation = { x: 0, y: 0 };

// Only ids and icons live here — labels are resolved via $t('hero.benefits.<id>')
const benefits = ref([
  {
    id: 'medical',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>`,
  },
  {
    id: 'satisfaction',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>`,
  },
  {
    id: 'communication',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>`,
  },
  {
    id: 'workflow',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
]);

// Title is split around the literal "OptiFlow" substring so the brand name
// can get its own gradient span without hardcoding per-locale markup.
const titleParts = computed(() => {
  const full = t('hero.title');
  const idx = full.indexOf('OptiFlow');
  if (idx === -1) return { before: full, brand: '', after: '' };
  return {
    before: full.slice(0, idx),
    brand: full.slice(idx, idx + 8),
    after: full.slice(idx + 8),
  };
});

const TEAL = 0x00c1b0;
const ICE = 0x9ec3cf;

// A futuristic "core" cluster: a glassy nested-polyhedron centerpiece caged
// by a rotating wireframe shell and encircled by tilted orbital rings —
// an abstract, tech/data motif in brand colors. Each piece spins at its own
// speed so the whole thing reads as a layered, mechanical assembly rather
// than a single spinning prop.
const createCoreCluster = () => {
  const group = new THREE.Group();

  const cage = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.3, 1),
    new THREE.MeshBasicMaterial({
      color: TEAL,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  group.add(cage);

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.55, 2),
    new THREE.MeshPhysicalMaterial({
      color: TEAL,
      metalness: 0.35,
      roughness: 0.15,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.92,
    })
  );
  group.add(core);

  const ringOuter = new THREE.Mesh(
    new THREE.TorusGeometry(1.75, 0.028, 12, 100),
    new THREE.MeshBasicMaterial({
      color: ICE,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  ringOuter.rotation.x = Math.PI / 2.3;
  group.add(ringOuter);

  const ringInner = new THREE.Mesh(
    new THREE.TorusGeometry(1.95, 0.012, 12, 100),
    new THREE.MeshBasicMaterial({
      color: TEAL,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  ringInner.rotation.x = Math.PI / 1.7;
  ringInner.rotation.y = 0.4;
  group.add(ringInner);

  const octahedron = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.16, 0),
    new THREE.MeshPhysicalMaterial({ color: ICE, metalness: 0.6, roughness: 0.2, clearcoat: 0.8 })
  );
  octahedron.userData.orbit = { radius: 2.05, speed: 0.4, offset: 0, tilt: 0.35 };
  group.add(octahedron);

  const satelliteCube = new THREE.Mesh(
    new THREE.BoxGeometry(0.16, 0.16, 0.16),
    new THREE.MeshBasicMaterial({ color: TEAL, wireframe: true })
  );
  satelliteCube.userData.orbit = { radius: 1.75, speed: -0.55, offset: Math.PI, tilt: -0.5 };
  group.add(satelliteCube);

  return { group, cage, core, ringOuter, ringInner, satellites: [octahedron, satelliteCube] };
};

// A small distant echo of the core cluster used for background depth/parallax.
const createMiniCluster = (scale) => {
  const group = new THREE.Group();
  group.add(
    new THREE.Mesh(
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.MeshBasicMaterial({ color: TEAL, wireframe: true, transparent: true, opacity: 0.35 })
    )
  );
  group.add(
    new THREE.Mesh(
      new THREE.TorusGeometry(1.3, 0.012, 8, 64),
      new THREE.MeshBasicMaterial({ color: ICE, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false })
    )
  );
  group.scale.setScalar(scale);
  return group;
};

// Soft glowing rings drifting in the background — a nod to lens-flare /
// bokeh, reinforcing an optical/tech theme without competing with the core.
const createFlare = () => {
  const size = 0.08 + Math.random() * 0.22;
  const mat = new THREE.MeshBasicMaterial({
    color: Math.random() > 0.5 ? TEAL : ICE,
    transparent: true,
    opacity: 0.18 + Math.random() * 0.22,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(new THREE.RingGeometry(size * 0.6, size, 32), mat);
  mesh.position.set(
    (Math.random() - 0.5) * 14,
    (Math.random() - 0.5) * 9,
    -2 - Math.random() * 6
  );
  mesh.userData.driftSpeed = 0.05 + Math.random() * 0.12;
  mesh.userData.driftOffset = Math.random() * Math.PI * 2;
  mesh.userData.baseY = mesh.position.y;
  return mesh;
};

const initThree = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 6;

  renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  const key = new THREE.PointLight(0x00ffe5, 2.2);
  key.position.set(4, 4, 6);
  scene.add(key);
  const rim = new THREE.PointLight(0x9ec3cf, 1.1);
  rim.position.set(-5, -3, 4);
  scene.add(rim);
  const fill = new THREE.PointLight(0xffffff, 0.6);
  fill.position.set(0, 2, 8);
  scene.add(fill);

  const heroAnchor = new THREE.Vector3(1.9, 0.25, -0.4);

  cluster = createCoreCluster();
  cluster.group.position.copy(heroAnchor);
  cluster.group.rotation.x = -0.15;
  cluster.group.rotation.y = 0.3;
  cluster.group.scale.setScalar(1.05);
  scene.add(cluster.group);
  floaters.push({ mesh: cluster.group, floatSpeed: 0.45, spinSpeed: 0, baseRotX: cluster.group.rotation.x });

  const miniA = createMiniCluster(0.55);
  miniA.position.set(-3.6, -1.8, -3.8);
  scene.add(miniA);
  floaters.push({ mesh: miniA, floatSpeed: 0.35, spinSpeed: 0.001, baseRotX: 0.2 });

  const miniB = createMiniCluster(0.32);
  miniB.position.set(-2.2, 2.2, -2.8);
  scene.add(miniB);
  floaters.push({ mesh: miniB, floatSpeed: 0.6, spinSpeed: -0.0015, baseRotX: -0.15 });

  for (let i = 0; i < 18; i++) {
    const flare = createFlare();
    scene.add(flare);
    flares.push(flare);
  }

  animate();
};

const clock = new THREE.Clock();

const animate = () => {
  animationId = requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();

  floaters.forEach(({ mesh, floatSpeed, spinSpeed, baseRotX }) => {
    mesh.position.y += Math.sin(elapsed * floatSpeed) * 0.0015;
    mesh.rotation.y += spinSpeed;
    mesh.rotation.x = baseRotX + Math.sin(elapsed * 0.3) * 0.06;
  });

  flares.forEach((flare) => {
    flare.position.y = flare.userData.baseY + Math.sin(elapsed * flare.userData.driftSpeed + flare.userData.driftOffset) * 0.6;
    flare.rotation.z += 0.002;
  });

  if (cluster) {
    cluster.cage.rotation.y += 0.0022;
    cluster.cage.rotation.x += 0.0009;
    cluster.core.rotation.y -= 0.003;
    cluster.core.rotation.x += 0.0016;
    cluster.ringOuter.rotation.z += 0.0018;
    cluster.ringInner.rotation.z -= 0.0026;
    cluster.satellites.forEach((sat) => {
      const { radius, speed, offset, tilt } = sat.userData.orbit;
      const angle = elapsed * speed + offset;
      sat.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * tilt, Math.sin(angle) * radius * 0.3);
      sat.rotation.x += 0.02;
      sat.rotation.y += 0.015;
    });
  }

  // subtle parallax toward the cursor for a modern, interactive feel
  targetRotation.y += (mouse.x * 0.25 - targetRotation.y) * 0.03;
  targetRotation.x += (mouse.y * 0.15 - targetRotation.x) * 0.03;
  camera.position.x += (targetRotation.y - camera.position.x) * 1;
  camera.position.y += (-targetRotation.x - camera.position.y) * 1;
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
};

const handleResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

const handlePointerMove = (event) => {
  mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
  mouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
};

onMounted(() => {
  initThree();
  window.addEventListener('resize', handleResize);
  window.addEventListener('pointermove', handlePointerMove);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('pointermove', handlePointerMove);
  cancelAnimationFrame(animationId);
  if (renderer) renderer.dispose();
});
</script>

<template>
  <section class="hero-section" id="hero-section">
    <div class="hero-glow hero-glow-1"></div>
    <div class="hero-glow hero-glow-2"></div>
    <div class="hero-grid"></div>
    <canvas ref="canvasRef" class="three-canvas"></canvas>
    <div class="hero-vignette"></div>

    <div class="hero-wrapper" id="hero-wrapper">
      <div class="hero-title" id="hero-title">
        <span class="hero-badge">
          <span class="hero-badge-dot"></span>
          {{ $t('hero.badge') }}
        </span>

        <h1>
          {{ titleParts.before }}<span class="brand-gradient">{{ titleParts.brand }}</span>{{ titleParts.after }}
        </h1>

        <p class="hero-description">{{ $t('hero.description') }}</p>

        <div class="hero-actions">
          <a href="https://proud-sea-096db2110.7.azurestaticapps.net" class="hero-button">
            {{ $t('hero.cta') }}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>

          <span class="hero-trust">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            {{ $t('contact.cta.stat-optics') }}
          </span>
        </div>
      </div>

      <div class="benefits-column" id="benefits-column">
        <div
          v-for="(item, index) in benefits"
          :key="item.id"
          class="benefit-item"
          :style="{ '--i': index }"
        >
          <div class="benefit-icon" v-html="item.icon"></div>
          <p class="benefit-label">{{ $t(`hero.benefits.${item.id}`) }}</p>
        </div>
      </div>
    </div>

    <div class="scroll-cue" aria-hidden="true">
      <span></span>
    </div>
  </section>
</template>

<style scoped>
* {
  font-family: 'Segoe UI', sans-serif;
}

.hero-section {
  color: white;
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #05070a;
}

.hero-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(0, 193, 176, 0.09) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 193, 176, 0.09) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%);
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%);
}

.hero-glow {
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.55;
  pointer-events: none;
}

.hero-glow-1 {
  width: 520px;
  height: 520px;
  top: -120px;
  right: -80px;
  background: radial-gradient(circle, rgba(0, 193, 176, 0.55), transparent 70%);
  animation: drift-1 16s ease-in-out infinite;
}

.hero-glow-2 {
  width: 460px;
  height: 460px;
  bottom: -160px;
  left: -100px;
  background: radial-gradient(circle, rgba(158, 195, 207, 0.35), transparent 70%);
  animation: drift-2 20s ease-in-out infinite;
}

@keyframes drift-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-40px, 40px) scale(1.15); }
}

@keyframes drift-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(50px, -30px) scale(1.1); }
}

.three-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.9;
}

.hero-vignette {
  position: absolute;
  inset: 0;
  z-index: 2;
  background:
    linear-gradient(180deg, rgba(5, 7, 10, 0.35) 0%, rgba(5, 7, 10, 0.55) 55%, #05070a 100%);
  pointer-events: none;
}

.hero-wrapper {
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 40px;
  min-height: 100vh;
}

.hero-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 999px;
  background: rgba(0, 193, 176, 0.1);
  border: 1px solid rgba(0, 193, 176, 0.4);
  color: #a6f2e8;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-bottom: 24px;
  backdrop-filter: blur(6px);
  opacity: 0;
  animation: fade-in-up 0.7s ease-out 0.1s forwards;
}

.hero-badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00e6cf;
  box-shadow: 0 0 8px 2px rgba(0, 230, 207, 0.8);
  animation: pulse-dot 2s ease-in-out infinite;
}

.hero-title h1 {
  font-size: 46px;
  line-height: 1.15;
  margin-bottom: 20px;
  max-width: 780px;
  opacity: 0;
  animation: fade-in-up 0.7s ease-out 0.25s forwards;
}

.brand-gradient {
  background: linear-gradient(90deg, #00e6cf, #9ec3cf 60%, #00C1B0);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shine-text 6s linear infinite;
}

.hero-description {
  color: #b7c2c9;
  max-width: 600px;
  margin-bottom: 28px;
  font-size: 16px;
  line-height: 1.6;
  opacity: 0;
  animation: fade-in-up 0.7s ease-out 0.4s forwards;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  opacity: 0;
  animation: fade-in-up 0.7s ease-out 0.55s forwards;
}

.hero-button {
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  background: linear-gradient(135deg, #00C1B0, #009488);
  border: none;
  border-radius: 8px;
  font-weight: bold;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  text-decoration: none;
  color: white;
  overflow: hidden;
  box-shadow: 0 8px 24px -8px rgba(0, 193, 176, 0.6);
}

.hero-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -60%;
  width: 40%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.35), transparent);
  transform: skewX(-20deg);
  transition: left 0.6s ease;
}

.hero-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px -8px rgba(0, 193, 176, 0.8);
}

.hero-button:hover::before {
  left: 130%;
}

.arrow-icon {
  transition: transform 0.3s;
}

.hero-button:hover .arrow-icon {
  transform: translateX(4px);
}

.hero-trust {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #94a3b8;
}

.hero-trust svg {
  color: #00C1B0;
}

.benefits-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.benefit-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
  padding: 20px 16px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  opacity: 0;
  animation: fade-in-up 0.6s ease-out forwards;
  animation-delay: calc(0.5s + var(--i) * 0.12s);
}

.benefit-item:hover {
  transform: translateY(-4px);
  background: rgba(0, 193, 176, 0.08);
  border-color: rgba(0, 193, 176, 0.3);
}

.benefit-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  color: #00e6cf;
  background: rgba(0, 193, 176, 0.12);
  margin-bottom: 12px;
  transition: transform 0.4s ease, background 0.3s ease;
}

.benefit-item:hover .benefit-icon {
  transform: scale(1.08);
  background: rgba(0, 193, 176, 0.22);
}

.benefit-label {
  margin: 0;
  font-size: 14px;
  color: white;
  max-width: 200px;
}

.scroll-cue {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  width: 26px;
  height: 42px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-radius: 14px;
  opacity: 0;
  animation: fade-in-up 0.6s ease-out 1s forwards;
}

.scroll-cue span {
  display: block;
  width: 4px;
  height: 8px;
  margin: 6px auto 0;
  border-radius: 2px;
  background: #00C1B0;
  animation: scroll-cue-move 1.8s ease-in-out infinite;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shine-text {
  to {
    background-position: 200% center;
  }
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 6px 1px rgba(0, 230, 207, 0.6); }
  50% { box-shadow: 0 0 12px 4px rgba(0, 230, 207, 0.9); }
}

@keyframes scroll-cue-move {
  0% { transform: translateY(0); opacity: 1; }
  70% { transform: translateY(14px); opacity: 0; }
  71% { transform: translateY(0); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@media (max-width: 768px) {
  .hero-wrapper {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 100px 20px 40px;
  }

  .hero-title h1 {
    font-size: 28px;
  }

  .benefits-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .benefit-item {
    padding: 16px 12px;
  }

  .scroll-cue {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-badge,
  .hero-title h1,
  .hero-description,
  .hero-actions,
  .benefit-item,
  .scroll-cue {
    animation: none;
    opacity: 1;
  }

  .hero-glow,
  .brand-gradient,
  .hero-badge-dot,
  .scroll-cue span {
    animation: none;
  }
}
</style>
