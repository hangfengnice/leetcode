// 贪心
var canPlaceFlowers = function (flowerbed, n) {
  let i = 0,
    count = 0,
    len = flowerbed.length;
  while (i < len) {
    if (
      !flowerbed[i] &&
      (!i || !flowerbed[i - 1]) &&
      (i == len - 1 || !flowerbed[i + 1])
    ) {
      flowerbed[i] = 1;
      count++;
    }
    i++;
  }
  return count >= n;
};

// 优化
var canPlaceFlowers = function (flowerbed, n) {
  let i = 0,
    len = flowerbed.length,
    count = 0;
  while (i < len) {
    if (
      !flowerbed[i] &&
      (!i || !flowerbed[i - 1]) &&
      (i == len - 1 || !flowerbed[i + 1])
    ) {
      flowerbed[i] = 1;
      count++;
    }
    if (count >= n) return true;
    i++;
  }
  return false;
};

let res = canPlaceFlowers([1, 0, 0, 0, 1], 1);

console.log(res);
