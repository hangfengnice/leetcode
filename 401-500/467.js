var findSubstringInWraproundString = function (p) {
  if (!p.length) return 0;

  let pre = 1,
    res = 0,
    hash = {
      [p[0]]: 1,
    };
  for (let i = 1; i < p.length; i++) {
    let cur = p[i];
    let between = cur.charCodeAt() - p[i - 1].charCodeAt();
    if (between == -25 || between == 1) {
      pre += 1;
    } else {
      pre = 1;
    }

    hash[cur] = hash[cur] ? Math.max(pre, hash[cur]) : pre;
  }
  console.log(hash, 'hash');
  for (let key in hash) {
    res += hash[key];
  }
  return res;
};

let res = findSubstringInWraproundString("zab")

console.log(res, 'res');
