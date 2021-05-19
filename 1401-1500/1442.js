var countTriplets = function (arr) {
  const n = arr.length;
  const s = [0];
  for (const num of arr) {
    s.push(s[s.length - 1] ^ num);
  }

  console.log(s, 's');

  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j; k < n; k++) {
        if (s[i] === s[k + 1]) {
          ans++;
        }
      }
    }
  }

  return ans;
};

// s [ 0, 2, 1, 0, 6, 1 ]
// 0， 1， 2
// let arr = [2, 3, 1, 6, 7];

let res =countTriplets([2, 3, 1, 6, 7])
console.log(res, 'res');

