let arr = [2, 5, 3, 0, 2, 3, 0, 3]


function countingSort(a, n) {
  if (n <= 1) return

  let max = a[0]
  for(let i = 1; i < n; i ++) {
    if (max < a[i]) max = a[i]
  }

  let c = new Array(max + 1).fill(0)

  for(let i = 0; i < n; i ++) {
    c[a[i]] ++
  }

  for(let i = 1; i < n; i ++) {
    c[i] = c[i - 1] + c[i]
  }

  let r = []

  for(let i = n - 1; i >= 0; i --) {

  }
}
