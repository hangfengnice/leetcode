var minCostToMoveChips = function (position) {
  let even = 0,
    odd = 0;
  for (let pos of position) {
    if (pos & 1) {
      odd++;
    } else {
      even++;
    }
  }
  return Math.min(odd, even);
};
