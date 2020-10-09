var getRow = function (rowIndex) {
  let pre = [],
    cur = [];

  for (let i = 0; i <= rowIndex; i++) {
    cur = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) cur.push(1);
      else {
        cur.push(pre[j - 1] + pre[j]);
      }
    }
    pre = cur;
  }
  return cur;
};

//       1
//     1   1
//   1   2    1
// 1   3    3   1
var getRow = function (rowIndex) {
  let pre = 1;
  let cur = [1];
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = 1; j < i; j++) {
      let temp = cur[j];
      cur.splice(j, 1, pre + cur[j]);
      pre = temp;
    }
    cur.push(1);
  }
  return cur;
};

// 公式
var getRow = function (rowIndex) {
  let ans = [];
  let N = rowIndex;
  for (let k = 0; k <= N; k++) {
    ans.push(combination(N, k));
  }
  return ans;
  function combination(N, k) {
    let res = 1;
    for (let i = 1; i <= k; i++) {
      res = (res * (N - k + i)) / i;
    }
    return res;
  }
};

// 公式 优化
var getRow = function (rowIndex) {
  let ans = [1];
  let N = rowIndex;
  let pre = 1;
  for (let k = 1; k <= N; k++) {
    let cur = (pre * (N - k + 1)) / k;
    ans.push(cur);
    pre = cur;
  }
  return ans;
};

let res = getRow(2);
console.log(res);
