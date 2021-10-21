var countingSort = function (arr, n) {
  if (n <= 1) return

  let max = Math.max(...arr)

  let c = new Array(max + 1).fill(0)
  for(let i = 0; i < n; i ++) {
    c[arr[i]] ++
  }

  let r = []

  for(let i = n - 1; i >= 0; i -- ) {
    let index = c[arr[i]] - 1
    r[index] = arr[i]
    c[arr[i]] --
  }

}
