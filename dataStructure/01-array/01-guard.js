function find(a, n, key) {
  if (a == null || n <= 0) return -1

  let i = 0
  while(i < n) {
    if (a[i] === key) {
      return i
    }
    i ++
  }
  return -1
}

// 哨兵
function find(a, n, key) {
  if (a === null || n <= 0) return -1
  if (a[n - 1] === key) {
    return n - 1
  }

  let temp = a[n - 1]

  a[n - 1] = key

  let i = 0

  while(a[i] != key) {
    i ++
  }

  a[n - 1] = temp

  if (i == n - 1) {
    return -1
  } else {
    return i
  }
}
