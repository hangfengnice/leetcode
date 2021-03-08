var fourSumCount = function (A, B, C, D) {
  let m = {};
  for (let i of A) {
    for (let k of B) {
      let sum = m[i + k];
      m[i + k] = sum != undefined ? sum + 1 : 1;
    }
  }
  let res = 0;

  for (let i of C) {
    for (let k of D) {
      let sum = m[-i - k];
      if (sum != undefined) {
        res += sum;
      }
    }
  }
  return res;
};

let res = fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]);
console.log(res);
