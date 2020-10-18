var maxLengthBetweenEqualCharacters = function (s) {
  let max = -1
  for(let i = 0; i < s.length - 1; i ++) {
    for(let j = i + 1; j < s.length; j ++) {
      if (s[i] == s[j]) {
        let len = j - i - 1
        if (len > max) max = len
      }
    }
  }
  return max
};

let result = maxLengthBetweenEqualCharacters("aa")

console.log(result);
