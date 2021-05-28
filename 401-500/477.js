var totalHammingDistance = function (nums) {
  let ans = 0,
    n = nums.length,
    c;
  for (let i = 0; i < 30; i++) {
    c = 0;
    for (const num of nums) {
      c = c + ((num >> i) & 1);
    }
    ans = ans + c * (n - c);
  }
  return ans;
};
