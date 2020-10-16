var tribonacci = function (n) {
  if (n < 3) return !n ? 0 : 1;
  var cur = 0,
    s1 = 0,
    s2 = 1,
    s3 = 2;
  for (let i = 3; i <= n; i++) {
     cur = s1 + s2 + s3;
    s1 = s2;
    s2 = s3;
    s3 = cur;
  }
  return cur;
};
