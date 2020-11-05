var triangle = function (rowIndex) {
  let cur = [1]
  for(let i = 1; i <= rowIndex; i ++) {
    for(let j = i - 1; j > 0; j --) {
      cur[j] = cur[j] + cur[j - 1]
    }
    cur[i] = 1
  }
  return cur
}

let res = triangle(4)
let res1 = triangle(5)

console.log(res)
console.log(res1);
