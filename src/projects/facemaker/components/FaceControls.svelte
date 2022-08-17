<script>
	import faceStore from '$facemaker_stores/faceStore'
	import ModelControls from '$facemaker_components/ModelControls.svelte'
</script>


<div id="face-control-panel">
	<div id="sphere1-controls" class="control-column">
		<ModelControls model={$faceStore.sphere1.m} />
	</div>
	<div id="sphere2-controls" class="control-column">
		<ModelControls model={$faceStore.sphere2.m} />
	</div>
	<div id="sphere3-controls" class="control-column">
		<ModelControls model={$faceStore.sphere3.m} />
	</div>
</div>


<style>
	#face-control-panel {
		align-items: center;
		display: flex;
		height: 10vh;
		justify-content: space-between;
		width: 80vw;
	}
	.control-column {
		border-radius: 20px;
		padding: 10px;
		width: 30%;
	}
	#sphere1-controls {
		border: 1px solid green;
	}
	#sphere2-controls {
		border: 1px solid blue;
	}
	#sphere3-controls {
		border: 1px solid red;
	}
</style>