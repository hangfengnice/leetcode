var checkInclusion = function (s1, s2) {
  const n = s1.length,
    m = s2.length;

  if (n > m) {
    return false;
  }

  const cnt1 = new Array(26).fill(0);
  const cnt2 = new Array(26).fill(0);

  for (let i = 0; i < n; i++) {
    cnt1[s1[i].codePointAt() - 97]++;
    cnt2[s2[i].codePointAt() - 97]++;
  }

  if (cnt1.toString() === cnt2.toString()) {
    return true;
  }

  for (let i = n; i < m; ++i) {
    ++cnt2[s2[i].charCodeAt() - 97];
    --cnt2[s2[i - n].charCodeAt() - 97];
    if (cnt1.toString() === cnt2.toString()) {
      return true;
    }
  }
  return false;
};

var checkInclusion = function (s1, s2) {
  let n = s1.length,
    m = s2.length;
  if (n > m) {
    return false;
  }

  let cnt = new Array(26).fill(0);

  for (let i = 0; i < n; i++) {
    cnt[s1[i].codePointAt() - 97]--;
    cnt[s2[i].codePointAt() - 97]++;
  }

  let diff = 0;
  for (const c of cnt) {
    if (c != 0) {
      ++diff;
    }
  }
  if (!diff) {
    return true;
  }

  for (let i = n; i < m; i++) {
    const x = s2[i].codePointAt() - 97,
      y = s2[i - n].codePointAt() - 97;

    if (x == y) continue;

    if (cnt[x] == 0) {
      ++diff;
    }
    cnt[x]++;
    if (cnt[x] == 0) {
      --diff;
    }

    if (cnt[y] == 0) {
      ++diff;
    }
    --cnt[y];

    if (cnt[y] == 0) {
      --diff;
    }

    if (diff == 0) {
      return true;
    }
  }

  return false;
};

var checkInclusion = function (s1, s2) {
  const n = s1.length,
    m = s2.length;
  if (n > m) {
    return false;
  }

  const cnt = new Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    cnt[s1[i].codePointAt() - 97]--;
  }
  let l = 0;
  for (let r = 0; r < m; r++) {
    const x = s2[r].codePointAt() - 97;

    cnt[x]++;

    while (cnt[x] > 0) {
      cnt[s2[l].codePointAt() - 97]--;
      l++;
    }

    if (r - l + 1 == n) {
      return true;
    }
  }

  return false;
};
