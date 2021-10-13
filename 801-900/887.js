var superEggDrop = function (k, n) {
  let meno = {};

  return dp(k, n);

  function dp(k, n) {
    if (k === 1) return n;
    if (n === 0) return 0;

    let key = "" + k + n;
    if (meno[key]) {
      return meno[key];
    }
    let res = Infinity;

    for (let i = 1; i <= n; i++) {
      res = Math.min(res, Math.max(dp(k, n - i), dp(k - 1, i - 1)) + 1);
    }
    meno[key] = res;
    return res;
  }
};



// 换种思路
var superEggDrop = function (K, N) {
  let dp = new Array(K + 1).fill(0).map(() => new Array(N + 1).fill(0))

  let m = 0
  debugger
  while(dp[K][m] < N) {
    m ++
    for(let k = 1; k <= K; k ++) {
      dp[k][m] = dp[k][m - 1] + dp[k - 1][m - 1] + 1
    }
  }
  return m
}

let res = superEggDrop(1, 2)
console.log(res)
