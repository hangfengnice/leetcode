var climbStairs = function (n) {
  if (n == 1) return 1;
  if (n == 2) return 2;

  return climbStairs(n - 1) + climbStairs(n - 2);
};

// memo
var climbStairs = function (n) {
  let memo = {};
  return calcWays(n);

  function calcWays(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    if (!memo[n]) memo[n] = calcWays(n - 1) + calcWays(n - 2);
    return memo[n];
  }
};

var climbStairs = function (n) {
  let meno = [1, 1];
  for (let i = 2; i <= n; i++) {
    meno[i] = meno[i - 1] + meno[i - 2];
  }
  return meno[n];
};

var climbStairs = function (n) {
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 1; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
