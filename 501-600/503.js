var nextGreaterElements = function (nums) {
  const n = nums.length;
  const ret = new Array(n).fill(-1);
  const stk = [];
  debugger
  for (let i = 0; i < 2 * n - 1; i++) {
    while (stk.length && nums[stk[stk.length - 1]] < nums[i % n]) {
      let last = stk.pop();
      ret[last] = nums[i % n];
    }
    stk.push(i % n);
  }
  return ret;
};

nextGreaterElements([2, 3, 1])
