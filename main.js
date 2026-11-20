import "./style.css";
import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/addons/controls/OrbitControls";

const canvas = document.querySelector(".experience-canvas");
const loader = document.getElementById("loader-wrapper");
const aboutMenu = document.getElementById("about-menu");
const projectsMenu = document.getElementById("projects-menu");
const closeBtn = document.getElementById("close-btn");
const logoBtn = document.getElementById("logo");
const aboutPanel = document.getElementById("panel-about");
const projectsPanel = document.getElementById("panel-projects");

let currentSection = "home";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x071320);
scene.fog = new THREE.FogExp2(0x071320, 0.042);

const camera = new THREE.PerspectiveCamera(window.innerWidth < 700 ? 64 : 75, window.innerWidth / window.innerHeight, 0.1, 1000);
const defaultCameraPos = { x: 0, y: 2, z: 8 };
camera.position.set(defaultCameraPos.x, defaultCameraPos.y, defaultCameraPos.z);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: window.devicePixelRatio <= 1.8,
  alpha: false
});
renderer.setSize(window.innerWidth, window.innerHeight);
const safePixelRatio = () => Math.min(window.devicePixelRatio || 1, window.innerWidth < 760 ? 1.4 : 1.8);
renderer.setPixelRatio(safePixelRatio());
renderer.outputEncoding = THREE.sRGBEncoding;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = false;
controls.enablePan = false;
controls.minPolarAngle = Math.PI / 3;
controls.maxPolarAngle = Math.PI / 2 + 0.1;

const cyberCyan = new THREE.Color(0x10ebce);
const cyberMagenta = new THREE.Color(0xab6afc);


const gridGeometry = new THREE.PlaneGeometry(100, 100, 40, 40);
const positionAttr = gridGeometry.attributes.position;
for (let i = 0; i < positionAttr.count; i++) {
  const x = positionAttr.getX(i);
  const y = positionAttr.getY(i);
  const z = Math.sin(x * 0.5) * Math.cos(y * 0.5) * 0.5;
  positionAttr.setZ(i, z);
}
gridGeometry.computeVertexNormals();

const gridMaterial = new THREE.MeshBasicMaterial({
  color: cyberCyan,
  wireframe: true,
  transparent: true,
  opacity: 0.15
});
const grid = new THREE.Mesh(gridGeometry, gridMaterial);
grid.rotation.x = -Math.PI / 2;
grid.position.y = -2;
scene.add(grid);

const coreGroup = new THREE.Group();

const coreGeometry = new THREE.TorusKnotGeometry(1.5, 0.4, 128, 32);
const coreMaterial = new THREE.MeshBasicMaterial({
  color: cyberMagenta,
  wireframe: true,
  transparent: true,
  opacity: 0.8
});
const core = new THREE.Mesh(coreGeometry, coreMaterial);
coreGroup.add(core);

const innerCoreGeo = new THREE.IcosahedronGeometry(1, 1);
const innerCoreMat = new THREE.MeshBasicMaterial({
  color: 0x111111,
  wireframe: false
});
const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
coreGroup.add(innerCore);

scene.add(coreGroup);

const particleCount = window.innerWidth < 760 ? 400 : 820;
const particleGeometry = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);
const particleColors = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {
  const radius = 2 + Math.random() * 20;
  const angle = Math.random() * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  const y = (Math.random() - 0.5) * 20;

  particlePositions[i * 3] = x;
  particlePositions[i * 3 + 1] = y;
  particlePositions[i * 3 + 2] = z;

  const color = Math.random() > 0.5 ? cyberCyan : cyberMagenta;
  particleColors[i * 3] = color.r;
  particleColors[i * 3 + 1] = color.g;
  particleColors[i * 3 + 2] = color.b;
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

const particleMaterial = new THREE.PointsMaterial({
  size: 0.1,
  vertexColors: true,
  transparent: true,
  opacity: 0.8,
  blending: THREE.AdditiveBlending
});
const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  if (document.hidden) return;
  const elapsedTime = clock.getElapsedTime();
  const reducedMotion = document.documentElement.dataset.pjmotion === "true" || matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reducedMotion) {
    core.rotation.x = elapsedTime * 0.2;
    core.rotation.y = elapsedTime * 0.3;
    innerCore.rotation.y = -elapsedTime * 0.1;
    innerCore.rotation.x = -elapsedTime * 0.2;
  }

  coreGroup.position.y = reducedMotion ? 0 : Math.sin(elapsedTime * 0.5) * 0.5;

  grid.position.z = reducedMotion ? 0 : (elapsedTime * 2) % 2;

  if (!reducedMotion) particles.rotation.y = elapsedTime * 0.05;

  controls.update();
  renderer.render(scene, camera);
}
animate();


setTimeout(() => {
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
}, 1000);

function hideAllPanels() {
  aboutPanel.classList.add("hidden");
  projectsPanel.classList.add("hidden");
  closeBtn.style.display = "none";
}

function moveToSection(targetPos, targetLookAt, panelToShow) {
  hideAllPanels();
  
  controls.enabled = false;
  gsap.killTweensOf(camera.position);
  gsap.killTweensOf(controls.target);
  
  gsap.to(camera.position, {
    x: targetPos.x,
    y: targetPos.y,
    z: targetPos.z,
    duration: matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1.1,
    ease: "power3.inOut"
  });

  gsap.to(controls.target, {
    x: targetLookAt.x,
    y: targetLookAt.y,
    z: targetLookAt.z,
    duration: 1.5,
    ease: "power3.inOut",
    onUpdate: () => {
      camera.lookAt(controls.target);
    },
    onComplete: () => {
      controls.enabled = true;
      if (panelToShow) {
        panelToShow.classList.remove("hidden");
        closeBtn.style.display = "flex";
      }
    }
  });
}

aboutMenu.addEventListener("click", (e) => {
  e.preventDefault();
  currentSection = "about";
  moveToSection(
    { x: -5, y: 1, z: 4 }, // Camera moves left
    { x: -2, y: 0, z: 0 }, // Look slightly left
    aboutPanel
  );
});

projectsMenu.addEventListener("click", (e) => {
  e.preventDefault();
  currentSection = "projects";
  moveToSection(
    { x: 5, y: 3, z: 5 },  // Camera moves right and up
    { x: 2, y: 0, z: 0 },  // Look slightly right
    projectsPanel
  );
});

const returnHome = (e) => {
  e?.preventDefault();
  if (currentSection === "home") return;
  currentSection = "home";
  hideAllPanels();
  
  moveToSection(
    defaultCameraPos,
    { x: 0, y: 0, z: 0 },
    null
  );
};

closeBtn.addEventListener("click", returnHome);
logoBtn.addEventListener("click", returnHome);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  camera.fov = window.innerWidth < 700 ? 64 : 75;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(safePixelRatio());
});
