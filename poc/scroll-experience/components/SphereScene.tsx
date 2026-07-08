import { useEffect, useRef } from "react";
import * as THREE from "three";
import { coreXToSphereX, type ScrollSceneState } from "./ScrollBackground";
import { BRAND } from "../brand-colors";
import { getJourneyAct, getCoreHomeRelax } from "../journey-acts";

const MAX_DPR = 1.5;
const BASE_Y = 0.05;

interface SphereSceneProps {
  stateRef: React.MutableRefObject<ScrollSceneState>;
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}

function addRing(group: THREE.Group, radius: number, opacity: number, color: number, tiltX = 0, tiltZ = 0) {
  const geo = new THREE.RingGeometry(radius, radius + 0.025, 72);
  const mat = new THREE.MeshBasicMaterial({
    color,
    side: THREE.DoubleSide,
    transparent: true,
    opacity,
  });
  const ring = new THREE.Mesh(geo, mat);
  ring.rotation.x = Math.PI / 2 + tiltX;
  ring.rotation.z = tiltZ;
  group.add(ring);
  return { geo, mat, ring };
}

export default function SphereScene({ stateRef, mouseRef }: SphereSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    const group = new THREE.Group();
    group.position.set(getJourneyAct(0).visual.sphereX, BASE_Y, 0);
    scene.add(group);

    const sphereTarget = { scale: getJourneyAct(0).visual.sphereScale };

    const geometry = new THREE.IcosahedronGeometry(1.28, 2);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: BRAND.blueHex,
      wireframe: true,
      transparent: true,
      opacity: 0.92,
    });
    const sphere = new THREE.Mesh(geometry, wireMaterial);
    group.add(sphere);

    const edges = new THREE.EdgesGeometry(geometry);
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: BRAND.blueHex,
      transparent: true,
      opacity: 0.9,
    });
    const edgeLines = new THREE.LineSegments(edges, edgeMaterial);
    group.add(edgeLines);

    const innerGeo = new THREE.IcosahedronGeometry(0.78, 1);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: BRAND.purpleHex,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMaterial);
    group.add(innerSphere);

    const glowGeo = new THREE.SphereGeometry(1.65, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: BRAND.blueHex,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    group.add(glow);

    const glowPurpleGeo = new THREE.SphereGeometry(1.35, 24, 24);
    const glowPurpleMat = new THREE.MeshBasicMaterial({
      color: BRAND.purpleHex,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const glowPurple = new THREE.Mesh(glowPurpleGeo, glowPurpleMat);
    group.add(glowPurple);

    const coreGeo = new THREE.SphereGeometry(0.14, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: BRAND.purpleHex,
      transparent: true,
      opacity: 1,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    const disposables: { geo?: THREE.BufferGeometry; mat?: THREE.Material }[] = [
      { geo: geometry, mat: wireMaterial },
      { geo: edges, mat: edgeMaterial },
      { geo: innerGeo, mat: innerMaterial },
      { geo: glowGeo, mat: glowMat },
      { geo: glowPurpleGeo, mat: glowPurpleMat },
      { geo: coreGeo, mat: coreMat },
    ];

    const rings = [
      addRing(group, 1.55, 0.65, BRAND.blueHex),
      addRing(group, 1.85, 0.42, BRAND.blueHex, 0.55, 0),
      addRing(group, 2.1, 0.28, BRAND.purpleHex, -0.35, 0.4),
    ];
    rings.forEach((r) => disposables.push({ geo: r.geo, mat: r.mat }));

    let visible = true;
    const onVisibility = () => {
      visible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibility);

    const onResize = () => {
      const rw = window.innerWidth;
      const rh = window.innerHeight;
      camera.aspect = rw / rh;
      camera.updateProjectionMatrix();
      renderer.setSize(rw, rh);
      camera.lookAt(group.position.x, BASE_Y, 0);
    };
    window.addEventListener("resize", onResize);
    onResize();

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (!visible) return;

      const { progress, velocity, chapter, transitionFlash, core } = stateRef.current;
      const actVisual = getJourneyAct(chapter).visual;
      sphereTarget.scale += (actVisual.sphereScale - sphereTarget.scale) * 0.035;

      const t = performance.now() * 0.001;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const rw = window.innerWidth;
      const mobileScale = rw < 768 ? 0.65 : rw < 1200 ? 0.85 : 1;
      const targetBaseX = coreXToSphereX(core.x) * mobileScale;
      const targetBaseY = BASE_Y + (core.y - 0.42) * 3.4;

      const ambient = 1 - getCoreHomeRelax(chapter, progress);
      const parallaxX = (mx - core.x) * 0.22 * ambient;
      const parallaxY = (-(my - core.y) * 0.18 + Math.sin(t * 0.5) * 0.06) * ambient;
      group.position.x += (targetBaseX + parallaxX - group.position.x) * 0.055;
      group.position.y += (targetBaseY + parallaxY - group.position.y) * 0.055;
      camera.lookAt(group.position.x, BASE_Y, 0);

      sphere.rotation.x = t * 0.28 + progress * 0.5;
      sphere.rotation.y = t * 0.38 + velocity * 0.025;
      edgeLines.rotation.copy(sphere.rotation);
      innerSphere.rotation.x = -t * 0.45;
      innerSphere.rotation.z = t * 0.32;

      rings[0].ring.rotation.z = t * 0.2;
      rings[1].ring.rotation.x = Math.PI / 2 + 0.55 + Math.sin(t * 0.3) * 0.1;
      rings[2].ring.rotation.z = -t * 0.12;

      const scale = sphereTarget.scale + progress * 0.08 + Math.sin(t * 1.4) * 0.035 + transitionFlash * 0.12;
      sphere.scale.setScalar(scale);
      edgeLines.scale.setScalar(scale);
      innerSphere.scale.setScalar(scale * 0.82);
      glow.scale.setScalar(scale * 1.08);
      glowPurple.scale.setScalar(scale * 0.95);

      glowMat.opacity = 0.22 + Math.sin(t * 2) * 0.08;
      glowPurpleMat.opacity = 0.12 + Math.sin(t * 2.5) * 0.05;
      coreMat.opacity = 0.9 + Math.sin(t * 3) * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      disposables.forEach(({ geo, mat }) => {
        geo?.dispose();
        mat?.dispose();
      });
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [mouseRef, stateRef]);

  return <div ref={mountRef} className="poc-sphere-layer" aria-hidden="true" />;
}
