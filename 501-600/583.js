var minDistance = function (word1, word2) {
  let n = word1.length,
    m = word2.length;
  let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    let c1 = word1[i - 1];
    for (let j = 1; j <= m; j++) {
      let c2 = word2[j - 1];
      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  let lcs = dp[n][m];
  return n + m - lcs - lcs;
};

// 最小编辑
var minDistance = function (word1, word2) {
  let m = word1.length, n = word2.length
  if (m * n === 0) return m + n
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

  for(let i = 1; i <= m; i ++) {
    dp[i][0] = i
  }
  for(let i = 1; i <= n; i ++) {
    dp[0][i] = i
  }
  for(let i = 1; i <= m; i ++) {
    let c1 = word1[i - 1]
    for(let j = 1; j <= n; j ++) {
      let c2 = word2[j - 1]
      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1
      }
    }
  }
  return dp[m][n]
}

let res = minDistance("sea", "eat");

console.log(res, "res");
