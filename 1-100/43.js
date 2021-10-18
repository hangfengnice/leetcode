var multiply = function (num1, num2) {
  let m = num1.length,
    n = num2.length;
  let len = m + n;
  let res = new Array(len).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    let c1 = num1[i];
    for (let j = n - 1; j >= 0; j--) {
      res[i + j + 1] += c1 * num2[j];
    }
  }
  console.log(res, 'res');
  for (let i = m + n - 1; i > 0; i--) {
    res[i - 1] += Math.floor(res[i] / 10);
    res[i] %= 10;
  }
  console.log(res, 'res');

  let i = 0;
  while (i < len && res[i] === 0) {
    i++;
  }
  let str = "";
  for (; i < len; i++) {
    str += res[i];
  }
  return str;
};

let res = multiply('123', '456')

console.log(res, 'res');
