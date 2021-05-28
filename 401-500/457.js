var circularArrayLoop = function (nums) {
  const l = nums.length;
  const set = new Set();
  const tempSet = new Set();

  for (let i = 0; i < l; i++) {
    if (set.has(i)) continue;
    tempSet.clear();
    const v = dfs(i);

    if (v) return true;
  }

  return false;

  function dfs(i, pre = null) {
    if (i == pre) return false;
    if (nums[i] * nums[pre] < 0) return false;

    if (tempSet.has(i)) return true;
    if (set.has(i)) return false;
    set.add(i);

    tempSet.add(i);

    return dfs((i + nums[i] + Math.abs(nums[i]) * l) % l, i);
  }
};

// (i + nums[i] + Math.abs(nums[i]) * l) % l
