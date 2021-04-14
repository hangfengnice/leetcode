var splitIntoFibonacci = function (S) {
  let ans = [],
    max = 2 ** 31 - 1;
  dfs([], S);
  return ans;
  function dfs(cur, s) {
    if (!s.length) return (ans = cur);
    if (cur.length <= 1) {
      for (let i = 1; i < s.length; i++) {
        let str = s.slice(0, i);
        if (str.length > 1 && str.startsWith("0")) break;
        let num = Number(str);
        if (num > max) break;
        dfs(cur.concat(+str), s.slice(i));
      }
    } else {
      let clen = cur.length;
      console.log(cur, s);
      let nextNum = cur[clen - 1] + cur[clen - 2];
      if (nextNum > max) return;
      let targetIndex = s.indexOf(String(nextNum));
      if (targetIndex != 0) {
        return;
      }
      dfs(cur.concat(nextNum), s.slice(String(nextNum).length));
    }
  }
};

let result = splitIntoFibonacci("123456579");

console.log(result);
