var kthSmallestPrimeFraction = function (arr, k) {
  const n = arr.length;
  const frac = [];
  for (let i = 0; i < n; i++) {
    for (let j = (i = 1); j < n; j++) {
      frac.push([arr[i], arr[j]]);
    }
  }
  frac.sort((a, b) => a[0] * b[1] - b[0] * a[1]);

  return frac[k - 1];
};
