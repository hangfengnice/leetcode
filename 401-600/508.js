var findFrequentTreeSum = function (root) {
  let map = {},
    res = [];

  dfs(root);

  let count = 0;
  for (let [key, val] of Object.entries(map)) {
    console.log(key, val);
    if (val == count) {
      res.push(key);
    }
    if (val > count) {
      count = val;
      res = [+key];
    }
  }

  return ans;

  function dfs(root) {
    if (!root) {
      return 0;
    }
    let left = dfs(root.left);
    let right = dfs(root.right);
    let sum = root.val + left + right;
    map[sum] = (map[sum] || 0) + 1;
    return sum;
  }
};

let obj = {
  '-1': 1,
  age: 2
}


for(let [key, val] of Object.entries(obj)) {
  console.log(key, val);
}


console.log(+'-1');
