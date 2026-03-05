import { useRef, useEffect } from "react";
import * as THREE from "three";

// Minimal vertex shader
const VERT = `
void main() {
  gl_Position = vec4(position, 1.0);
}
`;

// Minimal fragment shader with simple animated laser color
const FRAG = `
precision highp float;

uniform float iTime;
uniform vec2 iResolution;
uniform vec3 uColor;

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  float laser = 0.5 + 0.5 * sin(uv.y * 20.0 + iTime * 5.0);
  vec3 col = laser * uColor;
  gl_FragColor = vec4(col, 1.0);
}
`;

const LaserFlowTest = ({
  color = "#FF79C6"
}) => {
  const mountRef = useRef(null);
  const uniformsRef = useRef(null);

  const hexToRGB = (hex) => {
    let c = hex.trim();
    if (c[0] === "#") c = c.slice(1);
    if (c.length === 3)
      c = c.split("").map((x) => x + x).join("");
    const n = parseInt(c, 16) || 0xffffff;
    return { r: ((n >> 16) & 255) / 255, g: ((n >> 8) & 255) / 255, b: (n & 255) / 255 };
  };

  useEffect(() => {
    const mount = mountRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3)
    );

    const { r, g, b } = hexToRGB(color);

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uColor: { value: new THREE.Vector3(r, g, b) }
    };
    uniformsRef.current = uniforms;

    const material = new THREE.RawShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.frustumCulled = false;
    scene.add(mesh);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [color]);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none"
      }}
    />
  );
};

export default LaserFlowTest;
