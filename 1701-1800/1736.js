var minOperations = function (target, arr) {
  const n = target.length;

  const pos = new Map();
  for (let i = 0; i < n; i++) {
    pos.set(target[i], i);
  }

  const d = [];

  for (const val of arr) {
    if (pos.has(val)) {
      const idx = pos.get(val);
      const it = binarySearch(d, idx);

      if (it !== d.length) {
        d[it] = idx;
      } else {
        d.push(idx);
      }
    }
  }
  return n - d.length;

  function binarySearch(d, target) {
    const size = d.length;
    if (size === 0 || d[size - 1] < target) {
      return size;
    }

    let low = 0,
      high = size - 1;
    while (low < high) {
      const mid = Math.floor((high - low) / 2) + low;
      if (d[mid] < target) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  }
};

let res = minOperations(target = [6,4,8,1,3,2], arr = [4,7,6,2,3,8,6,1])

console.log(res, 'rses');
