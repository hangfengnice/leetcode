var maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });

  let n = envelopes.length;

  const f = [envelopes[0][1]];

  for (let i = 1; i < n; i++) {
    const num = envelopes[i][1];
    if (num > f[f.length - 1]) {
      f.push(num);
    } else {
      const index = binarySearch(f, num);
      f[index] = num;
    }
  }
  return f.length;

  function binarySearch(f, target) {
    let low = 0,
      high = f.length - 1;
    while (low < high) {
      const mid = Math.floor((high - low) / 2) + low;
      if (f[mid] < target) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  }
};
