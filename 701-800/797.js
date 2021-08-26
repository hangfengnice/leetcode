var allPathsSourceTarget = function (graph) {
  const ans = [];
  const n = graph.length;
  dfs(0, [0]);

  return ans;

  function dfs(cur, path) {
    if (cur === n - 1) {
      return ans.push(path.slice());
    }

    for (let g of graph[cur]) {
      path.push(g);

      dfs(g, path);

      path.pop();
    }
  }
};

allPathsSourceTarget([[1,2],[3],[3],[]])
