var tribonacci = function (n) {
  let meno = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    meno[i] = meno[i - 3] + meno[i - 2] + meno[i - 1];
  }
  return meno[n];
};

var tribonacci = function (n) {
  if (n < 3) return !n ? 0 : 1;
  let temp = 0,
    s1 = 0,
    s2 = 1,
    s3 = 1;
  for (let i = 3; i <= n; i++) {
    temp = s1 + s2 + s3;
    s1 = s2;
    s2 = s3;
    s3 = temp;
  }
  return temp;
};

let result = tribonacci(4);

console.log(result);
