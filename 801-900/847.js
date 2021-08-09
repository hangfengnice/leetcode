var shortestPathLength = function (graph) {
  const n = graph.length;
  const queue = [];
  const seen = new Array(n).fill(0).map(() => new Array(1 << n).fill(false));
  for (let i = 0; i < n; i++) {
    queue.push([i, 1 << i, 0]);
    seen[i][1 << i] = true;
  }
  let ans = 0;

  while (queue.length) {
    const tuple = queue.shift();
    const u = tuple[0],
      mask = tuple[1],
      dist = tuple[2];
    if (mask === (1 << n) - 1) {
      ans = dist;
      break;
    }
    for (const v of graph[u]) {
      const maskV = mask | (1 << v);
      if (!seen[v][maskV]) {
        queue.push([v, maskV, dist + 1]);
        seen[v][maskV] = true;
      }
    }
  }

  return ans;
};
