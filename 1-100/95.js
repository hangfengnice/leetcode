var generateTrees = function (n) {
  if (n === 0) return [];
  return generateTrees(1, n);

  function generateTrees(start, end) {
    let allTrees = [];
    if (start > end) {
      allTrees.push(null);
      return allTrees;
    }
    for (let i = start; i <= end; i++) {
      let leftTrees = generateTrees(start, i - 1);
      let rightTrees = generateTrees(i + 1, end);

      for (let left of leftTrees) {
        for (let right of rightTrees) {
          let currTree = new TreeNode(i);
          currTree.left = left;
          currTree.right = right;
          allTrees.push(currTree);
        }
      }
    }
    return allTrees;
  }
};
