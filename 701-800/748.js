var shortestCompletingWord = function (licensePlate, words) {
  const cnt = new Array(26).fill(0);

  for (const ch of licensePlate) {
    if (/^[a-zA-Z]$/.test(ch)) {
      ++cnt[ch.toLowerCase().codePointAt() - 97];
    }
  }

  let idx = -1;

  for (let i = 0; i < words.length; i++) {
    const c = new Array(26).fill(0);
    for (let j = 0; j < words[i].length; j++) {
      const ch = words[i][j];

      ++c[ch.codePointAt() - 97];
    }

    let ok = true;
    for (let j = 0; j < 26; j++) {
      if (c[j] < cnt[j]) {
        ok = false;
        break;
      }
    }
    if (ok && (idx < 0 || words[i].length < words[idx].length)) {
      idx = i;
    }
  }
  return words[idx];
};
