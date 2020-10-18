var removeElement = function (nums, val) {
  let i = 0,
    n = nums.length;
  while (i < n) {
    if (nums[i] == val) {
      nums[i] = nums[n - 1];
      n--;
    } else {
      i++;
    }
  }
  return n;
};

// 双指针
var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i++] = nums[j];
    }
  }
  return i;
};
