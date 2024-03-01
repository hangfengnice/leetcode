var rootCount = function (edges, guesses, k) {
  const n = edges.length + 1

  const g = new Array(n).fill(0).map(() => [])

  const st = new Set()

  const h = (x, y) => {
    return (x << 20) | y
  }

  edges.forEach((v) => {
    g[v[0]].push(v[1])
    g[v[1]].push(v[0])
  })

  guesses.forEach((v) => {
    st.add(h(v[0], v[1]))
  })

  let cnt = 0
  let res = 0

  dfs(0, -1)
  redfs(0, -1, cnt)

  return res

  function dfs(x, fat) {
    for (const y of g[x]) {
      if (y == fat) {
        continue
      }

      cnt += st.has(h(x, y))

      dfs(y, x)
    }
  }

  function redfs(x, fat, cnt) {
    if (cnt >= k) {
      res++
    }

    for (let y of g[x]) {
      if (y == fat) {
        continue
      }

      redfs(y, x, cnt - st.has(h(x, y)) + st.has(h(y, x)))
    }
  }
}
