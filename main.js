var permutation = function (s) {
  const ret = []
  const n = s.length

  const arr = Array.from(s).sort()

  do {
    ret.push(arr.join(''))
  } while(nextPermutation(arr))

  return ret


  function nextPermutation(arr) {
    let i = n - 2

    while(i >= 0 && arr[i] >= arr[i + 1]) {
      i --
    }
    if (i < 0) {
      return false
    }

    let j = n - 1
    while(j >= 0 && arr[i] >= arr[j]) {
      j --
    }
    swap(arr, i, j)
    reverse(arr, i + 1)
    return true
  }

  function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  function reverse(arr, start) {
    let l = start, r = n - 1
    while(l < r) {
      swap(arr, l, r)
      l ++
      r --
    }
  }
};


let res = permutation('aab')

console.log(res, 'res');
