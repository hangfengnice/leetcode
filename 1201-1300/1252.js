var oddCells = function (m, n, indices) {
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);

  for (const index of indices) {
    rows[index[0]]++;
    cols[index[1]]++;
  }

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((rows[i] + cols[j]) & 1) {
        res++;
      }
    }
  }
  return res;
};
