var minMeetingRooms = function (intervals, r = []) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    for (var j = 0, s = false; j < r.length; j++) {
      for (var k = 0, f = true; k < r[j].length; k++) {
        if (!(r[j][k][0] >= intervals[i][1] || r[j][k][1] <= intervals[i][0])) {
          f = false;
          break;
        }
      }
      if (f === true) {
        s = true;
        r[j].push(intervals[i]);
        break;
      }
    }

    if (s === false) {
      r.push([intervals[i]]);
    }
  }
  return r.length;
};

let res = minMeetingRooms([
  [0, 30],
  [5, 10],
  [15, 20],
]);
console.log(res, "res");
