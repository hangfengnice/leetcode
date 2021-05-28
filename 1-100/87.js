var isScramble = function (s1, s2) {
  let n = s1.length
  let m = s2.length

  if (n != m) return false

  let dp = new Array(n)
  for(let i = 0; i < n; i ++) {
    dp[i] = new Array(n)
    for(let j = 0; j < n; j ++) {
      dp[i][j] = new Array(n + 1).fill(false)
    }
  }

  for(let i = 0; i < n; i ++) {
    for(let j = 0; j < n; j ++) {
      dp[i][j][1] = s1[i] == s2[j]
    }
  }

  for(let len = 2; len <= n; len ++) {
    for(let i = 0; i < n - len + 1; i ++) {
      for(let j = 0; j < n - len + 1; j ++) {
        for(let k = 1; k < len && !dp[i][j][len]; k ++) {
          dp[i][j][len] = (dp[i][j][k] && dp[i + k][j + k][len - k]) ||
          (dp[i][j + len - k][k] && dp[i + k][j][len - k]);
        }
      }
    }
  }

  return dp[0][0][n]
}
