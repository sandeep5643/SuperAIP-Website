import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GalaxyCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ---------------- SCENE ----------------
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // ---------------- STARS ----------------
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 8000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 600;
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // ---------------- ANIMATION ----------------
    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      stars.rotation.y += 0.0006;
      renderer.render(scene, camera);
    };

    animate();

    // ---------------- RESIZE ----------------
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // ---------------- CLEANUP ----------------
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);

      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <div ref={containerRef} className="absolute inset-0" />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold pointer-events-none">
        Super AI
      </div>
    </section>
  );
}