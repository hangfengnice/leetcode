let names = ["iPhone X", "iPhone XS"];

let colors = ["黑色", "白色"];

let storages = ["64g", "256g"];

let combine = function (...chunks) {
  let res = [];

  helps(0, []);

  return res

  function helps(chunkIndex, prev) {
    let chunk = chunks[chunkIndex];

    let isLast = chunkIndex === chunks.length - 1;

    for (let val of chunk) {
      let cur = prev.concat(val);
      if (isLast) {
        res.push(cur);
      } else {
        helps(chunkIndex + 1, cur);
      }
    }
  }
};

function combination(n, k) {
  let res = []
  dfs(1, [])

  return res

  function dfs(start, arr) {
    if (arr.length === k) {
      return res.push(arr.slice())
    }

    for(let i = start; i <= n; i ++) {
      arr.push(i)
      dfs(i + 1, arr)
      arr.pop()
    }
  }
}
console.log(combination(4, 2));

let a = [1, 2]

let b = a.concat(2)
b.push(2)

console.log(a, b, 'a, b')


