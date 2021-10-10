var canPartition = function (nums) {
  let n = nums.length;
  if (n < 2) return false;
  let sum = 0,
    maxNum = 0;
  for (let num of nums) {
    sum += num;
    maxNum = Math.max(maxNum, num);
  }

  if (sum & 1 || maxNum > sum / 2) return false;

  let target = sum / 2;

  let dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for (let num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] |= dp[i - num];
    }
  }
  return dp[target];
};
