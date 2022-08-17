<script>
	import FaceControls from '$facemaker_components/FaceControls.svelte'
	import FaceView from '$facemaker_components/FaceView.svelte'
	// import DoubleTorusExperiment from '../experiments/DoubleTorusExperiment.svelte';
</script>


<div id="face-creator">
	<div id="face-view">
		<FaceView />
		<!-- <DoubleTorusExperiment /> -->
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
		bottom: 1vh;
		left: 10vw;
		z-index: 2;
	}
</style>
