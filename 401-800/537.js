var complexNumberMultiply = function (a, b) {
  let reg = /-?\d+/g;
  let arr1 = a.match(reg),
    arr2 = b.match(reg);

  return (
    arr1[0] * arr2[0] -
    arr1[1] * arr2[1] +
    "+" +
    (arr1[0] * arr2[1] + arr1[1] * arr2[0]) +
    "i"
  );
};

let res = complexNumberMultiply("1+1i", "1+1i");
console.log(res);
