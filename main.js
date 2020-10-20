var findKthLargest = function (nums, k) {
  let len = nums.length;
  let l = 0,
    r = len - 1;
  let target = len - k;
  while (true) {
    let index = partition(nums, l, r);
    if (index == target) {
      return nums[index];
    } else if (index < target) {
      l = index + 1;
    } else {
      r = index - 1;
    }
  }
  function partition(nums, l, r) {
    let pivot = nums[l];
    let j = l;
    for (let i = l + 1; i <= r; i++) {
      if (nums[i] < pivot) {
        j++;
        if (j != i) [nums[j], nums[i]] = [nums[i], nums[j]];
      }
    }
    [nums[j], nums[l]] = [nums[l], nums[j]];
    return j;
  }
};
