import * as THREE from 'three'

export default function makeSphere({
	c=0x00ff00,
	r=5,
	s=32,
	w=true,
	x=0,
	y=0,
	z=0
}) {

	const sphereGeometry = new THREE.SphereGeometry(r, s)

	const sphereMaterial = new THREE.MeshBasicMaterial({color: c, wireframe: w})

	const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

	sphere.position.x = x

	sphere.position.y = y

	sphere.position.z = z

	return sphere

}