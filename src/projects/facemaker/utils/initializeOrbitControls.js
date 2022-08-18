import { OrbitControls } from '$facemaker_utils/orbitControls'


export default function initializeOrbitControls(camera, canvas) {
	
	const controls = new OrbitControls(camera, canvas)
	
	controls.enableDamping = true

	return controls

}