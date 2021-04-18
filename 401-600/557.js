var reverseWords = function (s) {
  let arr = s.split(" ");
  arr = arr.map((item) => {
    let itemArr = item.split("");

    let l = 0,
      r = itemArr.length - 1;
    while (l < r) {
      let temp = itemArr[l];
      itemArr[l] = itemArr[r];
      itemArr[r] = temp;
      l ++
      r --
    }
    console.log(itemArr);
    return itemArr.join("");
  });
  console.log(arr);
  return arr.join(" ");
};

let res = reverseWords("Let's take LeetCode contest")

console.log(res);
