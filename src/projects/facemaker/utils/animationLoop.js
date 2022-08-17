export default function animationLoop(scene, camera, renderer, controls) {

	// Animation
	function animate() {
		controls.update()
		renderer.render(scene, camera)
		requestAnimationFrame(animate)
	}

	// Start Animation Loop
	animate()

}