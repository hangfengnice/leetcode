var minWindow = function (s, t) {
  let minLen = s.length + 1;
  let start = s.length;
  let map = {};
  let missingType = 0;

  for (const c of t) {
    if (!map[c]) {
      missingType++;
      map[c] = 1;
    } else {
      map[c]++;
    }
  }

  let l = 0,
    r = 0;
  for (; r < s.length; r++) {
    let rightChar = s[r];
    if (map[rightChar] != undefined) map[rightChar]--;
    if (map[rightChar] == 0) missingType--;

    while (missingType == 0) {
      if (r - l + 1 < minLen) {
        minLen = r - l + 1;
        start = l;
      }

      let leftChar = s[l];
      if (map[leftChar] != undefined) map[leftChar]++;
      if (map[leftChar] > 0) missingType++;
      l++;
    }
  }
  if (start == s.length) return "";

  return s.substring(start, start + minLen);
};

var minWindow = function (s, t) {
  let ori = new Map();
  let cnt = new Map();

  for (let prop of t) {
    ori.set(prop, ori.get(prop) ? ori.get(prop) + 1 : 1);
  }

  let l = 0,
    r = -1;
  let len = Number.MAX_SAFE_INTEGER,
    ansL = -1,
    ansR = -1;
  let sLen = s.length;
  while (r < sLen) {
    ++r;
    if (r < sLen && ori.get(s[r])) {
      cnt.set(s[r], cnt.get(s[r] ? cnt.get(s[r]) + 1 : 1));
    }
  }
};
