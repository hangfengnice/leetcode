var eraseOverlapIntervals = function(intervals) {
  let n = intervals.length
  if (!n) return 0
  intervals.sort((a, b) => a[1] - b[1])

  console.log(intervals, 'intervals');

  let right = intervals[0][1]
  let ans = 1
  for(let i = 1; i < n; i ++) {
    if (intervals[i][0] >= right) {
      ans ++
      right = intervals[i][1]
    }
  }
  return n - ans
};

eraseOverlapIntervals([ [1,2], [2,3], [3,4], [1,3] ])
