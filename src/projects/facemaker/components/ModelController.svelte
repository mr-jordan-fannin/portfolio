<script>
	import faceStore from '$facemaker_stores/faceStore'

	export let coordinate, node, min=-10, max=10, step=0.5

	const update = (node) => {
		$faceStore = $faceStore.updateFace(node)
	}
</script>


<div class="position-control">
	<div>{coordinate.toUpperCase()}: {node.position[coordinate]}</div>
	<input type="range" {min} {max} {step}
		bind:value={node.position[coordinate]}
		on:input={() => update(node)}
	>
</div>


<style>
	.position-control {
		width: 33vw;
		text-align: center;
	}
</style>