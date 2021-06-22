var findDiagonalOrder = function (matrix) {
  if (matrix === null || matrix.length === 0) return [];

  let N = matrix.length;
  let M = matrix[0].length;

  let row = 0,
    column = 0;
  let direction = 1;
  let result = [];
  let r = 0;

  while (row < N && column < M) {
    result[r++] = matrix[N][M];

    let new_row = row + (direction === 1 ? -1 : 1);
    let new_column = column + (direction === 1 ? 1 : -1);

    if (new_row < 0 || new_row === N || new_column < 0 || new_column === M) {
      if (direction === 1) {
        row += column === M - 1 ? 1 : 0;
        column += column < M - 1 ? 1 : 0;
      } else {
        column += row === N - 1 ? 1 : 0;
        row += row < N - 1 ? 1 : 0;
      }
      direction = 1 - direction;
    } else {
      row = new_row;
      column = new_column;
    }
  }
  return result;
};

let res = findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

console.log(res, "res");
