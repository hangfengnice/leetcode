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

// arr = [1,2,3,4], k = 2
var findKthPositive = function (arr, k) {
  if (arr[0] > k) return k;
  let l = 0,
    r = arr.length;

  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    let x = mid < arr.length ? arr[mid] : 2000000;
    if (x - mid - 1 >= k) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return k + l
};
