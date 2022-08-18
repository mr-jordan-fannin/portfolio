import * as THREE from 'three'


export default function initializeCamera({
	fov=75,
	aspect=window.innerWidth / window.innerHeight,
	near=0.1,
	far=1000,
	x=2,
	y=2,
	z=15
}) {

	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

	camera.position.x = x
	
	camera.position.y = y

	camera.position.z = z

	return camera

}