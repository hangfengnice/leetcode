var insertionSort = function (a, n) {
  if (n <= 1) return;
  for (let i = 1; i < n; i++) {
    let val = a[i];

    let j = i - 1;
    for (; j >= 0; j--) {
      if (a[j] > val) {
        a[j + 1] = a[j];
      } else {
        break;
      }
    }
    a[j + 1] = val;
  }
};
