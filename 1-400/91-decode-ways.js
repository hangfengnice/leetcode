// 2834
var numDecodings = function (s) {
  if (s[0] == 0) return 0;
  let n = s.length;
  let dp = Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    if (s[i - 1] != 0) {
      dp[i] += dp[i - 1];
    }
    if (s[i - 2] == 1 || (s[i - 2] == 2 && s[i - 1] < 7)) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[n];
};

// 递归
var numDecodings = function (s) {
  if (s[0] == 0) return 0;
  let n = s.length;
  return dfs(0);
  function dfs(start) {
    if (start == n) {
      return 1;
    }
    if (s[start] == 0) return 0;
    let odd = dfs(start + 1);
    let even = 0;
    if (start < n - 1) {
      let ten = s[start];
      let one = s[start + 1];
      if (ten + "" + one < 27) {
        even = dfs(start + 2);
      }
    }
    return even + odd;
  }
};

// 递归 备忘录
var numDecodings = function (s) {
  if (s[0] == 0) return 0;
  let n = s.length;
  let map = {};
  return dfs(0);
  function dfs(start) {
    if (start == n) {
      return 1;
    }
    if (s[start] == 0) return 0;
    if (map[start] != undefined) return map[start];
    let odd = dfs(start + 1);
    let even = 0;
    if (start < n - 1) {
      let ten = s[start];
      let one = s[start + 1];
      if (ten + "" + one < 27) {
        even = dfs(start + 2);
      }
    }
    let res = even + odd;
    map[start] = res;
    return res;
  }
};
let res = numDecodings("2834");

console.log(res);
