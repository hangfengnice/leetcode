var sellingWood = function (m, n, prices) {
  const value = new Map()

  const meno = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(-1))

  for (const price of prices) {
    value.set(pairHash(price[0], price[1]), price[2])
  }

  function pairHash(x, y) {
    return (x << 16) ^ y
  }
  return dfs(m, n)

  function dfs(x, y) {
    if (meno[x][y] != -1) {
      return meno[x][y]
    }

    let ret = value.has(pairHash(x, y)) ? value.get(pairHash(x, y)) : 0
    if (x > 1) {
      for (let i = 1; i < x; i++) {
        ret = Math.max(ret, dfs(i, y) + dfs(x - i, y))
      }
    }
    if (y > 1) {
      for (let j = 1; j < y; j++) {
        ret = Math.max(ret, dfs(x, j) + dfs(x, y - j))
      }
    }
    memo[x][y] = ret
    return ret
  }
}
