var searchMatrix = function (matrix, target) {
  let rowIndex = binarySearchFirstColumn(matrix, target);
  console.log(rowIndex);
  if (rowIndex < 0) {
    return false;
  }

  return binarySearchRow(matrix[rowIndex], target);

  function binarySearchFirstColumn(matrix, target) {
    let low = -1,
      high = matrix.length - 1;
    while (low < high) {
      const mid = Math.floor((high - low + 1) / 2) + low;
      if (matrix[mid][0] <= target) {
        low = mid;
      } else {
        high = mid - 1;
      }
    }
    return low;
  }

  function binarySearchRow(row, target) {
    // let low = 0,
    //   high = row.length - 1;

    // console.log(low, high, 'low hihg')
    // while (low <= high) {
    //   const mid = Math.floor((high - low) / 2) + low;
    //   console.log(mid, 'mid')
    //   if (row[mid] == target) {
    //     return true;
    //   } else if (row[mid] > mid) {
    //     high = mid - 1;
    //   } else {
    //     low = mid + 1;
    //   }
    // }
    // return false;
    let low = 0, high = row.length - 1;
    while (low <= high) {
        const mid = Math.floor((high - low) / 2) + low;
        if (row[mid] == target) {
            return true;
        } else if (row[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return false;
  }
};

let res = searchMatrix([[1, 3]], 3)

console.log(res, 'res');
