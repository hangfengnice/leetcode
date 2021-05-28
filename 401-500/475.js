var findRadius = function (houses, heaters) {
  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);

  let res = 0;
  let i = 0;

  for (let house of houses) {
    while (
      i < heaters.length - 1 &&
      Math.abs(heaters[i] - house) >= Math.abs(heaters[i + 1] - house)
    ) {
      i++;
    }

    res = Math.max(res, Math.abs(heaters[i] - house));
  }
  return res;
};
