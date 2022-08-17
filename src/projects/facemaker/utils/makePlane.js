import * as THREE from 'three'


export default function makePlane(size=20, divisions=20) {
	return new THREE.GridHelper(size, divisions)
}