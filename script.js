import * as THREE from "three";
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 1, 1000);
var renderer = new THREE.WebGLRenderer({ antialias: true });
const vertex = new THREE.Vector3();
const color = new THREE.Color();
renderer.shadowMap.enabled = true;
renderer.setSize(innerWidth, innerHeight)
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const temploader = new THREE.TextureLoader();
scene.background = temploader.load('langit/textures/z_kt1_stardust01__Opacity__F_baseColor.png');
// scene.background = new THREE.Color(0x49a2f5);
renderer.setSize(innerWidth, innerHeight);
cam.position.x = 0;
cam.position.z = 90;
cam.position.y = 5;
document.body.appendChild(renderer.domElement);
var directionalLight = new THREE.DirectionalLight(0xFFFFFF, 5.0);
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

let base;
loader.load(
    'models/rts_military_building_1/scene.gltf',
    function (gltf) {
        base = gltf.scene;
        base.receiveShadow = true;
        base.castShadow = true;
        base.position.x = 0;
        base.position.y = 0;
        base.position.z = 60;
        base.scale.x = 10;
        base.scale.y = 10;
        base.scale.z = 10;
        console.log(base)
        scene.add(base)
    }
);

let land;
loader.load(
    'models/mars_land/scene.gltf',
    function (gltf) {
        land = gltf.scene;
        land.receiveShadow = true;
        land.castShadow = true;
        land.position.x = 0;
        land.position.y = 3.5;
        land.position.z = 7;
        land.scale.x = 100;
        land.scale.y = 100;
        land.scale.z = 100;
        console.log(land)
        scene.add(land)
    }
)

let starship;
loader.load(
    'models/starwars_model/scene.gltf',
    function (gltf) {
        starship = gltf.scene;
        starship.receiveShadow = true;
        starship.castShadow = true;
        starship.position.x = 0;
        starship.position.y = 10;
        starship.position.z = 50;
        starship.scale.x = 6;
        starship.scale.y = 6;
        starship.scale.z = 6;
        console.log(starship)
        scene.add(starship)
    }
)

const controls = new PointerLockControls(cam, renderer.domElement);
let clock = new THREE.Clock();
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000 });

const box = new THREE.Mesh(boxGeometry, boxMaterial);

scene.add(box);

let keyboard = [];
addEventListener('keydown', (e) => {
    keyboard[e.key] = true;
});
addEventListener('keyup', (e) => {
    keyboard[e.key] = false;
});

function processKeyboard(delta) {
    let speed = 100;
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
    if (keyboard["Control"]) {
        cam.translateY(-actualSpeed);
    }
    if (keyboard[" "]) {
        cam.translateY(actualSpeed);
    }
}

let timer = 0;

function drawScene() {
    renderer.render(scene, cam);
    // if(hovercraft!=undefined){
    //     if(timer%100    ==0){
    //         hovercraft.rotation.x+=0.05;
    //     }   
    //     else if(timer%50==0){
    //         hovercraft.rotation.x-=0.05;
    //         hovercraft.position.z+=0.05;
    //     }
    // }
    timer++;
    let delta = clock.getDelta();
    processKeyboard(delta);
    controls.lock();
    requestAnimationFrame(drawScene);
}
drawScene();