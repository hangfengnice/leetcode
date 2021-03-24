var find132pattern = function (nums) {
  if (nums.length < 3) return false;

  for (let i = 1; i < nums.length - 1; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[i]) continue;
      for (let x = i + 1; x < nums.length; x++) {
        if (nums[i] > nums[x] && nums[j] < nums[x]) return true;
      }
    }
  }
  return false;
};

var find132pattern = function (nums) {
  if (nums.length < 3) return false;

  let min = nums[0];

  for (let i = 1; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > min && nums[j] < nums[i]) return true;
    }
    min = Math.min(min, nums[i]);
  }

  return false;
};

var find132pattern = function (nums) {
  const n = nums.length;

  const candidate_k = [nums[n - 1]];

  let max_k = -Number.MAX_SAFE_INTEGER;

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < max_k) return true;

    while (
      candidate_k.length &&
      nums[i] > candidate_k[candidate_k.length - 1]
    ) {
      max_k = candidate_k[candidate_k.length - 1];
      candidate_k.pop();
    }

    if (nums[i] > max_k) {
      candidate_k.push(nums[i]);
    }
  }

  return false;
};

var find132pattern = function (nums) {
  const n = nums.length;
  const candidateI = [nums[0]],
    candidateJ = [nums[0]];

  for (let k = 1; k < n; ++k) {
    const idxI = binarySearchFirst(candidateI, nums[k]);
    const idxJ = binarySearchLast(candidateJ, nums[k]);
    if (idxI >= 0 && idxJ >= 0) {
      if (idxI <= idxJ) {
        return true;
      }
    }

    if (nums[k] < candidateI[candidateI.length - 1]) {
      candidateI.push(nums[k]);
      candidateJ.push(nums[k]);
    } else if (nums[k] > candidateJ[candidateJ.length - 1]) {
      const lastI = candidateI[candidateI.length - 1];
      while (candidateJ.length && nums[k] > candidateJ[candidateJ.length - 1]) {
        candidateI.pop();
        candidateJ.pop();
      }
      candidateI.push(lastI);
      candidateJ.push(nums[k]);
    }
  }

  return false;

  function binarySearchFirst(candidate, target) {
    let low = 0,
      high = candidate.length - 1;
    if (candidate[high] >= target) {
      return -1;
    }
    while (low < high) {
      const mid = Math.floor((high - low) / 2) + low;
      const num = candidate[mid];
      if (num >= target) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  }

  function binarySearchLast(candidate, target) {
    let low = 0,
      high = candidate.length - 1;
    if (candidate[low] <= target) {
      return -1;
    }
    while (low < high) {
      const mid = Math.floor((high - low + 1) / 2) + low;
      const num = candidate[mid];
      if (num <= target) {
        high = mid - 1;
      } else {
        low = mid;
      }
    }
    return low;
  }
};

// let res = binarySearchFirst([2, 5, 7], 4);
// console.log(res);
