import * as THREE from 'three';
import { FlyControls } from './FlyControls.js';

let scene, renderer, camera;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)

renderer = new THREE.WebGLRenderer();

document.body.appendChild(renderer.domElement);

renderer.setSize(innerWidth, innerHeight);

camera.position.z = 5;
renderer.setAnimationLoop(loop);

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color:0xFF0000});

const box = new THREE.Mesh(boxGeometry, boxMaterial);

var directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1.0);
directionalLight.position.set(100, 100, 100);
directionalLight.castShadow = true;
directionalLight.shadow.camera.near = 1;
directionalLight.shadow.camera.far = 1000;
directionalLight.shadow.camera.left = -500;
directionalLight.shadow.camera.right = 500;
directionalLight.shadow.camera.top = 500;
directionalLight.shadow.camera.bottom = -500;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.bias = -0.001;
scene.add(directionalLight);
directionalLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(directionalLight);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

scene.add(box);

const controls = new FlyControls(camera, renderer.domElement)
controls.movementSpeed = 1;
controls.rollSpeed =0.05;
controls.autoForward = false;
controls.dragToLook = false;

function animate(){
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
}

function onKeyDown(event){
    let keycode = event.which;
    if(keycode===39) camera.translateX(0.05);
    if(keycode===37) camera.translateX(-0.05);
    if(keycode===38) camera.translateZ(-0.05);
    if(keycode===40) camera.translateZ(0.05);
}

document.addEventListener("keydown", onKeyDown);

function loop() {
    animate();
    controls.update(0.05);
    renderer.render(scene, camera)
}
