var allCellsDistOrder = function (R, C, r0, c0) {
  const res = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      res.push([i, j]);
    }
  }
  res.sort((a, b) => getD(a[0], a[1], r0, c0) - getD(b[0], b[1], r0, c0));
  return res;
  function getD(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }
};

let result = allCellsDistOrder(2, 2, 0, 1)

console.log(result);
