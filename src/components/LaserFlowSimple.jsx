import * as THREE from "three";

let scene, camera, renderer;
let laser, clock;

export function initLaserFlow(container) {
  scene = new THREE.Scene();

  camera = new THREE.OrthographicCamera(
    -5, 5, 5, -5, 0.1, 10
  );
  camera.position.z = 2;

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  clock = new THREE.Clock();

  // 🔥 Laser geometry
  const geometry = new THREE.PlaneGeometry(8, 0.25, 100, 1);

  // ✨ Glow material
  const material = new THREE.MeshBasicMaterial({
    color: 0xff79c6,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  });

  laser = new THREE.Mesh(geometry, material);
  scene.add(laser);

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  const t = clock.getElapsedTime();

  // 🌊 Flow motion
  laser.material.opacity = 0.6 + Math.sin(t * 3) * 0.3;
  laser.scale.x = 1 + Math.sin(t * 2) * 0.1;

  // ⚡ Subtle wave
  laser.rotation.z = Math.sin(t) * 0.02;

  renderer.render(scene, camera);
}
