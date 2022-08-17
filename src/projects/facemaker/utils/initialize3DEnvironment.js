import * as THREE from 'three'
import addResizeListener from '$facemaker_utils/addResizeListener'
import animationLoop from '$facemaker_utils/animationLoop'
import initializeCamera from '$facemaker_utils/initializeCamera'
import initializeOrbitControls from '$facemaker_utils/initializeOrbitControls'
import initializeRenderer from '$facemaker_utils/initializeRenderer'
import makePlane from '$facemaker_utils/makePlane'
import makePointLight from '$facemaker_utils/makePointLight'
import makeSkin from '$facemaker_utils/makeSkin'


export default function initialize3DEnvironment(canvas, modelArray) {

	console.log('Initializing 3D Canvas...')

	// Scene
	const scene = new THREE.Scene()

	// Camera
	const camera = initializeCamera({})

	// Plane
	scene.add(makePlane())

	// Renderer
	const renderer = initializeRenderer(canvas)

	// Add Models
	modelArray.forEach(model => scene.add(model.m))

	// Lights
	scene.add(makePointLight(scene))

	// Window Resize
	addResizeListener(camera, renderer)

	// Orbit Controls
	const controls = initializeOrbitControls(camera, canvas)
	
	// Animation
	animationLoop(scene, camera, renderer, controls)

	makeSkin()

}