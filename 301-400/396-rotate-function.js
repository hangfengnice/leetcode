var maxRotateFunction = function (A) {
  let n = A.length;
  let s = 0;
  let t = 0;
  for (let i = 0; i < N; i++) {
    s += A[i];
    t += i * A[i];
  }
  let res = t;
  for (let i = N - 1; i >= 0; i--) {
    t += S - N * A[i];
    res = Math.max(res, t);
  }
  return res;
};
