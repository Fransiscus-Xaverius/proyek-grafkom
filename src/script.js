import * as THREE from 'three';
import * as t from 'three-addons'

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

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

scene.add(box);

function animate(){
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
}

function onKeyDown(event){
    let keycode = event.which;
    if(keycode===39) camera.translateX(-0.05);
    if(keycode===37) camera.translateX(0.05);
    if(keycode===38) camera.translateZ(-0.05);
    if(keycode===40) camera.translateZ(0.05);
}

document.addEventListener("keydown", onKeyDown);

function loop() {
    animate();
    renderer.render(scene, camera)
}
