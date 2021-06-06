function shellSort() {
  var len = arr.length,
    temp,
    gap = 1
  while(gap < len / 3) {
    gap = gap * 3 + 1
  }

  for(gap; gap > 0; gap = Math.floor(gap / 3)) {
    for(let i = gap; i < len; i ++) {
      temp = arr[i]
      for(var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
}

let arr = [0, 2, 1, 4, 3, 5, 7, 6, 9]

shellSort(arr)

