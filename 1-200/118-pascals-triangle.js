var generate = function (numRows) {
  let ans = [];
  for (let i = 0; i < numRows; i++) {
    let sub = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        sub.push(1);
      } else {
        let last = ans[i - 1];
        sub.push(last[j - 1] + last[j]);
      }
    }
    ans.push(sub);
  }
  return ans;
};
