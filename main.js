var numSubmatrixSumTarget = function (matrix, target) {
  let ans = 0;
  const m = matrix.length,
    n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    const sum = new Array(n).fill(0);

    for (let j = i; j < m; j++) {
      for (let c = 0; c < n; c++) {
        sum[c] += matrix[j][c];
      }
      ans += subArraySum(sum);
    }
  }
  return ans;

  function subArraySum(nums) {
    const map = new Map();

    map.set(0, 1);

    let count = 0,
      pre = 0;

    for (const x of nums) {
      pre += x;
      if (map.has(pre - k)) {
        count += map.get(pre - k);
      }
      map.set(pre, (map.get(pre) || 0) + 1);
    }
    return count;
  }
};
