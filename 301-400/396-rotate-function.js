// 推导过程：
// （1）F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-2) * Bk[n-2] + (n-1) * Bk[n-1]
// （2）F(k+1) = 0 * Bk[n-1] + 1 * Bk[0] + 2 * Bk[2] + ... + (n-1) * Bk[n-2]
// （2）-（1）得：F(k+1) - F(k) = (Bk[0] + Bk[1] + ... + Bk[n-2]) - (n-1)*Bk[n-1]
// 可得：F(k+1) - F(k) = (Bk[0] + Bk[1] + ... + Bk[n-2] + Bk[n-1]) - n*Bk[n-1]
// 令S=Sum{Bk}
// 有：F(k+1) = F(k) + S - n * Bk[n-1]

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
