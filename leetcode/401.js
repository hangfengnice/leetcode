var readBinaryWatch = function (num) {
  const arr = [1, 2, 4, 8, 1, 2, 4, 8, 16, 32];
  const result = [];
  backTrace(arr, num, 0, [0, 0], result);
  return result;

  function backTrace(arr, num, start, temp, result) {
    if (temp[0] >= 12 || temp[1] >= 60) return;
    if (num == 0) {
      result.push(`${temp[0]}:${padding(temp[1])}`);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      if (i <= 3) {
        temp[0] += arr[i];
      } else {
        temp[1] += arr[i];
      }
      num -= 1;
      backTrace(arr, num, i + 1, temp, result);
      num += 1;
      if (i <= 3) {
        temp[0] -= arr[i];
      } else {
        temp[1] -= arr[i];
      }
    }
  }

  function padding(num) {
    return num < 10 ? `0${num}` : num;
  }
};
