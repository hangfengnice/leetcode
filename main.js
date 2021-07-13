var hIndex = function (citations) {
  let n = citations.length;
  const left = 0,
    right = n - 1;
  while (left <= right) {
    const mid = ~~(right - left) / 2 + left;
    if (citations[mid] >= n - mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return n - left;
};
