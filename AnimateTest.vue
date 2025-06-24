<script setup>
    import { gsap } from 'gsap';
    import * as THREE from 'three';
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
    import { PerspectiveCamera, TextureLoader } from 'three';

    import { ref, onMounted } from 'vue';
    const a = ref('a');
    const b = ref('b');

    // three
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x999999);
    // 相机 （透视相机）  角度、宽高比、近端面、远端面
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    // 创建渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    // 添加轨道控制器
    const controls = new OrbitControls(camera, renderer.domElement);
    // 设置控制器阻尼，让控制器更有真实感
    controls.enableDamping = true;
    const gaoda = ref(null);
    // 创建一个立方体
    const loader = new FBXLoader();
    loader.load('/RX-0FullArmorUnicornGundam/untitled.fbx', (model) => {
        console.log(model);
        model.scale.set(0.01, 0.01, 0.01);
        model.position.set(1, 1, 1);
        scene.add(model);
        gaoda.value = model;

        const textureLoader = new TextureLoader();
        const texture = textureLoader.load('/RX-0FullArmorUnicornGundam/tex_0.png');
        const tmpGeo = new THREE.BufferGeometry();
        const mesh = new THREE.Mesh(tmpGeo, new THREE.MeshBasicMaterial({ map: texture }));
        mesh.material.map = texture;
        scene.add(mesh);
    });

    // 动画循环
    function animate() {
        requestAnimationFrame(animate);
        // 更新控制器
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
    // 响应窗口调整
    window.addEventListener('resize', onWindowResize, false);
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    if (gaoda.value) {
        gsap.to(gaoda.value.rotation, { duration: 5, y: Math.PI * 2, ease: 'elastic.out' });
    }

    onMounted(() => {
        let tl = gsap.timeline({ repeat: 1, repeatDelay: 10, yoyo: true });
        tl.to('.green', { rotation: 360, duration: 2 });
        tl.to('.purple', { rotation: 360, duration: 1, delay: 1 });
        tl.to('.orange', { rotation: 360, duration: 0.5 });
        tl.to('.red', { rotation: 360, duration: 0.5 }, '1');
    });
</script>

<template>
    <div class="box green"></div>
    <div class="box purple"></div>
    <div class="box orange"></div>
    <div class="box red"></div>
</template>

<style scoped>
    .box {
        display: block;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
    }
    .purple {
        background-color: purple;
    }
    .orange {
        background-color: orange;
    }

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }

    .blue {
        background-color: blue;
    }
</style>
