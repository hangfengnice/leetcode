var printLinkedListInReverse = function (head) {
  let res = [];
  dfs(head);

  res.reverse();
  res.forEach((node) => {
    node.printValue();
  });

  function dfs(node) {
    res.push(node);
    if (node.getNext()) {
      dfs(node.getNext());
    }
  }
};
