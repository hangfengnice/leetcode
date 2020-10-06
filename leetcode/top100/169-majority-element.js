// 原生 js
var majorityElement = function (nums) {
  return nums.sort((a, b) => a - b)[~~(nums.length / 2)];
};

var majorityElement = function (nums) {
  let map = {},
    mid = ~~(nums.length / 2);
    console.log(mid);
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    map[num] == undefined ? (map[num] = 1) : map[num]++;
    if (map[num] > mid) return num;
  }
};

var res = majorityElement([3, 2, 3]);

console.log(res);
