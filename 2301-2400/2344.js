var minOperations = function (nums, numsDivide) {
  var g = 0;
  for (let num of numsDivide) {
    g = gcd(g, num);
  }
  var min = Infinity;
  for (let num of nums) {
    if (g % num === 0) {
      min = Math.min(min, num);
    }
  }
  var ans = 0;
  for (x of nums) {
    if (x < min) ans++;
  }
  return ans;

  function gcd(a, b) {
    return a === 0 ? b : gcd(b % a, a);
  }
};
