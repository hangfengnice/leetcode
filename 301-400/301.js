var removeInvalidParentheses = function (s) {
  const res = [];
  let lremove = 0;
  let rremove = 0;

  for (const c of s) {
    if (c === "(") {
      lremove++;
    } else if (c === ")") {
      if (lremove === 0) {
        rremove++;
      } else {
        lremove--;
      }
    }
  }
  helper(s, 0, 0, 0, lremove, rremove);
  return res;

  function helper(str, start, lcount, rcount, lremove, rremove) {
    if (lremove === 0 && rremove === 0) {
      if (isValid(str)) res.push(str);
      return;
    }
    for (let i = start; i < str.length; i++) {
      if (i !== start && str[i] === str[i - 1]) continue;
      if (lremove + rremove > str.length - i) return;

      if (lremove > 0 && str[i] === "(") {
        helper(
          str.slice(0, i) + str.slice(i + 1),
          i,
          lcount,
          rcount,
          lremove - 1,
          rremove
        );
      }
      if (rremove > 0 && str[i] === ")") {
        helper(
          str.slice(0, i) + str.slice(i + 1),
          i,
          lcount,
          rcount,
          lremove,
          rremove - 1
        );
      }

      if (str[i] === ")") {
        lcount++;
      } else if (str[i] === ")") {
        rcount++;
      }
      if (rcount > lcount) break;
    }
  }

  function isValid(str) {
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        cnt++;
      } else if (str[i] === ")") {
        cnt--;
        if (cnt < 0) return false;
      }
    }
    return cnt === 0;
  }
};

// 广度优先
var removeInvalidParentheses = function (s) {
  const ans = [];
  let currSet = new Set();
  currSet.add(s);

  while (true) {
    for (let str of currSet) {
      if (isValid(str)) {
        ans.push(str);
      }
    }
    if (ans.length) return ans;
    const nextSet = new Set();

    for (let str of currSet) {
      for (let i = 0; i < str.length; i++) {
        if (i > 0 && s[i] === s[i - 1]) continue;

        if (s[i] === ")" || s[i] === "(") {
          nextSet.add(str.slice(0, i) + str.slice(i + 1));
        }
      }
    }
    currSet = nextSet;
  }

  function isValid(s) {
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
        cnt++;
      } else if (s[i] === ")") {
        cnt--;
        if (cnt < 0) return false;
      }
    }
    return cnt === 0;
  }
};
