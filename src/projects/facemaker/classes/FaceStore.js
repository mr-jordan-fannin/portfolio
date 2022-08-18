import NodeSphere from '$facemaker_classes/NodeSphere'
import makeSphere from '$facemaker_utils/makeSphere'
import makeLines from '$facemaker_utils/makeLines'


export default class FaceStore {

	scene = null
	
	nodes = {
		brow: makeSphere(new NodeSphere({
			c: 'yellow',
			x: 0,
			y: 3.5,
			z: 2,
		})),
		cranium: makeSphere(new NodeSphere({
			c: 'white',
			r: 4,
			x: 0,
			y: 3.5,
			z: -2,
		})),
		cheek_left: makeSphere(new NodeSphere({
			c: 'lime',
			x: 4,
			y: 1,
			z: 1,
		})),
		cheek_right: makeSphere(new NodeSphere({
			c: 'green',
			x: -4,
			y: 1,
			z: 1,
		})),
		chin: makeSphere(new NodeSphere({
			c: 'purple',
			x: 0,
			y: -4,
			z: 2,
		})),
		eye_left: makeSphere(new NodeSphere({
			c: 'blue',
			x: 2.5,
			y: 3,
			z: 1,
		})),
		eye_right: makeSphere(new NodeSphere({
			c: 'navy',
			x: -2.5,
			y: 3,
			z: 1,
		})),
		forehead: makeSphere(new NodeSphere({
			c: 'orange',
			x: 0,
			y: 6,
			z: 1.5,
		})),
		jaw_left: makeSphere(new NodeSphere({
			c: 'cyan',
			x: 4,
			y: -2,
			z: 0,
		})),
		jaw_right: makeSphere(new NodeSphere({
			c: 'skyblue',
			x: -4,
			y: -2,
			z: 0,
		})),
		nose: makeSphere(new NodeSphere({
			c: 'red',
			x: 0,
			y: 0.5,
			z: 3,
		})),
		temple_left: makeSphere(new NodeSphere({
			c: 'magenta',
			x: 3.5,
			y: 5,
			z: 0,
		})),
		temple_right: makeSphere(new NodeSphere({
			c: 'pink',
			x: -3.5,
			y: 5,
			z: 0,
		}))
	}

	lines = makeLines(this.nodes)

	updateLines = function() {
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