var findLUSlength = function (strs) {
  const n = strs.length;

  let ans = -1;

  for (let i = 0; i < n; i++) {
    let check = true;

    for (let j = 0; j < n; j++) {
      if (i !== j && isSubseq(strs[i], strs[j])) {
        check = false;
        break;
      }
    }

    if (check) ans = Math.max(ans, strs[i].length);
  }
  return ans;

  function isSubseq(s, t) {
    let pts = 0,
      ptt = 0;
    while (pts < s.length && ptt < t.length) {
      if (s[pts] === t[ptt]) {
        ++pts;
      }
      ++ptt;
    }
    return pts === s.length;
  }
};
