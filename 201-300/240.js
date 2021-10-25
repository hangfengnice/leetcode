var searchMatrix = function (matrix, target) {
  for (let row of matrix) {
    let flag = search(row, target);
    if (flag) return true;
  }
  return false;

  function search(row, target) {
    let lo = 0,
      hi = row.length - 1;
    while (lo <= hi) {
      let mid = lo + (((hi - lo) / 2) >> 0);
      if (row[mid] === target) {
        return true;
      } else if (row[mid] < target) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return false;
  }
};

// 运用升序的规则
var searchMatrix = function (matrix, target) {
  const m = matrix.length,
    n = matrix[0].length;
  let x = 0,
    y = n - 1;
  while (x < m && y >= 0) {
    if (matrix[x][y] === target) return true;
    else if (matrix[x][y] > target) {
      y--;
    } else {
      x++;
    }
  }
  return false;
};
