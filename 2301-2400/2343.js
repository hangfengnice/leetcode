var smallestTrimmedNumbers = function (nums, queries) {
  let res = [];
  for (let i = 0; i < queries.length; i++) {
    const item = queries[i];
    let arr = nums.map((num, idx) => ({ str: num.slice(-item[1]), idx }));
    arr.sort((a, b) => a.str > b.str ? 1 : a.str < b.str ? -1 : 0);
    res.push(arr[item[0] - 1].idx);
  }
  return res;
};
let res = smallestTrimmedNumbers(
  ["102", "473", "251", "814"],
  [
    [1, 1],
    [2, 3],
    [4, 2],
    [1, 2],
  ]
);
console.log(res, "res");
