var sortColors = function (nums) {
  let n = nums.length;
  let ptr = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] == 0) {
      if (ptr != i) {
        [nums[i], nums[ptr]] = [nums[ptr], nums[i]];
      }
      ptr++;
    }
  }
  for (let i = ptr; i < n; i++) {
    if (nums[i] == 1) {
      if (ptr != i) {
        [nums[i], nums[ptr]] = [nums[ptr], nums[i]];
      }
      ptr++;
    }
  }
};

let result = sortColors([2, 0, 2, 1, 1, 0]);

console.log(result);
