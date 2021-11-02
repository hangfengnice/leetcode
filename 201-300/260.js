var singleNumber = function (nums) {
  let xorsum = 0;
  for (let num of nums) {
    xorsum ^= num;
  }
  let type1 = 0,
    type2 = 0;
  let lsb = xorsum & (xorsum - 1);
  for (let num of nums) {
    if (lsb & num) {
      type1 ^= num;
    } else {
      type2 ^= num;
    }
  }
  return [type1, type2];
};
