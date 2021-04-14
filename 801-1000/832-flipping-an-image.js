var flipAndInvertImage = function (A) {
  return A.map((a) => a.map((i) => i ^ 1).reverse());
};

var flipAndInvertImage = function (A) {
  let len = A[0].length - 1;
  for (let i = 0; i < A.length; i++) {
    for (let j = len >> 1; j >= 0; j--) {
      let l = 1 ^ A[i][len - j];
      let r = 1 ^ A[i][j];
      A[i][len - j] = r;
      A[i][j] = l;
    }
  }
  return A;
};
