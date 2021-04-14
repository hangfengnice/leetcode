// hash
var findDuplicates = function (nums) {
  let map = {},
    res = [];
  for (let num of nums) {
    map[num] != undefined ? map[num]++ : (map[num] = 1);
    if (map[num] == 2) {
      res.push(num);
    }
  }
  return res;
};

// 标记
var findDuplicates = function (nums) {
  const res = [];
  for (let num of nums) {
    const absNum = Math.abs(num);
    if (nums[absNum - 1] < 0) {
      res.push(absNum);
    } else {
      nums[absNum - 1] *= -1;
    }
  }
  return res;
};

// 标记
var findDuplicates = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      res.push(index + 1);
    } else {
      nums[index] *= -1;
    }
  }
  return res;
};

let result = findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);

console.log(result);
