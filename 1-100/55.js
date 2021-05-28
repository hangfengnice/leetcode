var canJump = function (nums) {
  let n = nums.length;
  let rightMost = 0;
  for (let i = 0; i < n; i++) {
    if (i <= rightMost) {
      rightMost = Math.max(rightMost, i + nums[i]);
      if (rightMost >= n - 1) {
        return true;
      }
    } else {
      break;
    }
  }
  return false;
};

// 动态规划
var canJump = function (nums) {
  if (!nums || !nums.length) return false;
  let length = nums.length;
  let dp = new Array(length);
  dp[0] = true;
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && j + nums[j] >= i) {
        dp[i] = true;
        break;
      }
    }
  }
  console.log(dp);
  return dp[length - 1];
};


canJump([2, 3, 1, 1, 4])
