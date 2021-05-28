var threeSum = function(nums) {
  let n = nums.length
  nums.sort((a, b) => a - b)

  let ans = []
  for(let i = 0; i < n - 2; i ++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] == nums[i - 1]) continue

    let target = -nums[i]
    let third = n - 1

    for(let second = i + 1; second < n - 1; second ++) {
      if (second > i + 1 &&  nums[second] == nums[second - 1]) continue
      while(second < third && nums[second] + nums[third] > target) {
        third --
      }
      if(second == third) break

      if (nums[second] + nums[third] == target) {
        ans.push([nums[i], nums[second], nums[third]])
      }
    }
  }
  return ans
};
