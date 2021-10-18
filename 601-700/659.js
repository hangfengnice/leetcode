var isPossible = function (nums) {
  const freq = new Map();
  const need = new Map();
  for (let num of nums) {
    let count = freq.get(num) || 0;
    freq.set(num, count + 1);
  }

  for (let num of nums) {
    let count = freq.get(num);

    if (count) {
      let end = need.get(num) || 0;

      if (end) {
        freq.set(num, count - 1);
        need.set(num, end - 1);
        need.set(num + 1, (need.get(num + 1) || 0) + 1);
      } else {
        let count1 = freq.get(num + 1);
        let count2 = freq.get(num + 2);
        if (count1 && count2) {
          freq.set(num, count - 1);
          freq.set(num + 1, count1 - 1);
          freq.set(num + 2, count2 - 1);
          need.set(num + 3, (need.get(num + 3) || 0) + 1);
        } else {
          return false;
        }
      }
    }
  }
  return true;
};
