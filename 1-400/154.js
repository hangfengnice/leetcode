var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    const povit = low + Math.floor((high - low) / 2);
    if (nums[povit] < nums[high]) {
      high = povit;
    } else if (nums[povit] > nums[high]) {
      low = povit + 1;
    } else {
      high -= 1;
    }
  }
  return nums[low];
};
