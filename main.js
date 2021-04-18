var removeDuplicates = function(nums) {
  let l = 1
  for(let i = 1; i < nums.length; i ++) {
    if (nums[i] != nums[i - 1]) {
      if (l != i) {
        nums[l ++] = nums[i]
      }
    }
  }
  return l
};
