var sortArrayByParityII = function (A) {
  let len = A.length
  let j = 1
  for(let i = 0; i < len ; i += 2) {
    if (A[i] & 1) {
      while(A[j] % 2) {
        j += 2
      }
      let temp = A[i]
      A[i] = A[j]
      A[j] = temp
    }
  }
}
