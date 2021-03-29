var findErrorNums = function (nums) {

};


function flatten(arr, depth = 1)  {
  return arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1): v), [])
}


let arr = [[[12, 3], 4]]

let res = flatten(arr)

console.log([].concat(arr));

console.log(res);
