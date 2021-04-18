var reverseString = function (s) {
  let len = s.length
  let l = 0, r = len - 1
  while (l < r) {
    let temp = s[l]
    s[l] = s[r]
    s[r] = temp
    l ++
    r --
  }
}
