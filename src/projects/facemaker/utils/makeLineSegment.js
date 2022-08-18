import * as THREE from 'three'


export default function makeLineSegment(
	a = {
		x: 0,
		y: 0,
		z: 0
	},
	b = {
		x: 1,
		y: 1,
		z: 1
	},
	c = 0xffffff
) {

	const points = [
		new THREE.Vector3(a.x, a.y, a.z),
		new THREE.Vector3(b.x, b.y, b.z)
	]

	const geometry = new THREE.BufferGeometry().setFromPoints(points)

	const material = new THREE.LineBasicMaterial({ color: c })

	const line = new THREE.Line(geometry, material)

	return line

}