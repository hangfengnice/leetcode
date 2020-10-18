var removeDuplicates = function (nums) {
  let n = nums.length;
  if (!n) return 0;
  let i = 0;
  for (let j = 1; j < n; j++) {
    if (nums[j] != nums[i]) {
      if (j - i > 1) {
        nums[i + 1] = nums[j];
      }
      i++;
    }
  }
  return i + 1;
};
