// 动态规划
var lengthOfLIS = function (nums) {
  let n = nums.length;
  if (n < 2) return n;

  let dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};

// 二分查找
var lengthOfLIS = function (nums) {
  let n = nums.length;
  if (n < 2) return n;

  let tail = Array(n);
  tail[0] = nums[0];
  let end = 0;

  for (let i = 1; i < n; i++) {
    if (nums[i] > tail[end]) {
      end++;
      tail[end] = nums[i];
    } else {
      let left = 0;
      let right = end;
      while (left < right) {
        let mid = left + ((right - left) >>> 1);
        if (tail[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      tail[left] = nums[i];
    }
  }
  return ++end;
};

let result = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);

console.log(result);
