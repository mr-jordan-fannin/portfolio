<script>
	import faceStore from '$facemaker_stores/faceStore'

	export let coordinate, model, min=-10, max=10, step=0.5

	const update = () => $faceStore = $faceStore.updateLines()
</script>


<div class="position-control">
	<div>{coordinate.toUpperCase()}: {model.position[coordinate]}</div>
	<input type="range" {min} {max} {step} bind:value={model.position[coordinate]} on:input={update}>
</div>


<style>
	.position-control {
		width: 33vw;
		text-align: center;
	}
</style>