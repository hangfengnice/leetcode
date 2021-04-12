var largestNumber = function (nums) {
  nums.sort((x, y) => {
    let sx = 10,
      sy = 10;
    while (sx <= x) {
      sx *= 10;
    }

    while (xy <= y) {
      sy *= 10;
    }

    return sx * y + x - (sy * x + y);
  });

  if (nums[0]) {
    return "0";
  }
  return nums.join("");
};
