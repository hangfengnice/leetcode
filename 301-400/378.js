var kthSmallest = function (matrix, k) {
  let arr = [];
  for (let row of matrix) {
    arr.push(...row);
  }
  arr.sort((a, b) => a - b);
  return arr[k - 1];
};

// 二分
var kthSmallest = function (matrix, k) {
  let n = matrix.length;
  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (check(matrix, mid, k, n)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
  function check(matrix, mid, k, n) {
    let i = n - 1;
    let j = 0;
    let num = 0;
    while (i >= 0 && j < n) {
      if (matrix[i][j] <= mid) {
        num += i + 1;
        j++;
      } else {
        i--;
      }
    }
    return num >= k;
  }
};
