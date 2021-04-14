var rotate = function (nums, k) {
  k = k % nums.length;
  if (!k) return nums;
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums
};

let res = rotate([1, 2, 3, 4, 5, 6, 7], 3);
console.log(res);
