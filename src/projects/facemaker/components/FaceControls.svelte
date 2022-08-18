<script>
	import faceStore from '$facemaker_stores/faceStore'
	import ModelControls from '$facemaker_components/ModelControls.svelte'

	console.log($faceStore)
</script>


<div id="face-control-panel">
	{#each [ ...Object.entries($faceStore.nodes) ] as node, i}
		<div class="control-column" style="border: 1px solid {node[1].color};">
			<h1>{node[0].toUpperCase()}</h1>
			<ModelControls model={node[1]} />
		</div>
	{/each}
</div>


<style>
	#face-control-panel {
		align-items: center;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
	.control-column {
		border-radius: 20px;
		padding: 10px;
	}
	h1 {
		margin-bottom: 10px;
	}
</style>