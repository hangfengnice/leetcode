var combinationSum4 = function (nums, target) {
  nums.sort((a, b) => a - b);
  let dp = [1];

  for (let i = 1; i <= target; i++) {
    dp[i] = 0;

    for (let num of nums) {
      if (num > i) break;
      dp[i] += dp[i - num];
    }
  }
  return dp[target];
};

let res = combinationSum4([9], 2)


