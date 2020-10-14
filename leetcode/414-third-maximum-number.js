var thirdMax = function (nums) {
  nums = nums
    .sort((a, b) => a - b)
    .filter((item, index, arr) => arr.indexOf(item) == index);
  let len = nums.length;
  console.log(nums, len);
  return nums[len - 3] != undefined ? nums[len - 3] : nums[len - 1];
};

var thirdMax = function (nums) {
  let first = -Infinity, second = -Infinity, third = -Infinity;
  for (let num of nums) {
    if (num == first || num == second || num == third) continue
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second) {
      third = second;
      second = num;
    } else if (num > third) {
      third = num;
    }
  }
  return third != -Infinity ? third : first;
};

let result = thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]);

console.log(result);
