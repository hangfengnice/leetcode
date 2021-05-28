var findAnagrams = function (s, p) {
  let ans = [];

  let needs = new Array(26).fill(0);
  let window = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    needs[p[i].codePointAt() - 97] += 1;
  }

  let left = 0;
  let right = 0;

  while (right < s.length) {
    let curR = s[right].codePointAt() - 97;

    right++;

    window[curR]++;

    while (window[curR] > needs[curR]) {
      let curL = s[left].codePointAt() - 97;
      left++;

      window[curL]--;
    }

    if (right - left == p.length) {
      ans.push(left);
    }
  }

  return ans;
};
