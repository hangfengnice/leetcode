// var frequencySort = function (s) {
//   let arr = s.split("");
//   let freq = {};
//   for (let s of arr) {
//     freq[s] != undefined ? freq[s]++ : (freq[s] = 1);
//   }
//   console.log(freq);
//   quickSort(arr, 0, arr.length - 1);
//   return arr.join("");
//   function quickSort(arr, l, r) {
//     if (l > r) return

//     let povit = arr[l];
//     let lt = l;
//     let gt = r + 1;

//     let i = l + 1;
//     while (i < gt) {
//       // console.log(freq[arr[i]], freq[arr[povit]]);
//       if (freq[arr[i]] > freq[povit]) {
//         lt++;
//         [arr[i], arr[lt]] = [arr[lt], arr[i]];
//         i++;
//       } else if (freq[arr[i]] < freq[povit]) {
//         gt--;
//         [arr[i], arr[gt]] = [arr[gt], arr[i]];
//       } else {
//         i++;
//       }
//     }
//     [arr[l], arr[lt]] = [arr[lt], arr[l]];
//     quickSort(arr, l, lt - 1);
//     quickSort(arr, gt, r);
//   }
// };

var frequencySort = function (s) {
  let freq = {};
  for (let key of s) {
    freq[key] != undefined ? freq[key]++ : (freq[key] = 1);
  }
  let keys = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
  let res = "";
  for (let key of keys) {
    res += key.repeat(freq[key]);
  }
  return res;
};

let result = frequencySort("loveleetcode");

console.log(result);
