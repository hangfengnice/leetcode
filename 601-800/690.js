var validPalindrome = function (s) {
  let l = 0,
    r = s.length - 1;
  while (l < r) {
    if (s[l] == s[r]) {
      l++;
      r--;
    } else {
      return isValid(s, l + 1, r) || isValid(s, l, r - 1);
    }
  }
  return true;

  function isValid(s, left, right) {
    while (left < right) {
      if (s[left] == s[right]) {
        left++;
        right--;
      } else {
        return false;
      }
    }
    return true;
  }
};
