var findDiagonalOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let nums = [];

  let i = 0;
  while (i < m + n - 1) {
    let x1 = i < m ? i : m - 1;
    let y1 = i - x1;

    while (x1 >= 0 && y1 < n) {
      nums.push(matrix[x1][y1]);
      x1--;
      y1++;
    }
    i++;

    if (i == m + n - 1) break;

    let y2 = i < n ? i : n - 1;
    let x2 = i - y2;

    while (y2 >= 0 && x2 < m) {
      nums.push(matrix[x2][y2]);
      x2++;
      y2--;
    }
    i++;
  }

  return nums;
};

let res = findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

console.log(res, "res");
