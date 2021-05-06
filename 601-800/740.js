var deleteAndEarn = function(nums) {
  const n = nums.length
  let ans = 0
  nums.sort((a, b) => a - b)

  let total = [nums[0]]
  for(let i = 1; i < n; i ++) {
    const val = nums[i]
    if (val === nums[i - 1]) {
      total[total.length - 1] += val
    } else if (val = nums[i - 1] + 1) {
      total.push(val)
    } else {

    }
  }
  ans += rob(total)
  return ans
};
