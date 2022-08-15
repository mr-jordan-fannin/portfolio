<script>
	import FaceControls from '$components/FaceControls.svelte'
	import FaceView from '../components/FaceView.svelte'
</script>


<div id="face-creator">
	<div id="face-view">
		<FaceView />
	</div>
	<div id="face-controls">
		<FaceControls />
	</div>
</div>


<style>
	#face-creator {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: space-evenly;
		width: 100vw;
	}
	#face-view {
		border: 3px solid blue;
		height: 60vh;
		width: 90%;
	}
	#face-controls {
		border: 3px solid green;
		height: 30vh;
		width: 90%;
	}
</style>
