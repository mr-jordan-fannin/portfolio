import * as THREE from 'three'


export default function makeSkin() {

	const segmentHeight = 5 // ? WHAT ?!

	const bones = [];

	const shoulder = new THREE.Bone();
	const elbow = new THREE.Bone();
	const hand = new THREE.Bone();
	
	shoulder.add( elbow );
	elbow.add( hand );
	
	bones.push( shoulder );
	bones.push( elbow );
	bones.push( hand );
	
	shoulder.position.y = -1;
	elbow.position.y = 0;
	hand.position.y = 1;


	const geometry = new THREE.CylinderGeometry( 5, 5, 5, 5, 15, 5, 0 );
	const mesh = new THREE.SkinnedMesh( geometry );
	const skeleton = new THREE.Skeleton( bones );

	// create the skin indices and skin weights manually
	// (typically a loader would read this data from a 3D model for you)

	// const position = geometry.attributes.position;

	// const vertex = new THREE.Vector3();

	// const skinIndices = [];
	// const skinWeights = [];

	// for ( let i = 0; i < position.count; i ++ ) {

	// 	vertex.fromBufferAttribute( position, i );

	// 	// compute skinIndex and skinWeight based on some configuration data

	// 	const y = ( vertex.y + segmentHeight);

	// 	const skinIndex = Math.floor( y / segmentHeight );
	// 	const skinWeight = ( y % segmentHeight) / segmentHeight;

	// 	skinIndices.push( skinIndex, skinIndex + 1, 0, 0 );
	// 	skinWeights.push( 1 - skinWeight, skinWeight, 0, 0 );

	// }

	// geometry.setAttribute( 'skinIndex', new THREE.Uint16BufferAttribute( skinIndices, 4 ) );
	// geometry.setAttribute( 'skinWeight', new THREE.Float32BufferAttribute( skinWeights, 4 ) );

	// create skinned mesh and skeleton

	

	// see example from THREE.Skeleton

	// const rootBone = skeleton.bones[ 0 ];
	// mesh.add( rootBone );

	// bind the skeleton to the mesh

	mesh.bind( skeleton );

	// move the bones and manipulate the model

	// skeleton.bones[ 0 ].rotation.x = -0.1;
	// skeleton.bones[ 1 ].rotation.x = 1.2;

	return mesh

}