var maxRotateFunction = function (nums) {
  let n = nums.length;
  let s = 0;
  let t = 0;
  for (let i = 0; i < n; i++) {
    s += A[i];
    t += i * A[i];
  }

  let res = t;
  for (let i = n - 1; i > 0; i--) {
    t += s - n * nums[i];
    res = Math.max(res, t);
  }
  return res;
};
