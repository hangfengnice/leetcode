var findMaxForm = function (strs, m, n) {
  const map = {};
  for (let str of strs) {
    let ones = 0;
    for (let ch of str) {
      if (ch == "1") ones++;
    }
    map[str] = [str.length - ones, ones];
  }

  const N = strs.length;
  const dp = new Array(m + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 0; i < N; i++) {
    const [v0, v1] = map[strs[i]];

    for (let j = m; j >= v0; j--) {
      for (let k = n; k >= v1; k--) {
        dp[j][k] = Math.max(dp[j][k], dp[j - v0][k - v1] + 1);
      }
    }
  }

  return dp[m][n];
};

let res = findMaxForm(
  (strs = ["10", "0001", "111001", "1", "0"]),
  (m = 5),
  (n = 3)
);

console.log(res);
