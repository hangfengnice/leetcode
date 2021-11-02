const invert = bit => bit === '0' ? '1' : '0'
var findKthBit = function (n, k) {
  if (k == 1) {
    return '0'
  }

  let mid = 1 << (n - 1)
  if (k === mid) {
    return '1'
  } else if (k < mid) {
    return findKthBit(n - 1, k)
  } else {
    k = mid * 2 - k
    return invert(findKthBit(n - 1, k))
  }
}
