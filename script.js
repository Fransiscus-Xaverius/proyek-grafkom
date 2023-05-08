import * as THREE from "three";
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 1, 1000);
var renderer = new THREE.WebGLRenderer({antialias: true});
const vertex = new THREE.Vector3();
const color = new THREE.Color();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
scene.background = new THREE.Color(0x49a2f5);
renderer.setSize(innerWidth, innerHeight);
cam.position.z = 5;
cam.position.y = 10;
document.body.appendChild(renderer.domElement);
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

const loader = new GLTFLoader();
let hovercraft;
 loader.load(
   // resource URL
   'hovercraft/scene.gltf',
   function (gltf) {
    hovercraft = gltf.scene;
    hovercraft.receiveShadow = true;
    hovercraft.castShadow=true;
    hovercraft.position.x = 20;
    hovercraft.position.y = 0;
    hovercraft.position.z = 5;
    hovercraft.scale.x = 1;
    hovercraft.scale.y = 1;
    hovercraft.scale.z = 1;
    console.log(hovercraft)
    scene.add(hovercraft)
  }
);

// const groundLoader = new THREE.TextureLoader();
// const groundTexture = groundLoader.load('rumput.jpg');

// const groundMaterial = new THREE.MeshPhongMaterial();
// groundMaterial.map = groundTexture;
// const ground = new THREE.Mesh(
//     new THREE.PlaneGeometry(500, 500, 10, 10),
//     groundMaterial
// );
// ground.rotateX( - Math.PI / 2 );
// scene.add(ground)

const controls = new PointerLockControls(cam, renderer.domElement);
let clock = new THREE.Clock();
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color:0xFF0000});

const box = new THREE.Mesh(boxGeometry, boxMaterial);

scene.add(box);

let keyboard = [];
addEventListener('keydown', (e)=>{
    keyboard[e.key] = true;
});
addEventListener('keyup', (e)=>{
    keyboard[e.key] = false;
});

function processKeyboard(delta){
    let speed = 30;
    let actualSpeed = speed * delta;
    if (keyboard["w"]) {
        controls.moveForward(actualSpeed);
    }
    if (keyboard["a"]) {
        controls.moveRight(-actualSpeed);
    }
    if (keyboard["s"]) {
        controls.moveForward(-actualSpeed);
    }
    if (keyboard["d"]) {
        controls.moveRight(actualSpeed);
    }
    if(keyboard["Control"]){
        cam.translateY(-0.05);
    }
    if(keyboard[" "]){
        cam.translateY(0.05);
    }
}

function drawScene(){
    renderer.render(scene, cam);
    let delta = clock.getDelta();
    processKeyboard(delta);
    controls.lock();
    requestAnimationFrame(drawScene);
}
drawScene();