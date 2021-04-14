var countBits = function (num) {
  const bits = new Array(num + 1).fill(0);
  for (let i = 0; i <= num; i++) {
    bits[i] = countOnes(i);
  }
  return bits;

  function countOnes(x) {
    let ones = 0;
    while (x > 0) {
      x &= x - 1;
      ones++;
    }
    return ones;
  }
};

var countBits = function (num) {
  const bits = new Array(num + 1).fill(0);
  let highBit = 0;
  for (let i = 1; i <= num; i++) {
    if (i & (i - 1 == 0)) {
      highBit = i;
    }
    bits[i] = bits[i - highBit] + 1;
  }
  return bits;
};

var countBits = function (num) {
  const bits = new Array(num + 1).fill(0);
  for (let i = 1; i <= num; i++) {
    bits[i] = bits[i >> 1] + (i & 1);
  }
  return bits;
};

var countBits = function (num) {
  const bits = new Array(num + 1).fill(0);
  for (let i = 1; i <= num; i++) {
    bits[i] = bits[i & (i - 1)] + 1;
  }
  return bits;
};
