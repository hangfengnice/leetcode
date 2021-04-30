var twoSum = function(nums, target) {
  let map = {}
  for(let i = 0; i < nums.length; i ++) {
    let key = nums[i]
    if (map[target - key] != undefined) {
      return [i, map[target - key]]
    } else {
      map[nums[i]] = i
    }
  }
};
