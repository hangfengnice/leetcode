var maximizeXor = function (nums, queries) {
  const l = queries.length;
  let length = nums.length
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < l; i++) {
    let max = -1;
    for (let j = 0; j < length && nums[j] <= queries[i][1]; j++) {
      max = Math.max(max, nums[j] ^ queries[i][0]);
    }
    res.push(max);
  }
  return res;
};
