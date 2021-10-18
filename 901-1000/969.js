var pancakeSort = function (arr) {
  let res = [];
  sort(arr, arr.length);
  return res;

  function sort(arr, n) {
    if (n === 1) return;

    let maxCake = 0;
    let maxCakeIndex = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] > maxCake) {
        maxCake = arr[i];
        maxCakeIndex = i;
      }
    }
    reverse(arr, 0, maxCakeIndex);
    res.push(maxCakeIndex + 1);
    reverse(arr, 0, n - 1);
    res.push(n);
    sort(arr, n - 1);
  }

  function reverse(arr, l, r) {
    while (l < r) {
      let temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      l++;
      r--;
    }
  }
};
