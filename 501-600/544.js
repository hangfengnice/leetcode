var findContestMatch = function (n) {
  const arr = new Array(n).fill(0).map((_, idx) => idx + 1);
  const ans = dfs(arr);
  return ans[0];

  function dfs(arr) {
    let len = arr.length;
    if (len === 1) return arr;

    let ans = [];
    for (let i = 0; i < len >> 1; i++) {
      ans.push("(" + arr[i] + "," + arr[len - i - 1] + ")");
    }
    return dfs(ans);
  }
};
