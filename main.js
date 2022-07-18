var maximumSum = function (nums) {
  let res = -1;
  let len = nums.length;
  let cache = {};
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      let num1 = nums[i];
      let num2 = nums[j];
      let c1 = cache[num1] ? cache[num1] : (cache[num1] = cal(num1));
      let c2 = cache[num2] ? cache[num2] : (cache[num2] = cal(num2));
      if (c1 === c2) {
        res = Math.max(num1 + num2, res);
      }
    }
  }
  return res;
  function cal(num) {
    let res = 0;
    while (num > 0) {
      res += num % 10;
      num = (num / 10) >> 0;
    }
    return res;
  }
};

let res = maximumSum([18,43,36,13,7]);
console.log(res, "res");
