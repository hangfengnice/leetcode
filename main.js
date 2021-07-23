var maxSubArray = function (nums) {
  let pre = 0,
    maxAns = nums[0];

  nums.forEach((x) => {
    pre = Math.max(pre + x, x);

    maxAns = Math.max(maxAns, pre);
    console.log(pre, x, maxAns, "pre, x, maxAns");
  });

  return maxAns;
};

let res = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

console.log(res, "res");
