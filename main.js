var minDistance = function (word1, word2) {
  let n = word1.length

  let m = word2.length

  if (n * m === 0) {
    return n + m
  }

  let D = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))

  for (let i = 0; i < n + 1; i++) {
    D[i][0] = i
  }

  for (let i = 0; i < m + 1; i++) {
    D[0][i] = i
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      let left = D[i - 1][j] + 1

      let right = D[i][j - 1] + 1

      let left_down = D[i - 1][j - 1]

      if (word1[i - 1] !== word2[j - 1]) {
        left_down + 1
      }
      D[i][j] = Math.min(left, Math.min(right, left_down))
    }
  }
  return D[i][j]
}
