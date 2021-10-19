var isRectangleCover = function (rectangles) {
  let X1 = (Y1 = Infinity);
  let X2 = (Y2 = -Infinity);

  let points = new Set();

  let area = 0;

  for (let [x1, y1, x2, y2] of rectangles) {
    X1 = Math.min(X1, x1);
    Y1 = Math.min(Y1, y1);
    X2 = Math.max(X2, x2);
    Y2 = Math.max(Y2, y2);

    area += (x2 - x1) * (y2 - y1);

    let p1 = [x1, y1],
      p2 = [x1, y2],
      p3 = [x2, y1],
      p4 = [x2, y2];

    for (let p of [p1, p2, p3, p4]) {
      p = p.toString();
      if (points.has(p)) {
        points.delete(p);
      } else {
        points.add(p);
      }
    }
  }
  console.log(points);
  let expect = (X2 - X1) * (Y2 - Y1);

  if (area !== expect) return false;

  if (points.size !== 4) return false;

  if (!points.has([X1, Y1].toString())) return false;
  if (!points.has([X1, Y2].toString())) return false;
  if (!points.has([X2, Y1].toString())) return false;
  if (!points.has([X2, Y2].toString())) return false;
  return true;
};

isRectangleCover([
  [1, 1, 3, 3],
  [3, 1, 4, 2],
  [3, 2, 4, 4],
  [1, 3, 2, 4],
  [2, 3, 3, 4],
]);
