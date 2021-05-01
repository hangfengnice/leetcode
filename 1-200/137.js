var singleNumber = function (nums) {
  let map = {};
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  for (let [key, val] of Object.entries(map)) {
    if (val === 1) {
      return key;
    }
  }
};

var singleNumber = function (nums) {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    let total = 0;
    for (let num of nums) {
      total += (num >> i) & 1;
    }
    if (total % 3) {
      ans |= 1 << i;
    }
  }
  return ans;
};

singleNumber([1, 1, 1, 2]);
