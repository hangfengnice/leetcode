var spiralOrder = function (matrix) {
  let order = [];
  if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
    return order;
  }
  let rows = matrix.length,
    cols = matrix[0].length;

  let left = 0,
    right = cols - 1,
    top = 0,
    bottom = rows - 1;
  while (left <= right && top <= bottom) {
    for (let col = left; col <= right; col++) {
      order.push(matrix[top][col]);
    }
    for (let row = top + 1; row <= bottom; row++) {
      order.push(matrix[row][right]);
    }
    if (left < right && top < bottom) {
      for (let col = right - 1; col > left; col--) {
        order.push(matrix[bottom][col]);
      }
      for (let row = bottom; row > top; row--) {
        order.push(matrix[row][left]);
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return order;
};

const res = spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
]);

console.log(res);
