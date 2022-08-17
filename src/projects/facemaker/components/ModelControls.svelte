<script>
	export let model,
		xMin = -5,
		xMax = 5,
		xStep = 0.1,
		yMin = -5,
		yMax = 5, 
		yStep = 0.1,
		zMin = -5,
		zMax = 5,
		zStep = 0.1
</script>


<div class="model-controls">
	<div class="position-control">
		<span>X: {model.position.x}</span>
		<input type="number" min={xMin} max={xMax} step={xStep} bind:value={model.position.x}>
		<input type="range" min={xMin} max={xMax} step={xStep} bind:value={model.position.x}>
	</div>
	<div class="position-control">
		<span>Y: {model.position.y}</span>
		<input type="number" min={yMin} max={yMax} step={yStep} bind:value={model.position.y}>
		<input type="range" min={yMin} max={yMax} step={yStep} bind:value={model.position.y}>
	</div>
	<div class="position-control">
		<span>Z: {model.position.z}</span>
		<input type="number" min={zMin} max={zMax} step={zStep} bind:value={model.position.z}>
		<input type="range" min={zMin} max={zMax} step={zStep} bind:value={model.position.z}>
	</div>
</div>


<style>
	.model-controls {
		display: flex;
		flex-direction: column;
	}
	.position-control {
		display: flex;
		justify-content: space-evenly;
	}
	.position-control * {
		width: 30%;
	}
	span {
		padding-left: 10%;
	}
	input {
		text-align: center;
	}
</style>