var allPossibleFBT = function (n, map = new Map()) {
  if (!map.has(n)) {
    let ans = [];
    if (n === 1) {
      ans.push(new TreeNode(0));
    } else if (n % 2 === 1) {
      for (let i = 0; i < n; i++) {
        const j = n - i - 1;

        let leftNodes = allPossibleFBT(i, map);
        let rightNodes = allPossibleFBT(j, map);

        for (let left of leftNodes) {
          for (let right of rightNodes) {
            const node = new TreeNode(0);
            node.left = left;
            node.right = right;
            ans.push(node);
          }
        }
      }
    }
    map.set(n, ans);
  }
  return map.get(n);
};
