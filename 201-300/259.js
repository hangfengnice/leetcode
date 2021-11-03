var threeSumSmaller = function (nums, target) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    sum += twoSumSmaller(nums, i + 1, target - nums[i]);
  }
  return sum;

  function twoSumSmaller(nums, startIndex, target) {
    let sum = 0;
    let left = startIndex;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[left] + nums[right] < target) {
        sum += right - left;
        left++;
      } else {
        right--;
      }
    }
    return sum;
  }
};
