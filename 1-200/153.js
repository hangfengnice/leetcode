var findMin = function (nums) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let num of nums) {
    min = Math.min(min, num);
  }
  return min;
};

[4, 5,1, 3]
var findMin = function (nums) {
  let low = 0
  let high = nums.length - 1
  while(low < high) {
    const povit = low + Math.floor((high - low) / 2)
    if (nums[povit] < nums[high]) {
      high = povit
    } else {
      low = povit + 1
    }
  }

  return nums[low]
}
