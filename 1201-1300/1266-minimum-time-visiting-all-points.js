var minTimeToVisitAllPoints = function (points) {
  let time = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let a = Math.abs(points[i][0] - points[i + 1][0]);
    let b = Math.abs(points[i][1] - points[i + 1][1]);
    time += a > b ? a : b;
  }
  return time;
};
