import * as THREE from 'three'


export default function makeGroup(meshes) {

	const meshArray = Object.values(meshes)

	const group = new THREE.Group()
	
	for (let i = 0; i < meshArray.length; i++) {
		group.add(meshArray[i])
	}

	return group

}