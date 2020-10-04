var twoSum = function (nums, target) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
  return res;
};

// var twoSum = function (nums, target) {
//   let obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (obj[target - nums[i]] !== undefined) {
//       return [obj[target - nums[i]], i];
//     } else {
//       obj[nums[i]] = i;
//     }
//   }
// };

let res = twoSum([3, 2, 4], 6);
console.log(res);
