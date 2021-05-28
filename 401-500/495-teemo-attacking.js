var findPoisonedDuration = function (timeSeries, duration) {
  let len = timeSeries.length;
  if (!len) return 0;
  let total = 0;
  for (let i = 0; i < len - 1; i++) {
    total += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
  }
  return total + duration;
};

var findPoisonedDuration = function (timeSeries, duration) {
  let len = timeSeries.length;
  if (!len) return 0;
  let res = 0;
  let last = timeSeries[0];
  for (const cur of timeSeries) {
    if (cur - last < duration) {
      res += cur - last;
    } else {
      res += duration;
    }
    last = cur;
  }
  return res + duration;
};

let result = findPoisonedDuration([1, 2, 3, 4, 5], 5);

console.log(result);
