// 暴力
var findMaxConsecutiveOnes = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    let count = 0,
      j = i;
    while (nums[j]) {
      count++;
      j++;
    }
    max = Math.max(max, count);
  }
  return max;
};

// 一次遍历
var findMaxConsecutiveOnes = function (nums) {
  let count = 0,
    max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
  }
  return max;
};

// api 操作
var findMaxConsecutiveOnes = function (nums) {
  return Math.max(
    ...nums
      .join("")
      .split("0")
      .map((i) => i.length)
  );
};

// 双指针
var findMaxConsecutiveOnes = function (nums) {
  let l = 0,
    r = 0,
    max = 0,
    len = nums.length;
  while (r < len) {
    if (!nums[r++]) {
      max = Math.max(max, r - l - 1);
      l = r;
    }
  }
  return Math.max(max, r - l - 1);
};
