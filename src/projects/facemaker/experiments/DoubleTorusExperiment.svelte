<script>
	import * as THREE from 'three'
	import { onMount } from 'svelte'

	let camera, canvas, renderer, scene


	function init() {

		console.log('Running init...')

		// Scene
		scene = new THREE.Scene()

		// Camera
		const fov = 75
		const aspect = window.innerWidth / window.innerHeight
		const near = 0.1
		const far = 1000
		camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
		camera.position.z = 15

		// Renderer
		renderer = new THREE.WebGLRenderer({ canvas })
		renderer.setSize(window.innerWidth, window.innerHeight)

		// Sphere Object
		const sphereGeometry = new THREE.SphereGeometry(5, 128)
		const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true})
		const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
		scene.add(sphere)

		// Torus Object
		const torusGeometry = new THREE.TorusGeometry(10,3,16,100)
		const torusMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true})
		const torus = new THREE.Mesh(torusGeometry, torusMaterial)
		scene.add(torus)

		const torusGeometry2 = new THREE.TorusGeometry(10,1,50,100)
		const torusMaterial2 = new THREE.MeshBasicMaterial({color: 0x0000ff, wireframe: true})
		const torus2 = new THREE.Mesh(torusGeometry2, torusMaterial2)
		scene.add(torus2)

		// Lights
		const pointLight = new THREE.PointLight(0xffffff)
		pointLight.position.set(5,5,5)
		scene.add(pointLight)

		animate(scene, camera)

		function animate() {
			requestAnimationFrame(animate)
			torus.rotation.x += 0.01
			torus2.rotation.y -= 0.01
			sphere.rotation.y += 0.05
			sphere.rotation.x += 0.004
			sphere.rotation.z -= 0.003
			renderer.render(scene, camera)
		}
	}

	

	onMount(() => init())
</script>


<canvas bind:this={canvas} />


<style>
	canvas {
		border: 1px solid red;
	}
</style>