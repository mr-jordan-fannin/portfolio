import { writable } from 'svelte/store'
import makeSphere from '$facemaker_utils/makeSphere'

const faceStore = {
	sphere1: {
		c: 0x00ff00,
		m: null,
		r: 1,
		s: 16,
		w: true,
		x: 0,
		y: 0,
		z: 0
	},
	sphere2: {
		c: 0x0000ff,
		m: null,
		r: 1,
		s: 16,
		w: true,
		x: 1,
		y: 1,
		z: 1,
	},
	sphere3: {
		c: 0xff0000,
		m: null,
		r: 1,
		s: 16,
		w: true,
		x: 2,
		y: 2,
		z: 2,
	}
}

faceStore.sphere1.m = makeSphere(faceStore.sphere1)
faceStore.sphere2.m = makeSphere(faceStore.sphere2)
faceStore.sphere3.m = makeSphere(faceStore.sphere3)

export default writable(faceStore)