var findKthPositive = function (arr, k) {
  let missCount = 0,
    lastMiss = -1,
    current = 1,
    ptr = 0;
  for (; missCount < k; current++) {
    if (current == arr[ptr]) {
      ptr = ptr + 1 < arr.length ? ptr + 1 : ptr;
    } else {
      ++missCount;
      lastMiss = current;
    }
  }
  return lastMiss;
};
