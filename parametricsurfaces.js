const math = require('mathjs')

const x = math.eval('f(u, v) = cos(u)')
const y = math.eval('f(u, v) = sin(u)')
const z = math.eval('f(u, v) = cos(v)')
const w = math.eval('f(u, v) = sin(v)')

const f = (u, v) => [x(u, v), y(u, v), z(u, v), w(u, v)]

const umin = 0
const umax = 2 * Math.PI
const vmin = 0
const vmax = 2 * Math.PI

const subdivisions = 25

const verts = []
const edges = []

for (let i = 0; i <= subdivisions; i++) {
    for (let j = 0; j <= subdivisions; j++) {
        const u = (i * (umax - umin) / subdivisions) + umin
        const v = (j * (vmax - vmin) / subdivisions) + vmin
        verts.push(f(u, v))
    }
}

let a, b, c, d

for (let i = 0; i < subdivisions; i++) {
    for (let j = 0; j < subdivisions; j++) {
        a = i * (subdivisions + 1) + j
        b = i * (subdivisions + 1) + j + 1
        c = (i + 1) * (subdivisions + 1) + j + 1
        d = (i + 1) * (subdivisions + 1) + j
        
        edges.push([a,b])
        edges.push([b,d])
        edges.push([b,c])
        edges.push([c,d])
    }
}

console.log([verts.map(xs => xs), edges])