var merge = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });
  let res = [];
  let [l, r] = intervals[0];

  let n = intervals.length;
  for (let i = 1; i < n; i++) {
    let [curl, curr] = intervals[i];
    if (curl > r) {
      res.push([l, r]);
      l = curl;
      r = curr;
    } else if (curl >= l && curr > r) {
      r = curr;
    }
  }
  res.push([l , r])
  return res;
};

let res = merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
console.log(res, "res");
