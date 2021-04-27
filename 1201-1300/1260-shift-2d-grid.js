var shiftGrid = function (grid, k) {
  let temp = grid.flat(),
    len = temp.length,
    res = [],
    row = grid[0].length;
  k %= len;
  temp = temp.slice(-k).concat(temp.slice(0, -k))
  for (let i = 0; i < len; i += row) {
    res.push(temp.slice(i, i + row));
  }
  return res;
};
