var maximumSum = function (nums) {
  let ans = -1;
  let map = {};
  for (let num of nums) {
    let c1 = cal(num);
    if (map[c1]) {
      ans = Math.max(ans, map[c1] + num);
    } else {
      map[c1] = num;
    }
  }
  return ans;
  function cal(num) {
    let res = 0;
    while (num > 0) {
      res += num % 10;
      num = (num / 10) >> 0;
    }
    return res;
  }
};
