const canFinish = function (numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);

  const map = {};

  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;

    if (map[prerequisites[i][1]]) {
      // 当前课已经存在于邻接表
      map[prerequisites[i][1]].push(prerequisites[i][0]); // 添加依赖它的后续课
    } else {
      // 当前课不存在于邻接表
      map[prerequisites[i][1]] = [prerequisites[i][0]];
    }
  }

  const queue = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let count = 0;
  while (queue.length) {
    const select = queue.shift();
    count++;
    const toEnQueue = map[select];

    if (toEnQueue && toEnQueue.length) {
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--;
        if (inDegree[toEnQueue[i]] === 0) {
          queue.push(toEnQueue[i]);
        }
      }
    }
  }
  return count === numCourses;
};
