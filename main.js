var reverseStr = function (s, k) {
  const n = s.length;
  const arr = Array.from(s);
  for (let i = 0; i < n; i += 2 * k) {
    reverse(arr, i, Math.min(i + k, n) - 1);
  }
  return arr.join("");

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

let res = reverseStr("abcdefg", 2);
console.log(res, "res");
