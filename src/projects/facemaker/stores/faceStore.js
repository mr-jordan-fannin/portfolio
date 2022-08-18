import { writable } from 'svelte/store'
import FaceStore from '$facemaker_classes/FaceStore'

const nodes = {}

const lines = {}

const faceStore = new FaceStore(nodes, lines)

export default writable(faceStore)