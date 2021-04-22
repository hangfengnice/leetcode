var findSubstring = function (s, words) {
  if (!words || !words.length) return [];

  let wordLen = words[0].length;
  let allWordsLen = wordLen * words.length;

  let ans = [],
    wordMap = {};

  for (let word of words) {
    wordMap[word] = wordMap[word] + 1 || 1;
  }
  for (let i = 0; i < s.length - allWordsLen + 1; i++) {
    let wm = Object.assign({}, wordMap);

    for (let j = i; j < i + allWordsLen - wordLen + 1; j += wordLen) {
      let w = s.slice(j, j + wordLen);

      if (w in wm) {
        wm[w]--;
      } else {
        break;
      }
    }
    if (Object.values().every((i) => i == 0)) ans.push(i);
  }
  return ans;
};

// 双指针
var findSubstring = function (s, words) {
  if (!s || !words || !words.length) return [];

  let windows,
    needs = {},
    oneWordLength = words[0].length;
  for (let w of words) {
    needs[w] ? needs[w]++ : (needs[w] = 1);
  }
  let l,
    r,
    count,
    needsKeyLen = Object.keys(needs).length,
    ans = [];

  for (let i = 0; i < oneWordLength; i++) {
    windows = {};
    r = l = i;
    count = 0;
    while (r <= s.length - oneWordLength) {
      let w1 = s.slice(r, r + oneWordLength);
      r += oneWordLength;

      if (!(w1 in needs)) {
        windows = {};
        l = r;
        count = 0;
        continue;
      }

      windows[w1] ? windows[w1]++ : (windows[w1] = 1);

      if (windows[w1] == needs[w1]) count++;
      while (count == needsKeyLen) {
        if (r - l == oneWordLength * words.length) ans.push(l);
        let w2 = s.slice(l, l + oneWordLength);
        l += oneWordLength;
        if (needs[w2]) {
          windows[w2]--;
          if (windows[w2] < needs[w2]) count--;
        }
      }
    }
  }
  return ans;
};
