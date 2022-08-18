export default class NodeSphere {
	constructor({
		c = 0xff0000,
		m = null,
		r = .5,
		s = 16,
		w = true,
		x = 0,
		y = 0,
		z = 0
	}) {
		this.c = c
		this.m = m
		this.r = r
		this.s = s
		this.w = w
		this.x = x
		this.y = y
		this.z = z
	}
}