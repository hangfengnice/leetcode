var optimalDivision = function (nums) {
  let length = nums.length;
  if (length == 1) {
    return `${nums[0]}`;
  } else if (length == 2) {
    return `${nums[0]}/${nums[1]}`;
  } else {
    let str = "";
    nums.map((item, index) => {
      if (!!index) {
        str += item + "/";
      }
    });
    str = str.slice(0, -1);

    return `${nums[0]}/(${str})`;
  }
};
let res = optimalDivision([1, 2, 3]);
console.log(res);
