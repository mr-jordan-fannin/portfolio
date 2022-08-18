import * as THREE from 'three'
import addResizeListener from '$facemaker_utils/addResizeListener'
import animationLoop from '$facemaker_utils/animationLoop'
import initializeCamera from '$facemaker_utils/initializeCamera'
import initializeOrbitControls from '$facemaker_utils/initializeOrbitControls'
import initializeRenderer from '$facemaker_utils/initializeRenderer'
import makeGroup from '$facemaker_utils/makeGroup'
import makePlane from '$facemaker_utils/makePlane'
import makePointLight from '$facemaker_utils/makePointLight'
import makeSkin from '$facemaker_utils/makeSkin'


export default function initialize3DEnvironment(canvas, store) {

	console.log('Initializing 3D Canvas...')

	// Camera
	const camera = initializeCamera({})

	// Renderer
	const renderer = initializeRenderer(canvas)

	// Orbit Controls
	const controls = initializeOrbitControls(camera, canvas)

	// Scene
	store.scene = new THREE.Scene()

	// Lights
	store.scene.add(makePointLight(store.scene))

	// // Meshes
	store.scene.add(makePlane())
	store.scene.add(makeGroup(Object.values(store.nodes)))
	Object.values(store.lines).forEach(line => {
		store.scene.add(line)
	})
	// // store.scene.add(makeSkin())

	// Window Resize
	addResizeListener(camera, renderer)
	
	// Animation
	animationLoop(store.scene, camera, renderer, controls)

	return store.scene

}