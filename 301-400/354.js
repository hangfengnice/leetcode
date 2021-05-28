var maxEnvelopes = function (envelopes) {
  if (envelopes.length === 0) {
    return 0;
  }
  const n = envelopes.length;

  envelopes.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });

  const f = new Array(n).fill(1);
  let ans = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[j][1] < envelopes[i][1]) {
        f[i] = Math.max(f[i], f[j] + 1);
      }
    }
    ans = Math.max(ans, f[i]);
  }
  return ans;
};
