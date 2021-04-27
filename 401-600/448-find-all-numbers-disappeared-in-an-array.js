// hash 表
var findDisappearedNumbers = function (nums) {
  let map = {},
    res = [];
  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!map[i]) {
      res.push(i);
    }
  }
  return res;
};

// 原地修改
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let newIndex = Math.abs(nums[i]) - 1;

    if (nums[newIndex] > 0) {
      nums[newIndex] *= -1;
    }
  }

  let res = [];
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] > 0) {
      res.push(i);
    }
  }
  return res;
};
