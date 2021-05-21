var kthLargestValue = function (matrix, k) {
  const m = matrix.length,
    n = matrix[0].length;
  const pre = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  const results = [];
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      pre[i][j] =
        pre[i - 1][j] ^ pre[i - 1][j - 1] ^ pre[i][j - 1] ^ matrix[i - 1][j - 1];
      results.push(pre[i][j]);
    }
  }
  results.sort((a, b) => b - a);
  return results[k - 1];
};

let res = kthLargestValue([[5,2],[1,6]], 1)

console.log(res, 'res');
