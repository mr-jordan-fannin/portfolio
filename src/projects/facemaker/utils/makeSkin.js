import * as THREE from 'three'


export default function makeSkin() {

	// const bones = [];

	// const shoulder = new THREE.Bone();
	// const elbow = new THREE.Bone();
	// const hand = new THREE.Bone();
	
	// shoulder.add( elbow );
	// elbow.add( hand );
	
	// bones.push( shoulder );
	// bones.push( elbow );
	// bones.push( hand );

	// console.log(shoulder)
	
	// shoulder.position.y = -1;
	// elbow.position.y = 0;
	// hand.position.y = 1;
	
	// const armSkeleton = new THREE.Skeleton( bones );

	// const geometry = new THREE.CylinderGeometry( 5, 5, 5, 5, 15, 5, 30 );

	// // create the skin indices and skin weights manually
	// // (typically a loader would read this data from a 3D model for you)

	// const position = geometry.attributes.position;

	// const vertex = new THREE.Vector3();

	// const skinIndices = [];
	// const skinWeights = [];

	// for ( let i = 0; i < position.count; i ++ ) {

	// 	vertex.fromBufferAttribute( position, i );

		// compute skinIndex and skinWeight based on some configuration data

		// const y = ( vertex.y + sizing.halfHeight );

		// const skinIndex = Math.floor( y / sizing.segmentHeight );
		// const skinWeight = ( y % sizing.segmentHeight ) / sizing.segmentHeight;

		// skinIndices.push( skinIndex, skinIndex + 1, 0, 0 );
		// skinWeights.push( 1 - skinWeight, skinWeight, 0, 0 );

	// }

	// geometry.setAttribute( 'skinIndex', new THREE.Uint16BufferAttribute( skinIndices, 4 ) );
	// geometry.setAttribute( 'skinWeight', new THREE.Float32BufferAttribute( skinWeights, 4 ) );

	// // create skinned mesh and skeleton

	// const mesh = new THREE.SkinnedMesh( geometry, material );
	// const skeleton = new THREE.Skeleton( bones );

	// // see example from THREE.Skeleton

	// const rootBone = skeleton.bones[ 0 ];
	// mesh.add( rootBone );

	// // bind the skeleton to the mesh

	// mesh.bind( skeleton );

	// // move the bones and manipulate the model

	// skeleton.bones[ 0 ].rotation.x = -0.1;
	// skeleton.bones[ 1 ].rotation.x = 0.2;

}