var numWays = function (n, relation, k) {
  const edge = new Array(n).fill(0).map(() => [])

  for(let [src, dst] of relation) {
    edge[src].push(dst)
  }

  let steps = 0
  const queue = [0]

  while(queue.length && steps < k) {
    steps ++
    const size = queue.length

    for(let i = 0; i < size; i ++) {
      const index = queue.shift()
      let list = edge[index]
      for(const cur of list) {
        queue.push(cur)
      }
    }
  }
  let ways = 0
  if (steps === k) {
    while(queue.length) {
      if (queue.shift() === n - 1) {
        ways ++
      }
    }
  }
  return ways
};


let res = numWays(n = 5, relation = [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]], k = 3)

console.log(res, 'res');
