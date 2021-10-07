import './game.scss';
import * as THREE from 'three';
import { Rabbit } from './objects';

let HEIGHT: number;
let WIDTH: number;
let windowHalfX: number;
let windowHalfY: number;
let aspectRatio: number;
let fieldOfView: number;
let nearPlane: number;
let farPlane: number;
let scene: THREE.Scene;
let camera: THREE.Camera;
let renderer: THREE.WebGLRenderer;
let container: HTMLDivElement;
let clock: THREE.Clock;
let floorShadow: THREE.Mesh;
let floorGrass: THREE.Mesh;
let floor: THREE.Group;
let delta = 0;
let floorRadius = 200;
let speed = 2;
let distance = 0;
let level = 1;
let levelInterval;
let levelUpdateFreq = 3000;
let initSpeed = 5;
let maxSpeed = 48;
let monsterPos = 0.65;
let monsterPosTarget = 0.65;
let floorRotation = 0;
let collisionObstacle = 10;
let collisionBonus = 20;
let gameStatus = 'play';
let cameraPosGame = 160;
let cameraPosGameOver = 260;
let monsterAcceleration = 0.004;
let malusClearColor = 0xb44b39;
let malusClearAlpha = 0;

let globalLight: THREE.AmbientLight;
let shadowLight: THREE.DirectionalLight;

let greenMat = new THREE.MeshPhongMaterial({
  color: 0x7abf8e,
  shininess: 0,
});

export class Trunc {
  height = Math.random() * 100 + 100;
  truncGeom = new THREE.CylinderGeometry(2, 2, this.height, 6, 1);
  mesh: THREE.Mesh;
  constructor() {
    this.truncGeom.applyMatrix4(
      new THREE.Matrix4().makeTranslation(0, this.height / 2, 0)
    );
    this.mesh = new THREE.Mesh(this.truncGeom, greenMat);
    this.mesh.castShadow = true;
  }
}

export class Tree {
  mesh = new THREE.Object3D();
  trunc = new Trunc();

  constructor() {
    this.mesh.add(this.trunc.mesh);
  }
}

function createRabbit() {
  hero = new Rabbit();
  hero.mesh.rotation.y = Math.PI / 2;
  scene.add(hero.mesh);
  hero.nod();
}


function initScreenAnd3D() {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  windowHalfX = WIDTH / 2;
  windowHalfY = HEIGHT / 2;

  scene = new THREE.Scene();

  scene.fog = new THREE.Fog(0xd6eae6, 160, 350);

  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 50;
  nearPlane = 1;
  farPlane = 2000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );
  camera.position.x = 0;
  camera.position.z = cameraPosGame;
  camera.position.y = 30;
  camera.lookAt(new THREE.Vector3(0, 30, 0));

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(malusClearColor, malusClearAlpha);

  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMap.enabled = true;

  container = document.getElementById('world') as HTMLDivElement;
  container.appendChild(renderer.domElement);

  window.addEventListener('resize', handleWindowResize, false);
  document.addEventListener('mousedown', handleMouseDown, false);
  document.addEventListener('touchend', handleMouseDown, false);

  /*
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  //controls.minPolarAngle = -Math.PI / 2; 
  //controls.maxPolarAngle = Math.PI / 2;
  //controls.noZoom = true;
  controls.noPan = true;
  //*/

  clock = new THREE.Clock();
}

function initLights() {
  globalLight = new THREE.AmbientLight(0xffffff, 0.9);

  shadowLight = new THREE.DirectionalLight(0xffffff, 1);
  shadowLight.position.set(-30, 40, 20);
  shadowLight.castShadow = true;
  shadowLight.shadow.camera.left = -400;
  shadowLight.shadow.camera.right = 400;
  shadowLight.shadow.camera.top = 400;
  shadowLight.shadow.camera.bottom = -400;
  shadowLight.shadow.camera.near = 1;
  shadowLight.shadow.camera.far = 2000;
  shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 2048;

  scene.add(globalLight);
  scene.add(shadowLight);
}

function initFloor() {
  floorShadow = new THREE.Mesh(
    new THREE.SphereGeometry(floorRadius, 50, 50),
    new THREE.MeshPhongMaterial({
      color: 0x7abf8e,
      specular: 0x000000,
      shininess: 1,
      transparent: true,
      opacity: 0.5,
    })
  );
  //floorShadow.rotation.x = -Math.PI / 2;
  floorShadow.receiveShadow = true;

  floorGrass = new THREE.Mesh(
    new THREE.SphereGeometry(floorRadius - 0.5, 50, 50),
    new THREE.MeshBasicMaterial({
      color: 0x7abf8e,
    })
  );
  //floor.rotation.x = -Math.PI / 2;
  floorGrass.receiveShadow = false;

  floor = new THREE.Group();
  floor.position.y = -floorRadius;

  floor.add(floorShadow);
  floor.add(floorGrass);
  scene.add(floor);
}

function loop() {
  delta = clock.getDelta();
  updateFloorRotation();
  render();
  requestAnimationFrame(loop);
}

function updateFloorRotation() {
  floorRotation += delta * 0.3 * speed;
  floorRotation = floorRotation % (Math.PI * 2);
  floor.rotation.z = floorRotation;
}

function render() {
  renderer.render(scene, camera);
}

function initEnvironment() {
  const nTrees = 150;
  for (let i = 0; i < nTrees; i++) {
    const phi = (i * Math.PI * 2) / nTrees;
    let theta = Math.PI / 2;
    theta +=
      Math.random() > 0.5
        ? 0.25 + Math.random() * 0.3
        : -3.5 - Math.random() * 0.1;
    const tree = new Tree();
    tree.mesh.position.x = Math.sin(theta) * Math.cos(phi) * floorRadius;
    tree.mesh.position.y = Math.sin(theta) * Math.sin(phi) * (floorRadius - 10);
    tree.mesh.position.z = Math.cos(theta) * floorRadius;

    var vec = tree.mesh.position.clone();
    var axis = new THREE.Vector3(0, 1, 0);
    tree.mesh.quaternion.setFromUnitVectors(axis, vec.clone().normalize());
    floor.add(tree.mesh);
  }
}

function handleMouseDown(ev: MouseEvent | TouchEvent) {}

function handleWindowResize(ev: Event) {}

function init() {
  initScreenAnd3D();
  initLights();
  initFloor();
  initEnvironment();
  loop();
}

init();
