var xorQueries = function (arr, queries) {
  const n = arr.length;
  const xors = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    xors[i + 1] = xors[i] ^ arr[i];
  }
  const m = queries.length;
  const ans = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    ans[i] = xors[queries[i][0]] ^ xors[queries[i][1] + 1];
  }

  return ans;
};
