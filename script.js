import * as THREE from "three";

// import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

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
cam.position.x = 60;
cam.position.z = 375;
cam.position.y = 205;
document.body.appendChild(renderer.domElement);
var directionalLight = new THREE.DirectionalLight(0xFFFFFF, 7.0);
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
        base.position.x = -200;
        base.position.y = 35;
        base.position.z = 185;
        base.scale.x = 100;
        base.scale.y = 125;
        base.scale.z = 75;
        base.rotation.y = 1;
        console.log(base)
        scene.add(base)
    }
);

let land;
loader.load(
    'models/moon_surface/scene.gltf',
    function (gltf) {
        land = gltf.scene;
        land.receiveShadow = true;
        land.castShadow = true;
        land.position.x = 0;
        land.position.y = 3.5;
        land.position.z = 7;
        land.scale.x = .5;
        land.scale.y = .5;
        land.scale.z = .5;
        console.log(land)
        scene.add(land)
    }
)

// let starship;
// loader.load(
//     'models/starwars_model/scene.gltf',
//     function (gltf) {
//         starship = gltf.scene;
//         starship.receiveShadow = true;
//         starship.castShadow = true;
//         starship.position.x = 0;
//         starship.position.y = 0;
//         starship.position.z = 0;
//         starship.scale.x = 6;
//         starship.scale.y = 6;
//         starship.scale.z = 6;
//         let axesHelper1 = new THREE.AxesHelper(50);
//         starship.add(axesHelper1);
//         scene.add(starship)
//     }
// )
//gedung yang 4 biji putih
let gedung_2;
loader.load(
    'models/gedung_2/scene.gltf',
    function (gltf) {
        gedung_2 = gltf.scene;
        gedung_2.receiveShadow = true;
        gedung_2.castShadow = true;
        gedung_2.position.x = 10;
        gedung_2.position.y = 0;
        gedung_2.position.z = 30;
        gedung_2.scale.x = .06;
        gedung_2.scale.y = .06;
        gedung_2.scale.z = .06;
        console.log(gedung_2)
        scene.add(gedung_2)
    }
)

let building_felix;
loader.load(
    'models/building_felix/scene.gltf',
    function (gltf) {
        building_felix = gltf.scene;
        building_felix.receiveShadow = true;
        building_felix.castShadow = true;
        building_felix.position.x = 200;
        building_felix.position.y = 35;
        building_felix.position.z = 80;
        building_felix.scale.x = 1;
        building_felix.scale.y = 1;
        building_felix.scale.z = 1;
        console.log(building_felix)
        scene.add(building_felix)
    }
)

const porosGeo = new THREE.SphereGeometry(16, 30, 30);

let pesawat;
loader.load(
    'models/pesawat/scene.gltf',
    function (gltf) {
        pesawat = gltf.scene;
        pesawat.receiveShadow = true;
        pesawat.castShadow = true;
        pesawat.position.x = 15;
        pesawat.position.y = 200;
        pesawat.position.z = 300;
        pesawat.scale.x = 2;
        pesawat.scale.y = 2;
        pesawat.scale.z = 2;
        // pesawat.rotation.y += 2;
        // pesawat.rotation.z += 6;

        console.log(pesawat)
        scene.add(pesawat)
    }
)
let rumah_kotak;
loader.load(
    'models/rumah_kotak/scene.gltf',
    function (gltf) {
        rumah_kotak = gltf.scene;
        rumah_kotak.receiveShadow = true;
        rumah_kotak.castShadow = true;
        rumah_kotak.position.x = -25;
        rumah_kotak.position.y = 11;
        rumah_kotak.position.z = -25;
        rumah_kotak.scale.x = 5;
        rumah_kotak.scale.y = 5;
        rumah_kotak.scale.z = 5;
        rumah_kotak.rotation.y += 4;
        console.log(rumah_kotak)
        scene.add(rumah_kotak)
    }
)
let gedung_bulet;
loader.load(
    'models/gedung_bulet/scene.gltf',
    function (gltf) {
        gedung_bulet = gltf.scene;
        gedung_bulet.receiveShadow = true;
        gedung_bulet.castShadow = true;
        gedung_bulet.position.x = 23;
        gedung_bulet.position.y = -4;
        gedung_bulet.position.z = 65;
        gedung_bulet.scale.x = 1;
        gedung_bulet.scale.y = 1;
        gedung_bulet.scale.z = 1;
        console.log(gedung_bulet)
        scene.add(gedung_bulet)
    }
)

let death_star;
loader.load(
    'models/death_star/scene.gltf',
    function (gltf) {
        death_star = gltf.scene;
        death_star.receiveShadow = true;
        death_star.castShadow = true;
        death_star.position.x = -1000;
        death_star.position.y = 1200;
        death_star.position.z = -600;
        death_star.scale.x = 2;
        death_star.scale.y = 2;
        death_star.scale.z = 2;
        death_star.rotation.x += 1.15;
        death_star.rotation.y -= 1;
        scene.add(death_star);
    }
)

const controls = new PointerLockControls(cam, renderer.domElement);
let clock = new THREE.Clock();
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000 });

//
const geometrySphere = new THREE.SphereGeometry(5, 32, 5);
var materialSphere = new THREE.MeshStandardMaterial({
  metalness: 1,
  roughness: 0.5,
  color:0xffffff,
  opacity: 0,
  transparent: true,
});
const sphere = new THREE.Mesh(geometrySphere, materialSphere);
sphere.position.set(190, 305, 90);
scene.add(sphere)

const spotlight = new THREE.SpotLight(0xffff00, 20, 0, 0.2,0.5,1)
spotlight.position.set(0,0,0)
spotlight.target.position.set(1,-0.5,0)

// const spotlightHelper = new THREE.SpotLightHelper(spotlight,0xff0000)

// scene.add(spotlightHelper)
sphere.add(spotlight)
sphere.add(spotlight.target)
// const box = new THREE.Mesh(boxGeometry, boxMaterial);

// const axesHelper = new THREE.AxesHelper(50);
// scene.add(axesHelper);

// scene.add(box);

let keyboard = [];
addEventListener('keydown', (e) => {
    keyboard[e.key] = true;
});
addEventListener('keyup', (e) => {
    keyboard[e.key] = false;
});

// let futuristic_building;
// loader.load(
//     'models/futuristic_building/scene.gltf',
//     function (gltf) {
//         futuristic_building = gltf.scene;
//         futuristic_building.receiveShadow = true;
//         futuristic_building.castShadow = true;
//         futuristic_building.position.x = 160;
//         futuristic_building.position.y = 0;
//         futuristic_building.position.z = -180;
//         futuristic_building.scale.x = 100;
//         futuristic_building.scale.y = 125;
//         futuristic_building.scale.z = 75;
//         scene.add(futuristic_building);
//     }
// )

let scifi_building;
loader.load(
    'models/scifi_building/scene.gltf',
    function (gltf) {
        scifi_building = gltf.scene;
        scifi_building.receiveShadow = true;
        scifi_building.castShadow = true;
        scifi_building.position.x = 350;
        scifi_building.position.y = 0;
        scifi_building.position.z = 30;
        scifi_building.scale.x = 3;
        scifi_building.scale.y = 3;
        scifi_building.scale.z = 3;
        scene.add(scifi_building);
    }
)

function processKeyboard(delta) {
    let speed = 100;
    let actualSpeed = speed * delta;
    if (keyboard["w"]) {
        console.log("ini posisi y" + cam.position.y)
        console.log("ini posisi z" + cam.position.z)
        console.log("ini posisi x" + cam.position.x)
        //gedung_2 4biji putih 
        if (cam.position.x > -70 && cam.position.x < 110) {
            if (cam.position.y < 220) {
                if (cam.position.z > 160 || cam.position.z < -106) {
                    controls.moveForward(actualSpeed);
                }
            } else {
                controls.moveForward(actualSpeed);

            }
        }
        //gedung tinggi item 1
        else if (cam.position.x > 150 && cam.position.x < 250) {
            if (cam.position.y < 300) {
                if (cam.position.z > 125 || cam.position.z < 22) {
                    controls.moveForward(actualSpeed);
                }
            } else {
                controls.moveForward(actualSpeed);

            }
        }
        //gedung bunker
        else if (cam.position.x > -300 && cam.position.x < -105) {
            if (cam.position.y < 100) {
                if (cam.position.z > 270 || cam.position.z < 120) {
                    controls.moveForward(actualSpeed);
                }
            } else {
                controls.moveForward(actualSpeed);

            }
        }
        //gedung spiral gede 
        else if (cam.position.x > 160 && cam.position.x < 420) {
            if (cam.position.y < 650) {
                if (cam.position.z > 130 || cam.position.z < -80) {
                    controls.moveForward(actualSpeed);
                }
            } else {
                controls.moveForward(actualSpeed);

            }
        }
        //gedung tinggi item 2
        // else if (cam.position.x > 90 && cam.position.x < 240) {
        //     if (cam.position.y < 415) {
        //         if (cam.position.z > -100 || cam.position.z < -250) {
        //             controls.moveForward(actualSpeed);
        //         }
        //     } else {
        //         controls.moveForward(actualSpeed);
        //     }
        // }
        else {
            controls.moveForward(actualSpeed);
        }

    }
    if (keyboard["a"]) {
        // if (cam.position.x > -200) {
        //     controls.moveRight(-actualSpeed);
        // }
        console.log("ini posisi y" + cam.position.y)
        console.log("ini posisi z" + cam.position.z)
        console.log("ini posisi x" + cam.position.x)
        //gedung_2 4biji putih 
        if (cam.position.x > -70 && cam.position.x < 110) {
            if (cam.position.y < 220) {
                if (cam.position.z > 160 || cam.position.z < -106) {
                    controls.moveRight(- actualSpeed);
                }
            } else {
                controls.moveRight(-actualSpeed);

            }
        }
        //gedung tinggi item 1
        else if (cam.position.x > 150 && cam.position.x < 250) {
            if (cam.position.y < 300) {
                if (cam.position.z > 125 || cam.position.z < 22) {
                    controls.moveRight(-actualSpeed);
                }
            } else {
                controls.moveRight(-actualSpeed);

            }
        }
        //gedung spiral gede 
        else if (cam.position.x > 160 && cam.position.x < 420) {
            if (cam.position.y < 650) {
                if (cam.position.z > 130 || cam.position.z < -80) {
                    controls.moveRight(-actualSpeed);
                }
            } else {
                controls.moveRight(-actualSpeed);

            }
        }
        //gedung bunker
        else if (cam.position.x > -300 && cam.position.x < -105) {
            if (cam.position.y < 100) {
                if (cam.position.z > 270 || cam.position.z < 120) {
                    controls.moveRight(-actualSpeed);
                }
            } else {
                controls.moveRight(-actualSpeed);

            }
        }
        //gedung tinggi item 2
        // else if (cam.position.x > 90 && cam.position.x < 240) {
        //     if (cam.position.y < 415) {
        //         if (cam.position.z > -100 || cam.position.z < -250) {
        //             controls.moveRight(-actualSpeed);
        //         }
        //     } else {
        //         controls.moveRight(-actualSpeed);
        //     }
        // }
        else {
            controls.moveRight(-actualSpeed);
        }

    }
    if (keyboard["s"]) {
        // if (cam.position.x > -200) {
        //     controls.moveRight(-actualSpeed);
        // }
        console.log("ini posisi y" + cam.position.y)
        console.log("ini posisi z" + cam.position.z)
        console.log("ini posisi x" + cam.position.x)
        //gedung_2 4biji putih 
        if (cam.position.x > -70 && cam.position.x < 110) {
            if (cam.position.y < 220) {
                if (cam.position.z > 160 || cam.position.z < -106) {
                    controls.moveForward(- actualSpeed);
                }
            } else {
                controls.moveForward(-actualSpeed);

            }
        }
        //gedung tinggi item 1
        else if (cam.position.x > 150 && cam.position.x < 250) {
            if (cam.position.y < 300) {
                if (cam.position.z > 125 || cam.position.z < 22) {
                    controls.moveForward(-actualSpeed);
                }
            } else {
                controls.moveForward(-actualSpeed);

            }
        }
        //gedung bunker
        else if (cam.position.x > -300 && cam.position.x < -105) {
            if (cam.position.y < 100) {
                if (cam.position.z > 270 || cam.position.z < 120) {
                    controls.moveForward(-actualSpeed);
                }
            } else {
                controls.moveForward(-actualSpeed);

            }
        }
        //gedung spiral gede 
        else if (cam.position.x > 160 && cam.position.x < 420) {
            if (cam.position.y < 650) {
                if (cam.position.z > 130 || cam.position.z < -80) {
                    controls.moveForward(-actualSpeed);
                }
            } else {
                controls.moveForward(-actualSpeed);

            }
        }
        //gedung tinggi item 2
        // else if (cam.position.x > 90 && cam.position.x < 240) {
        //     if (cam.position.y < 415) {
        //         if (cam.position.z > -100 || cam.position.z < -250) {
        //             controls.moveForward(-actualSpeed);
        //         }
        //     } else {
        //         controls.moveForward(-actualSpeed);
        //     }
        // }
        else {
            controls.moveForward(-actualSpeed);
        }
    }
    if (keyboard["d"]) {
        // if (cam.position.x < 200) {
        //     controls.moveRight(actualSpeed);
        // }
        console.log("ini posisi y" + cam.position.y)
        console.log("ini posisi z" + cam.position.z)
        console.log("ini posisi x" + cam.position.x)
        //gedung_2 4biji putih 
        if (cam.position.x > -70 && cam.position.x < 110) {
            if (cam.position.y < 220) {
                if (cam.position.z > 160 || cam.position.z < -106) {
                    controls.moveRight(actualSpeed);
                }
            } else {
                controls.moveRight(actualSpeed);

            }
        }
        //gedung tinggi item 1
        else if (cam.position.x > 150 && cam.position.x < 250) {
            if (cam.position.y < 300) {
                if (cam.position.z > 125 || cam.position.z < 22) {
                    controls.moveRight(actualSpeed);
                }
            } else {
                controls.moveRight(actualSpeed);

            }
        }
        //gedung bunker
        else if (cam.position.x > -300 && cam.position.x < -105) {
            if (cam.position.y < 100) {
                if (cam.position.z > 270 || cam.position.z < 120) {
                    controls.moveRight(actualSpeed);
                }
            } else {
                controls.moveRight(actualSpeed);

            }
        }
        //gedung spiral gede 
        else if (cam.position.x > 160 && cam.position.x < 420) {
            if (cam.position.y < 650) {
                if (cam.position.z > 130 || cam.position.z < -80) {
                    controls.moveRight(actualSpeed);
                }
            } else {
                controls.moveRight(actualSpeed);

            }
        }
        // //gedung tinggi item 2
        // else if (cam.position.x > 90 && cam.position.x < 240) {
        //     if (cam.position.y < 415) {
        //         if (cam.position.z > -100 || cam.position.z < -250) {
        //             controls.moveRight(actualSpeed);
        //         }
        //     } else {
        //         controls.moveRight(actualSpeed);
        //     }
        // }
        else {
            controls.moveRight(actualSpeed);
        }
    }
    if (keyboard["Control"]) {
        // console.log(cam.position.y)
        console.log("ini posisi y" + cam.position.y)
        console.log("ini posisi z" + cam.position.z)
        console.log("ini posisi x" + cam.position.x)
        //gedung_2 4biji putih 
        if (cam.position.x > -70 && cam.position.x < 110) {
            if (cam.position.y < 220) {
                if (cam.position.z > 160 || cam.position.z < -106) {
                    cam.translateY(-actualSpeed);
                }
            } else {
                cam.translateY(-actualSpeed);

            }
        }
        //gedung tinggi item 1
        else if (cam.position.x > 150 && cam.position.x < 250) {
            if (cam.position.y < 300) {
                if (cam.position.z > 125 || cam.position.z < 22) {
                    cam.translateY(-actualSpeed);
                }
            } else {
                cam.translateY(-actualSpeed);

            }
        }
        //gedung bunker
        else if (cam.position.x > -300 && cam.position.x < -105) {
            if (cam.position.y < 100) {
                if (cam.position.z > 270 || cam.position.z < 120) {
                    cam.translateY(-actualSpeed);
                }
            } else {
                cam.translateY(-actualSpeed);

            }
        }
        //gedung spiral gede 
        else if (cam.position.x > 160 && cam.position.x < 420) {
            if (cam.position.y < 650) {
                if (cam.position.z > 130 || cam.position.z < -80) {
                    cam.translateY(-actualSpeed);
                }
            } else {
                cam.translateY(-actualSpeed);

            }
        }
        //gedung tinggi item 2
        // else if (cam.position.x > 90 && cam.position.x < 240) {
        //     if (cam.position.y < 415) {
        //         if (cam.position.z > -100 || cam.position.z < -250) {
        //             // cam.translateY(-actualSpeed);
        //         }
        //     } else {
        //         cam.translateY(-actualSpeed);
        //     }
        // }
        else {
            cam.translateY(-actualSpeed);
        }
    }
    if (keyboard[" "]) {
        // if (cam.position.y < 120) {
        //     cam.translateY(actualSpeed);
        // }
        cam.translateY(actualSpeed);
    }

    if (keyboard["-"]) {
        alert(cam.position.x + "," + cam.position.x + "," + cam.position.z);
    }
}

function animate() {

}

let timer = 0;
let timer2 = 0;
function resetStarship(timer) {
    starship.position.x = 0;
    starship.position.z = 0;
    starship.position.y = 0;
    timer = 0;
}

function animateStarship(t) {
    if (t > 5 && t < 10) {
        console.log(t);
        starship.rotation.x += 100;

    }
}

let rotateYPesawat = 15;
function drawScene() {
    renderer.render(scene, cam);
    
    animate();

    let delta = clock.getDelta();
    processKeyboard(delta);
    controls.lock();
    timer++;
    requestAnimationFrame(drawScene);
    if (death_star.position.x > -600) {
        death_star.position.x = -1000;
        death_star.position.y = 1200;
        death_star.position.z = -600;

        resetStarship(timer);
    }
    else {
        // starship.translateZ(7);
        animateStarship(timer);
        death_star.translateX(1);

    }
    sphere.rotateY(0.1)
    if (timer2 == 0) {
        pesawat.rotation.y = rotateYPesawat
    }
    if (timer2 < 500) {
        if (timer2 < 450) {
            pesawat.position.x += 1.5
            pesawat.position.y += 0.15
            pesawat.rotation.z += -0.003
            // pesawat.rotation.y += -.00000001
            // pesawat.rotation.z += -.1
        }
        timer2++

    } else if (timer2 < 1000) {
        if (timer2 == 500) {
            pesawat.rotation.y -= 5
        }
        pesawat.position.z -= 1.5
        pesawat.position.y -= 0.15
        pesawat.rotation.z += 0.003
        timer2++
    } else if (timer2 < 1500) {
        if (timer2 == 1000) {
            pesawat.rotation.y -= 5
        }
        pesawat.position.x -= 1.5
        pesawat.position.y += 0.15
        pesawat.rotation.z += -0.003
        timer2++
    } else if (timer2 < 2000) {
        if (timer2 == 1500) {
            pesawat.rotation.y -= 5
        }
        pesawat.position.z += 1.5
        pesawat.position.y -= 0.15
        pesawat.rotation.z += 0.003
        timer2++
        if (timer2 == 1999) {
            timer2 = 0;
            rotateYPesawat = 15;
            pesawat.position.x = 15;
            pesawat.position.y = 200;
            pesawat.position.z = 300;
        }
    }


    timer++;
    console.log(timer);
}
drawScene();