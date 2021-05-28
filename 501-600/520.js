var detectCapitalUse = function (word) {
  let uc = 0,
    reg = /[A-Z]/;
  for (let i = 0; i < word.length; i++) {
    if (reg.test(word[i]) && uc++ < i) {
      return false;
    }
  }
  return uc == word.length || uc <= 1;
};

let res = detectCapitalUse('USaA')
console.log(res)
