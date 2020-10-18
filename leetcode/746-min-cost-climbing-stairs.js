var minCostClimbingStairs = function (cost) {
  let f1 = 0,
    f2 = 0;
  for (let i = cost.length - 1; i >= 0; i--) {
    let f0 = cost[i] + Math.min(f1, f2);
    f1 = f2;
    f2 = f0;
  }
  return Math.min(f1, f2);
};

var minCostClimbingStairs = function (cost) {
  let len = cost.length;
  let dp = Array(len).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i <= len; i++) {
    if (i == len) {
      return (dp[i] = Math.min(dp[i - 1], dp[i - 2]));
    } else {
      dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
    }
  }
  return dp[len];
};

var minCostClimbingStairs = function (cost) {
  let len = cost.length;
  let dp = [cost[0], cost[1]];

  for (let i = 2; i < len; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[len - 1], dp[len - 2]);
};

var minCostClimbingStairs = function (cost) {
  let pre = cost[0];
  let cur = cost[1];

  for (let i = 2; i < cost.length; i++) {
    let temp = cur;
    cur = Math.min(pre, cur) + cost[i];
    pre = temp;
  }
  return Math.min(pre, cur);
};

let result = minCostClimbingStairs([0,0,1,0]);

console.log(result);
