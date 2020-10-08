// 超时间
var arrayRankTransform = function (arr) {
  let arr1 = arr.slice();
  arr1.sort((a, b) => a - b);
  arr1 = arr1.filter((item, index, array) => array.indexOf(item) == index);
  let res = [];
  for (let num of arr) {
    let i = arr1.indexOf(num);
    res.push(i + 1);
  }
  return res;
};

var arrayRankTransform = function (arr) {
  let arrSort = Array.from(new Set([...arr])).sort((a, b) => a - b);
  return arr.map((item) => arrSort.findIndex((item1) => item1 == item) + 1);
};

let res = arrayRankTransform([40, 10, 20, 30, 10]);

console.log(res);
