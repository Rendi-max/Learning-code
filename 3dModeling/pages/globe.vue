<template>
    <div ref="threeContainer" class="three-container"></div>
</template>

<script lang="ts" setup>
    // import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
    // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
    // const threeContainer = ref<HTMLDivElement | null>(null)
    // onMounted(() => {
    //     load3dModel()
    // })

    // const load3dModel = () => {
    //     const { $three } = useNuxtApp()
    //     const scene = new $three.Scene()
    //     const camera = new $three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    //     const renderer = new $three.WebGLRenderer()

    //     renderer.setSize(window.innerWidth, window.innerHeight)
    //     if (threeContainer.value) {
    //         threeContainer.value.append(renderer.domElement)
    //     }

    //     const light = new $three.DirectionalLight(0xffffff, 3)
    //     light.position.set(5, 5, 5).normalize()
    //     scene.add(light)

    //     const textureLoader = new $three.TextureLoader()
    //     const texture = textureLoader.load('/textures/clouds earth.png')
    //     const texture1 = textureLoader.load('/textures/earth albedo.jpg')
    //     const texture2 = textureLoader.load('/textures/earth bump.jpg')
    //     const texture3 = textureLoader.load('/textures/earth land ocean mask.png')
    //     const texture4 = textureLoader.load('/textures/earth night_lights_modified.png')

    //     const loader = new GLTFLoader()
    //     loader.load('/globe.glb', (gltf) => {
    //         gltf.scene.traverse((child) => {
    //             console.log(child)
    //             if ((child as any).isMesh) {
    //                 (child as any).material = new $three.MeshStandardMaterial({map: texture1, alphaMap: texture1, aoMap: texture2, envMap: texture3, lightMap: texture4})
    //             }
    //         })
    //         // console.log(gltf.scene.children[0])
    //         scene.add(gltf.scene)
    //         animate()
    //     })
        
    //     const controls = new OrbitControls(camera, renderer.domElement)
    //     controls.enableDamping = true
    //     controls.dampingFactor = 0.05
    //     controls.enableZoom = true
    //     controls.enableRotate = true
    //     controls.rotateSpeed = 1.3
    //     controls.zoomSpeed = 1.2


    //     camera.position.z = 20

    //     const animate = () => {
    //         requestAnimationFrame(animate)
    //         renderer.render(scene, camera)
    //     }

    //     renderer.setAnimationLoop( animate );
    // }
</script>

<style scoped>
.three-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>