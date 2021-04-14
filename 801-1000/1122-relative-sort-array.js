var relativeSortArray = function (arr1, arr2) {
  let maxValue = Math.max(...arr1);
  let bucket = Array(maxValue + 1).fill(0);
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    bucket[arr1[i]]++;
  }

  for (let j = 0; j < arr2.length; j++) {
    while (bucket[arr2[j]] > 0) {
      result.push(arr2[j]);
      bucket[arr2[j]]--;
    }
  }

  for (let r = 0; r <= maxValue; r++) {
    while (bucket[r] > 0) {
      result.push(r);
      bucket[r]--;
    }
  }
  return result;
};

var relativeSortArray = function (arr1, arr2) {
  return arr1.sort((a, b) => {
    let ia = arr2.indexOf(a)
    let ib = arr2.indexOf(b)
    if (ia == -1 && ib == -1) {
      return a - b
    } else if (ia == -1) {
      return 1
    } else if (ia != -1 && ib != -1) {
      return ia - ib
    }
  })
}
