var isRectangleCover = function (rectangles) {
  let area = 0;
  let first = rectangles[0];
  let minX = first[0],
    minY = first[1],
    maxX = first[2],
    maxY = first[3];

  const cnt = new Map();
  for (let rect of rectangles) {
    const x = rect[0],
      y = rect[1],
      a = rect[2],
      b = rect[3];

    area += (a - x) * (b - y);

    minX = Math.min(x, minX);
    minY = Math.min(y, minY);
    maxX = Math.max(a, maxX);
    maxY = Math.max(b, maxY);

    let xy = [x, y].toString();
    let xb = [x, b].toString();
    let ay = [a, y].toString();
    let ab = [a, b].toString();
    cnt.set(xy, (cnt.get(xy) || 0) + 1);
    cnt.set(xb, (cnt.get(xb) || 0) + 1);
    cnt.set(ay, (cnt.get(ay) || 0) + 1);
    cnt.set(ab, (cnt.get(ab) || 0) + 1);
  }

  const pminmin = [minX, minY].toString();
  const pminmax = [minX, maxY].toString();
  const pmaxmin = [maxX, minY].toString();
  const pmaxmax = [maxX, maxY].toString();

  if (
    area !== (maxX - minX) * (maxY - minY) ||
    (cnt.get(pminmin) || 0) !== 1 ||
    (cnt.get(pminmax) || 0) !== 1 ||
    (cnt.get(pmaxmin) || 0) !== 1 ||
    (cnt.get(pmaxmax) || 0) !== 1
  ) {
    return false;
  }

  cnt.delete(pminmin);
  cnt.delete(pminmax);
  cnt.delete(pmaxmin);
  cnt.delete(pmaxmax);
  for (let [_, value] of cnt.entries()) {
    if (value !== 2 && value !== 4) {
      return false;
    }
  }
  return true;
};
