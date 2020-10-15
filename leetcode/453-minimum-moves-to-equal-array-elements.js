var minMoves = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = nums.length - 1; i > 0; i--) {
    count += nums[i] - nums[0];
  }
  return count;
};
