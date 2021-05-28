var searchInsert = function (nums, target) {
  let n = nums.length;
  let l = 0,
    r = n - 1;

  while (l <= r) {
    let mid = ((r - l) >> 1) + l;
    if (nums[l] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return l;
};

let res = searchInsert([1, 3, 5, 5], 2);
console.log(res);
