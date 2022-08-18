<script>
	import ModelController from '$facemaker_components/ModelController.svelte'
	export let node
</script>


<div class="model-controls">
	<ModelController {node} coordinate='x' />
	<ModelController {node} coordinate='y' />
	<ModelController {node} coordinate='z' />
</div>


<style>
	.model-controls {
		display: flex;
		flex-direction: column;
	}
</style>