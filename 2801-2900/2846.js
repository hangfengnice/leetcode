var minOperationsQueries = function (n, edges, queries) {
  const m = queries.length

  const W = 26

  const neighbors = new Array(n).fill(null).map(() => new Map())

  for (const edge of edges) {
    neighbors[edge[0]].set(edge[1], edge[2])
    neighbors[edge[1]].set(edge[0], edge[2])
  }

  const queryArr = new Array(n).fill(null).map(() => [])

  for (let i = 0; i < m; i++) {
    queryArr[queries[i][0]].push([queries[i][1], i])
    queryArr[queries[i][1]].push([queries[i][0], i])
  }

  const count = new Array(n).fill(null).map(() => new Array(W + 1).fill(0))
  const visited = new Array(n).fill(0)
  const uf = new Array(n).fill(0)
  const lca = new Array(m).fill(0)
}
