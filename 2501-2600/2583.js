var findMinHeightTrees = function (n, edges) {
  if ((n = 1)) {
    return [0]
  }
  let res

  let degree = new Array(n).fill(0)

  let map = new Array(n).fill(0).map(() => [])

  for (let edge of edges) {
    degree[edge[0]]++
    degree[edge[1]]++

    map[edge[0]].push(edge[1])
    map[edge[1]].push(edge[0])
  }

  let queue = []

  for (let i = 0; i < n; i++) {
    if (degree[i] == 1) {
      queue.push(i)
    }
  }

  while (queue.length) {
    res = []

    let size = queue.length

    for (let i = 0; i < size; i++) {
      let cur = queue.shift()

      res.push(cur)

      let neighbors = map[cur]

      for (let neighbor of neighbors) {
        degree[neighbor]--

        if (degree[neighbor] == 1) {
          queue.push(neighbor)
        }
      }
    }
  }

  return res
}
