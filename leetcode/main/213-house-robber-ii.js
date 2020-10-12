var rob = function (nums) {
  var n = nums.length;
  if (n == 1) return nums[0];
  else if (!n) return 0;
  let need1 = dfs(nums.slice(1));
  let need2 = dfs(nums.slice(0, -1));
  return Math.max(need1, need2);
  function dfs(nums) {
    let n = nums.length;
    let dp = Array.from(Array(n), () => []);
    dp[0] = [0, nums[0]];
    for (let i = 1; i < nums.length; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
      dp[i][1] = nums[i] + dp[i - 1][0];
    }
    return Math.max(dp[n - 1][0], dp[n - 1][1]);
  }
};

var rob = function (nums) {
  var n = nums.length;
  if (n == 1) {
    return nums[0];
  } else if (!n) return 0;

  let need1 = dfs(nums.slice(1));
  let need2 = dfs(nums.slice(0, -1));

  return Math.max(need1, need2);
  function dfs(arr) {
    let dp = [0, arr[0]];
    for (let i = 2; i < n; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i - 1]);
    }
    return dp[arr.length];
  }
};

// 去维
var rob = function (nums) {
  var n = nums.length;
  if (n == 1) {
    return nums[0];
  } else if (!n) return 0;

  let need1 = dfs(nums.slice(1));
  let need2 = dfs(nums.slice(0, -1));
  return Math.max(need1, need2);
  // [1, 2 ,3]
  function dfs(nums) {
    let prev = 0,
      cur = 0;
    for (let i = 0; i < nums.length; i++) {
      let tem = cur;
      cur = Math.max(cur, prev + nums[i]);
      prev = tem;
    }
    return cur;
  }
};

// 间隔步数
var rob = function (nums) {
  var n = nums.length;
  if (n == 1) {
    return nums[0];
  } else if (!n) return 0;

  let need1 = dfs(nums.slice(1));
  let need2 = dfs(nums.slice(0, -1));
  return Math.max(need1, need2);
  function dfs(nums) {
    let odd = 0
    let even = 0
    // [1, 2, 3, 1, 1]
    for (let i = 0; i < nums.length; i++) {
      if (i % 2) {
        odd = Math.max(odd+nums[i],even);
      } else {
        even = Math.max(even+nums[i],odd);
      }
    }
    return Math.max(odd, even)
  }
};

let res = rob([1, 2, 3, 1]);

console.log(res);
