<script>
	import FaceControls from '$facemaker_components/FaceControls.svelte'
	import FaceView from '$facemaker_components/FaceView.svelte'
</script>


<div id="face-creator">
	<FaceView />
	<FaceControls />
</div>


<style>
	#face-creator {
		height: 100vh;
		width: 100vw;
	}
</style>
