var minDistance = function (word1, word2) {
  let n = word1.length,
    m = word2.length;

  if (n * m === 0) return n + m;

  let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    dp[i][0] = i;
  }
  for (let i = 1; i <= m; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      let left = dp[i - 1][j] + 1;
      let down = dp[i][j - 1] + 1;
      let left_down = dp[i - 1][j - 1];
      if (word1[i - 1] !== word2[j - 1]) {
        left_down++;
      }
      dp[i][j] = Math.min(left, down, left_down);
    }
  }
  return dp[n][m];
};

// 滚动数组
var minDistance = function (word1, word2) {
  let n = word1.length,
    m = word2.length;
  if (n * m === 0) return n + m;
  let dp = new Array(m + 1).fill(0).map((_, i) => i);

  let temp = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      let p = dp[j];
      if (j === 0) {
        dp[j] = i;
      } else {
        if (word1[i - 1] === word2[j - 1]) {
          dp[j] = temp;
        } else {
          dp[j] = Math.min(dp[j - 1], dp[j], temp) + 1;
        }
      }
      temp = p;
    }
  }
  return dp[m];
};
