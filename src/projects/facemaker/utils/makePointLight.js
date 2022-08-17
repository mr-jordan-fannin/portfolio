import * as THREE from 'three'


export default function makePointLight(scene, c=0xffffff, x=5, y=5, z=5) {

	const pointLight = new THREE.PointLight(c)

	pointLight.position.set(x,y,z)

	return pointLight

}