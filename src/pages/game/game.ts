import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const bodyGeom = new THREE.CylinderGeometry(1, 0.6, 2, 4, 1);
// const bodyPosition = bodyGeom.attributes.position;
// bodyPosition.setY(8, bodyPosition.getY(8) + 0.4);
// bodyPosition.setY(9, bodyPosition.getY(9) - 0.6);
const bodyMat = new THREE.MeshBasicMaterial({ color: 0xdc5f45 });
const body = new THREE.Mesh(bodyGeom, bodyMat);

const leafGeom = new THREE.BoxGeometry(0.7, 1.5, 0.8, 0.8);
const leafPosition = leafGeom.attributes.position;
leafPosition.setX(2, leafPosition.getX(2) - 0.2);
leafPosition.setX(3, leafPosition.getX(3) - 0.2);
leafPosition.setX(6, leafPosition.getX(6) + 0.2);
leafPosition.setX(7, leafPosition.getX(7) + 0.2);
const leafMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
leafGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0.5, 0));

const leaf1 = new THREE.Mesh(leafGeom, leafMat);
leaf1.position.y = 1.4;
leaf1.rotation.z = 0.06;
leaf1.rotation.x = 0.04;

const leaf2 = new THREE.Mesh(leafGeom, leafMat);
leaf2.scale.set(1, 1.3, 1);
leaf2.position.y = 1.4;
leaf2.rotation.z = -0.06;
leaf1.rotation.x = -0.04;

const carrot = new THREE.Group();
carrot.add(body);
carrot.add(leaf1);
carrot.add(leaf2);
carrot.rotation.x = 0.8;
carrot.rotation.z = 0.8;

scene.add(carrot);

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame(animate);

  // carrot.rotation.x += 0.01;
  carrot.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
