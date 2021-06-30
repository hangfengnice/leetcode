var convertToTitle = function (columnNumber) {
  let ans = [];
  while (columnNumber > 0) {
    const a0 = ((columnNumber - 1) % 26) + 1;
    ans.push(String.fromCodePoint(a0 - 1 + "A".codePointAt()));
    columnNumber = Math.floor((columnNumber - a0) / 26);
  }
  return ans.reverse().join("");
};

// 简洁写法
var convertToTitle = function (columnNumber) {
  const sb = [];
  while (columnNumber) {
    columnNumber--;

    sb.push(String.fromCodePoint((columnNumber % 26) + "A".codePointAt()));
    columnNumber = Math.floor(columnNumber / 26);
  }
  return sb.reverse().join("");
};
