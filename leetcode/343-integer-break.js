// 递归 超时
var integerBreak = function (n) {
  return breakInteger(n);

  function breakInteger(n) {
    if (n == 1) return 1;
    let res = -1;
    for (let i = 1; i < n; i++) {
      res = Math.max(res, i * (n - i), i * breakInteger(n - i));
    }
    return res;
  }
};

// 递归 加 备忘录
var integerBreak = function (n) {
  let meno = [];
  return breakInteger(n);

  function breakInteger(n) {
    if (n == 1) return 1;
    if (meno[n] != undefined) return meno[n];
    let res = -1;
    for (let i = 1; i < n; i++) {
      res = Math.max(res, i * (n - i), i * breakInteger(n - i));
    }
    meno[n] = res;
    return res;
  }
};

// 动态规划
var integerBreak = function (n) {
  let dp = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    dp[i] = 0;
    // j 的取值范围
    for (let j = 1; j <= i - j; j++) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }
  return dp[n];
};

let res = integerBreak(3);

console.log(res);
