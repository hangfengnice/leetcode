var distributeCandies = function (candyType) {
  let s = new Set(candyType);
  return Math.min(s.size, candyType.length / 2);
};
