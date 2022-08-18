<script>
	import ModelController from '$facemaker_components/ModelController.svelte'
	export let model
</script>


<div class="model-controls">
	<ModelController {model} coordinate='x' />
	<ModelController {model} coordinate='y' />
	<ModelController {model} coordinate='z' />
</div>


<style>
	.model-controls {
		display: flex;
		flex-direction: column;
	}
</style>