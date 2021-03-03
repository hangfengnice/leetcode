var checkPossibility = function(nums) {
  let cnt = 0, n = nums.length
  for(let i = 0; i < n - 1; i ++) {
    const x = nums[i], y = nums[i + 1]
    if (x > y) {
      cnt ++
      if (cnt > 1) return false

      if (!i && y < nums[i - 1]) {
        nums[i + 1] = x
      }
    }
  }
  return true
};
