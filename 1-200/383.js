var canConstruct = function (ransomNote, magazine) {
  let count = new Array(26).fill(0);
  for (let ch of magazine) {
    count[ch.charCodeAt() - 97]++;
  }
  for (let ch of ransomNote) {
    let prop = ch.charCodeAt() - 97;
    count[prop]--;
    if (count[prop] < 0) {
      return false;
    }
  }
  return true;
};
