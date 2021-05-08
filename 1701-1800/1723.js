var minimumTimeRequired = function (jobs, k) {
  jobs.sort((a, b) => a - b);
  let low = 0,
    high = jobs.length - 1;
  while (low < high) {
    const temp = jobs[low];
    jobs[low] = jobs[high];
    jobs[high] = temp;
    low++;
    high--;
  }
  let l = jobs[0],
    r = jobs.reduce((prev, next) => prev + next);

  while (l < r) {
    const mid = Math.floor((l + r) >> 1);
    if (check(jobs, k, mid)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
  function check(jobs, k, limit) {
    const workloads = new Array(k).fill(0);
    return backtrack(jobs, workloads, 0, limit);
  }

  function backtrack(jobs, workloads, i, limit) {
    if (i >= jobs.length) return true;
    let cur = jobs[i];
    for (let j = 0; j < workloads.length; j++) {
      if (workloads[j] + cur <= limit) {
        workloads[j] += cur;
        if (backtrack(jobs, workloads, i + 1, limit)) {
          return true;
        }
        workloads[j] -= cur;
      }
      if (workloads[j] === 0 || workloads[j] + cur === limit) {
        break;
      }
    }
    return false;
  }
};

let res = minimumTimeRequired((jobs = [1, 2, 4, 7, 8]), (k = 2));
console.log(res, 'res')
