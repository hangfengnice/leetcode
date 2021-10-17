var trailingZeroes = function (n) {
  let count = 0
  while(n > 1) {
    count += n / 5

    n = (n / 5)
  }
  return n
}
