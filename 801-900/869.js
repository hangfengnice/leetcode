var reorderedPowerOf2 = function (n) {
  const nums = [...String(n)];
  nums.sort();
  let length = nums.length;
  const vis = new Array(length).fill(false);

  return backtrack(nums, 0, 0);

  function backtrack(nums, idx, num) {
    if (idx === length) {
      return isPowerOfTwo(num);
    }
    for (let i = 0; i < length; i++) {
      if (
        (num === 0 && nums[i] === "0") ||
        vis[i] ||
        (i > 0 && !vis[i - 1] && nums[i] === nums[i - 1])
      ) {
        continue;
      }
      console.log(nums, idx, num);
      vis[i] = true;
      if (backtrack(nums, idx + 1, nums[i] - 0 + num * 10)) {
        return true;
      }

      vis[i] = false;
    }
    return false;
  }
  function isPowerOfTwo(n) {
    return (n & (n - 1)) === 0;
  }
};
