var uniqueOccurrences = function (arr) {
  let obj = {};
  arr.forEach((item) => {
    obj[item] ? obj[item]++ : (obj[item] = 1);
  });
  let values = Object.values(obj);
  return values.length == [...new Set(values)].length;
};

let obj = {
  a: 1,
  b: 2,
};

console.log(Object.values(obj));
