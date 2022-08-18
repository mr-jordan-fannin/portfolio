<script>
	import faceStore from '$facemaker_stores/faceStore'

	export let coordinate, model, min=-10, max=10, step=0.5

	const update = () => $faceStore = $faceStore.updateLines()
</script>


<div class="position-control">
	<span>{coordinate.toUpperCase()}: {model.position[coordinate]}</span>
	<input type="range" {min} {max} {step} bind:value={model.position[coordinate]} on:input={update}>
</div>


<style>
	.position-control {
		display: flex;
		justify-content: space-evenly;
		width: 20vw;
	}
	span {
		padding-left: 10%;
		width: 40%;
	}
	input {
		text-align: center;
		width: 50%;
	}
</style>