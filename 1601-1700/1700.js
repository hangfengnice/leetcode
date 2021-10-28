var countStudents = function (students, sandwiches) {
  let counts = [0, 0];
  for (let num of students) {
    counts[num]++;
  }
  let n = sandwiches.length;
  for (let i = 0; i < n; i++) {
    if (counts[sandwiches[i]] > 0) {
      counts[sandwiches[i]]--;
    } else {
      return n - i;
    }
  }
  return 0;
};
