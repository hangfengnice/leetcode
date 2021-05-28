var characterReplacement = function (s, k) {
  const num = new Array(26).fill(0);

  const n = s.length;

  let maxn = 0,
    left = 0,
    right = 0;

  while (right < n) {
    let index = s[right].codePointAt() - 65;
    num[index]++;

    maxn = Math.max(maxn, num[index]);


    if (right - left + 1 - maxn > k) {
      num[s[left].charCodeAt() - 65]--;
      left++;
    }
    right++;
  }

  return right - left;
};

let res = characterReplacement("AABABBA", 1)

console.log(res, 'res');
