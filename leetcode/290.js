var wordPattern = function (pattern, s) {
  let words = s.split(" ");
  if (pattern.length != words.length) return false;

  let word2ch = new Map();
  let ch2word = new Map();
  debugger;
  for (let [i, word] of words.entries()) {
    const ch = pattern[i];
    if (
      (word2ch.get(ch) && word2ch.get(ch) != word) ||
      (ch2word.has(word) && ch2word.get(word) !== ch)
    ) {
      return false;
    }
    word2ch.set(ch, word);
    ch2word.set(word, ch);
  }
  return true;
};

var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;
  let h = [];
  for (let i = 0; i < words.length; i++) {
    h[i] = pattern[i] + "," + words[i];
  }
  console.log(h);
  const len = new Set(h).size;
  return len == new Set(pattern).size && len == new Set(words).size;
};

var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;
  let leftSum = '', rightSum = '', l = -1
  while(++l < words.length) {
    leftSum += pattern.indexOf(pattern[l])
    rightSum += words.indexOf(words[l])
  }
  console.log(leftSum, rightSum)
  return leftSum === rightSum
}

var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;
  for(let i = 0; i < words.length; i ++) {
    if (words.indexOf(words[i]) != pattern.indexOf(pattern[i])) return false
  }
  return true
}


let res = wordPattern("abba", "dog cat cat dog");

console.log(res, "eyse");
