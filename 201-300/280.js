var wiggleSort = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length - 1; i += 2) {
    swap(nums, i, i + 1);
  }
  function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
};

// 一次遍历
var wiggleSort = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if ((i % 2 === 0) === nums[i] > nums[i - 1]) {
      swap(nums, i, i + 1);
    }
  }
  function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
};
