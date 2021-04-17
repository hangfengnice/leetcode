var containsNearbyAlmostDuplicate = function (nums, t, k) {
  let len = nums.length;
  if (len == 0 || k <= 0 || t < 0) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (Math.abs(j - i) <= k && Math.abs(nums[j] - nums[i]) <= t) {
        return true;
      }
    }
  }
  return false;
};
