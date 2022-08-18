import makeLineSegment from '$facemaker_utils/makeLineSegment'


export default function makeLines(nodes) {

	const lines = {}

	let lineCount = 0

	for (let i = 0; i < Object.values(nodes).length; i++) {
		for (let j = 1; j < Object.values(nodes).length; j++) {
			if (i < j) {
				lines[`${lineCount}`] = makeLineSegment(
					{ ...Object.values(nodes)[i].position },
					{ ...Object.values(nodes)[j].position }
				)
				lineCount++
			}
		}
	}

	return lines

}