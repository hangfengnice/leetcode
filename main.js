var maximumElementAfterDecrementingAndRearranging = function (arr) {
  const n = arr.length;
  arr.sort((a, b) => a - b);

  arr[0] = 1;
  for (let i = 1; i < n; i++) {
    arr[i] = Math.min(arr[i], arr[i - 1] + 1);
  }
  return arr[n - 1];
};

var maximumElementAfterDecrementingAndRearranging = function (arr) {
  const n = arr.length;
  const cnt = new Array(n + 1).fill(0);

  for (const v of arr) {
    ++cnt[Math.min(v, n)];
  }

  let miss = 0;
  for (let i = 1; i <= n; i++) {
    if (cnt[i] === 0) {
      miss++;
    } else {
      miss -= Math.min(cnt[i] - 1, miss);
    }
  }
  return n - miss;
};
