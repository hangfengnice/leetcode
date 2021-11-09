var racecar = function (target) {
  let dp = [];
  for (let i = 1; i <= target; i++) {
    dp[i] = Infinity;

    let j = 1,
      cnt1 = 1;

    for (; j < i; j = (1 << ++cnt1) - 1) {
      for (let k = 0, cnt2 = 0; k < j; k = (1 << ++cnt2) - 1) {
        dp[i] = Math.min(dp[i], cnt1 + 1 + cnt2 + 1 + dp[i - (j - k)]);
      }
    }
    dp[i] = Math.min(dp[i], cnt1 + (i === j ? 0 : 1 + dp[j - i]));
  }
  return dp[target];
};

let res = racecar(6)
console.log(res, 'res')
