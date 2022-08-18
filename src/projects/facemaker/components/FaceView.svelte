<script>
	import { onMount } from 'svelte'
	import faceStore from '$facemaker_stores/faceStore'
	import initialize3DEnvironment from '$facemaker_utils/initialize3DEnvironment'

	let canvas, scene

	onMount(() => {
		scene = initialize3DEnvironment(canvas, $faceStore)
	})
</script>


<canvas id="face-view-canvas" bind:this={canvas} />


<style>
	#face-view-canvas {
		border: 1px solid orange;
	}
</style>