var maxRotateFunction = function (nums) {
  let N = nums.length;
  let s = 0;
  let t = 0;
  for (let i = 0; i < N; i++) {
    s += nums[i];
    t += i * nums[i];
  }

  let res = t;
  for (let i = N - 1; i >= 0; i--) {
    t += S - N * nums[i];
    res = Math(res, t);
  }
  return res;
};
