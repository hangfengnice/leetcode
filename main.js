var lenLongestFibSubseq = function (A) {
  let N = A.length;
  let index = new Map();
  for (let i = 0; i < N; i++) {
    index.push(A[i], i);
  }
  let longest = new Map();
  let ans = 0;

  for (let k = 1; k < N; k++) {
    for (let j = 0; j < k; j++) {
      let i = index.get(A[k] - A[j]) || -1;
      if (i >= 0 && i < j) {
        let cand = (longest.get(i * N + j) || 2) + 1;
        longest.set(j * N + k, cand);
        ans = Math.max(ans, cand);
      }
    }
  }
  return ans >= 3 ? ans : 0;
};
