let depids = new Set([1, 2])

let newdepids = new Set([3, 4 ])

let temp = depids

depids = newdepids

newdepids = temp

newdepids.clear()

console.log(depids, newdepids);
