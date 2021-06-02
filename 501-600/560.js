var subarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, 1);
  let count = 0,
    pre = 0;
  for (const x of nums) {
    pre += x;
    if (map.has(pre - k)) {
      count += map.get(pre - k);
    }

    if (map.has(pre)) {
      map.set(pre, map.get(pre) + 1);
    } else {
      map.set(pre, 1);
    }
  }
  return count;
};

let res = subarraySum([1, 1, 1], 2);

console.log(res, "res");
