var canPartitionKSubsets = function (nums, k) {
  let n = nums.length;
  if (k > n) return false;
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  if (sum % k !== 0) return false;

  let sub = sum / k;
  let backets = new Array(k).fill(0);
  nums.sort((a, b) => b - a);
  return dfs(0);

  function dfs(index) {
    if (index === n) {
      for (let i = 0; i < k; i++) {
        if (backets[i] !== sub) return false;
      }
      return true;
    }

    for (let i = 0; i < k; i++) {
      if (backets[i] + nums[index] > sub) continue;

      backets[i] += nums[index];

      if (dfs(index + 1)) {
        return true;
      }

      backets[i] -= nums[index];
    }
    return false;
  }
};

let res = canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4);

console.log(res, "res");
