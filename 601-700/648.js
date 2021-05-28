var validPalindrome = function(s) {
  let l = 0, r = s.length - 1
  while(l < r) {
    if (s[l] == s[r]) {
      l ++
      r --
    } else {
      return isPalindrome()
    }
  }
  return true
};
