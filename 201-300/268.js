var missingNumber = function (nums) {
  let n = nums.length
  return (1 + n) * n / 2 - nums.reduce((a, b) => a + b, 0)
};

let res = missingNumber([0, 1]);

console.log(res, "res");
