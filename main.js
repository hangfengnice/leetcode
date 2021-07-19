var search = function (nums, target) {
  let ans = 0;
  const leftIdx = binarySearch(nums, target, true);
  const rightIdx = binarySearch(nums, target, false) - 1;

  if (
    leftIdx <= rightIdx &&
    rightIdx < nums.length &&
    nums[leftIdx] === target &&
    nums[rightIdx] === target
  ) {
    ans = rightIdx - leftIdx + 1;
  }

  return ans;

  function binarySearch(nums, target, lower) {
    let left = 0,
      right = nums.length - 1,
      ans = nums.length;

    while (left <= right) {
      const mid = Math.floor((right + left) / 2);

      if (nums[mid] > target || (lower && nums[mid] >= target)) {
        right = mid - 1;
        ans = mid;
      } else {
        left = mid + 1;
      }
    }
    return ans;
  }
};

let res = search([5,7,7,8,8,10], 8)

console.log(res, 'res')
