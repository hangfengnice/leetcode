var reverseVowels = function (s) {
  let reg = /[aoeiu]/i;
  let arr = s.split("");
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    while (l < r && !reg.test(s[l])) {
      l++;
    }
    while (l < r && !reg.test(s[r])) {
      r--;
    }
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
  return arr.join("");
};

let res = reverseVowels('hello')

console.log(res);
