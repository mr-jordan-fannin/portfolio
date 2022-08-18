<script>
	import FaceControls from '$facemaker_components/FaceControls.svelte'
	import FaceView from '$facemaker_components/FaceView.svelte'
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
		height: 100vh;
		width: 100vw;
	}
	#face-view {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 1;
	}
	#face-controls {
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		z-index: 2;
		overflow-y: auto;
	}
</style>
