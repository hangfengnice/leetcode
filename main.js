// var minWindow = function (s, t) {
//   let map = {};

//   for (let i = 0; i < t.length; i++) {
//     let char = t[i];
//     map[char] = map[char] + 1 || 1;
//   }

//   let left = 0;
//   let right = 0;
//   let ans_left = 0;
//   let ans_right = -1;
//   let ans_len = Number.MAX_SAFE_INTEGER;

//   while (right < s.length) {
//     let char_right = s[right];
//     if (char_right in map) {
//       map[char_right]--;

//       while (match(map)) {
//         let temp_len = right - left + 1;

//         if (temp_len < ans_len) {
//           ans_left = left;
//           ans_right = right;
//           ans_len = temp_len;
//         }

//         let char_key = s[left];
//         if (char_key in map) {
//           map[char_key]++;
//         }
//         left++;
//       }
//     }
//     right++;
//   }
//   return s.substring(ans_left, ans_right + 1);

//   function match(obj) {
//     for (let val of Object.values(obj)) {
//       if (val > 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

var minWindow = function (s, t) {
  let map = new Array(128).fill(0);

  for (let i = 0; i < t.length; i++) {
    map[t[i].codePointAt()]++;
  }

  console.log(map);

  let left = 0;
  let right = 0;
  let ans_left = 0;
  let ans_right = 0;
  let ans_len = Number.MAX_SAFE_INTEGER;

  let count = t.length;

  while (right < s.length) {
    let char_right = s[right].codePointAt();

    map[char_right]--;

    if (map[char_right] >= 0) {
      count--;
    }

    while (count == 0) {
      let temp_len = right - left + 1;
      if (temp_len < ans_len) {
        ans_left = left;
        ans_right = right;
        ans_len = temp_len;
      }
      let key = s[left].codePointAt();

      map[key]++;

      if (map[key] > 0) {
        count++;
      }
      left++;
    }
    right++;
  }

  return s.substring(ans_left, ans_right + 1);
};

let res = minWindow("ADOBECODEBANC", "ABC");

console.log(res, "res");
