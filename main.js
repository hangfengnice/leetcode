var generate = function(numRows) {
  let res = []
  for(let i = 0; i < numRows; i ++) {
    const row = new Array(i + 1).fill(1)
    for(let j = 1; j < row.length - 1; j ++) {
      row[j] = res[i - 1][j - 1] + res[i - 1][j]
    }
    res.push(row)
  }

  return res
};

console.log(generate(4));


var getRow = function (rowIndex) {
  let row = new Array(rowIndex + 1).fill(0)
  row[0] = 1
  for(let i = 1; i <= rowIndex; i ++) {
    for(let j = i; j > 0; j --) {
      row[j] += row[j - 1]
    }
  }
  return row
}

console.log(getRow(2));
