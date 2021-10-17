var removeCoveredIntervals = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    return a[0] - b[0];
  });
  let [l, r] = intervals[0];
  let n = intervals.length,
    count = 0;
  for (let i = 1; i < n; i++) {
    let [curL, curR] = intervals[i];

    if (curL >= l && curR <= r) {
      count++;
    } else if (curL >= l && curR > r) {
      r = curR;
    } else if (curL > r) {
      l = curL;
      r = curR;
    }
  }
  return n - count;
};
