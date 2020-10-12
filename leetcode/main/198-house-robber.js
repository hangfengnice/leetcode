// 递归
var rob = function (nums) {
  let len = nums.length;
  return dfs(0);

  function dfs(start) {
    if (start >= len) return 0;
    let res = 0;
    for (let i = start; i < len; i++) {
      res = Math.max(res, nums[i] + dfs(i + 2));
    }
    return res;
  }
};

// 递归 备忘录
var rob = function (nums) {
  let len = nums.length,
    meno = [];
  return dfs(0);

  function dfs(start) {
    if (start >= len) return 0;
    if (meno[start] != undefined) return meno[start];
    let res = 0;
    for (let i = start; i < len; i++) {
      res = Math.max(res, nums[i] + dfs(i + 2));
    }
    meno[start] = res;
    return res;
  }
};

// 动态规划
// var rob = function (nums) {
//   let len = nums.length
//   if (!len) return 0

//   let meno = []
//   for(let i = len - 2; i >= 0; i --) {
//     for(let j = i; j < len; j ++) {
//       meno[i] = Math.max(meno[i], meno[i])
//     }
//   }
// };

var rob = function (nums) {
  var n = nums.length;
  if (!n) return 0;
  else if (n == 1) return nums[0];
  var dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  // var result = Math.max(dp[0], dp[1])
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return Math.max(dp[n - 1], dp[n - 2]);
};
