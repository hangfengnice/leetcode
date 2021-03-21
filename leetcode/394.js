var findTargetSumWays = function (nums, S) {
  let n = 0;
  dfs(0, 0);
  return n;
  function dfs(idx, sum) {
    if (nums.length > idx) {
      dfs(idx + 1, sum + nums[idx]);
      dfs(idx + 1, sum - nums[idx]);
    } else {
      sum == S && n++;
    }
  }
};
