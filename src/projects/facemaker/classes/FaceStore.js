import NodeSphere from '$facemaker_classes/NodeSphere'
import makeSphere from '$facemaker_utils/makeSphere'
import makeLines from '$facemaker_utils/makeLines'


export default class FaceStore {

	scene = null
	
	nodes = {
		brow: makeSphere(new NodeSphere({
			c: 'yellow',
			n: 'brow',
			x: 0,
			y: 3.5,
			z: 2,
		})),
		cranium: makeSphere(new NodeSphere({
			c: 'dimgray',
			n: 'cranium',
			r: 4,
			x: 0,
			y: 3.5,
			z: -2,
		})),
		cheek_left: makeSphere(new NodeSphere({
			c: 'lime',
			n: 'cheek_left',
			x: 3.5,
			y: 1,
			z: 1,
		})),
		cheek_right: makeSphere(new NodeSphere({
			c: 'green',
			n: 'cheek_right',
			x: -3.5,
			y: 1,
			z: 1,
		})),
		chin: makeSphere(new NodeSphere({
			c: 'purple',
			n: 'chin',
			x: 0,
			y: -4,
			z: 2,
		})),
		earlobe_left: makeSphere(new NodeSphere({
			c: 'tan',
			n: 'earlobe_left',
			x: 4,
			y: 1.5,
			z: -1,
		})),
		earlobe_right: makeSphere(new NodeSphere({
			c: 'brown',
			n: 'earlobe_right',
			x: -4,
			y: 1.5,
			z: -1,
		})),
		eartip_left: makeSphere(new NodeSphere({
			c: 'tan',
			n: 'eartip_left',
			x: 5.5,
			y: 4.5,
			z: -2,
		})),
		eartip_right: makeSphere(new NodeSphere({
			c: 'brown',
			n: 'eartip_right',
			x: -5.5,
			y: 4.5,
			z: -2,
		})),
		eye_left: makeSphere(new NodeSphere({
			c: 'blue',
			n: 'eye_left',
			x: 2,
			y: 3,
			z: 1.5,
		})),
		eye_right: makeSphere(new NodeSphere({
			c: 'navy',
			n: 'eye_right',
			x: -2,
			y: 3,
			z: 1.5,
		})),
		forehead: makeSphere(new NodeSphere({
			c: 'orange',
			n: 'forehead',
			x: 0,
			y: 6,
			z: 1.5,
		})),
		horn_left: makeSphere(new NodeSphere({
			c: 'violet',
			n: 'horn_left',
			x: 3,
			y: 8,
			z: 1.5,
		})),
		horn_right: makeSphere(new NodeSphere({
			c: 'indigo',
			n: 'horn_right',
			x: -3,
			y: 8,
			z: 1.5,
		})),
		jaw_left: makeSphere(new NodeSphere({
			c: 'lightgray',
			n: 'jaw_left',
			x: 3.5,
			y: -2,
			z: 0,
		})),
		jaw_right: makeSphere(new NodeSphere({
			c: 'darkgray',
			n: 'jaw_right',
			x: -3.5,
			y: -2,
			z: 0,
		})),
		mouth_left: makeSphere(new NodeSphere({
			c: 'skyblue',
			n: 'mouth_left',
			x: 1.5,
			y: -1,
			z: 2,
		})),
		mouth_middle: makeSphere(new NodeSphere({
			c: 'aqua',
			n: 'mouth_middle',
			x: 0,
			y: -1.5,
			z: 2,
		})),
		mouth_right: makeSphere(new NodeSphere({
			c: 'lightblue',
			n: 'mouth_right',
			x: -1.5,
			y: -1,
			z: 2,
		})),
		nose: makeSphere(new NodeSphere({
			c: 'red',
			n: 'nose',
			x: 0,
			y: 0.5,
			z: 3,
		})),
		temple_left: makeSphere(new NodeSphere({
			c: 'magenta',
			n: 'temple_left',
			x: 3.5,
			y: 5,
			z: 0,
		})),
		temple_right: makeSphere(new NodeSphere({
			c: 'pink',
			n: 'temple_right',
			x: -3.5,
			y: 5,
			z: 0,
		}))
	}

	lines = makeLines(this.nodes)

	updateFace = function(node) {
		// Symmetrical Nodes
		if (node.name.includes('left')) {
			this.nodes[node.name.replace('left', 'right')].position.x = node.position.x * -1
			this.nodes[node.name.replace('left', 'right')].position.y = node.position.y
			this.nodes[node.name.replace('left', 'right')].position.z = node.position.z
		} else if (node.name.includes('right')) {
			this.nodes[node.name.replace('right', 'left')].position.x = node.position.x * -1
			this.nodes[node.name.replace('right', 'left')].position.y = node.position.y
			this.nodes[node.name.replace('right', 'left')].position.z = node.position.z
		}

		// Redraw Lines
		Object.values(this.lines).forEach(line => {
			this.scene.remove(line)
			line.geometry.dispose()
			line.material.dispose()
		})
		this.lines = {}
		this.lines = makeLines(this.nodes)
		Object.values(this.lines).forEach(line => {
			this.scene.add(line)
		})
		return this
	}
}