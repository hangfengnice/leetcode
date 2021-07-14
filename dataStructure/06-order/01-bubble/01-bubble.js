var bubbleSort = function (a, n) {
  if (n <= 1) return;
  let flag;
  for (let i = 0; i < n; i++) {
    flag = true;
    for (let j = 0; j < n - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        flag = false;
      }
    }
    if (flag) break;
  }
};

//  do - while
var bubbleSort = function (a, n) {
  if (n <= 1) return;
  let swapped;

  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (a[i - 1] > a[i]) {
        let temp = a[i];
        a[i] = a[i - 1];
        a[i - 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

// do - while 优化
var bubbleSort = function (a, n) {
  if (n <= 1) return;

  let newn;

  do {
    newn = 0;
    for (let i = 1; i < n; i++) {
      if (a[i - 1] > a[i]) {
        let temp = a[i];
        a[i] = a[i - 1];
        a[i - 1] = temp;
        newn = i
      }
    }
    n = newn;
  } while (newn > 0);
};

