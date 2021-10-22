var majorityElement = function (nums) {
  let element1 = 0;
  let element2 = 0;
  let vote1 = 0;
  let vote2 = 0;

  for (let num of nums) {
    if (vote1 > 0 && num === element1) {
      vote1++;
    } else if (vote2 > 0 && num === element2) {
      vote2++;
    } else if (vote1 === 0) {
      vote1++;
      element1 = num;
    } else if (vote2 === 0) {
      vote2++;
      element2 = num;
    } else {
      vote1--;
      vote2--;
    }
  }

  let cnt1 = 0;
  let cnt2 = 0;
  for (let num of nums) {
    if (vote1 > 0 && num === element1) {
      cnt1++;
    }
    if (vote2 > 0 && num === element2) {
      cnt2++;
    }
  }

  const ans = [];
  let flag = (nums.length / 3) >> 1;
  if (vote1 > 0 && cnt1 > flag) {
    ans.push(element1);
  }
  if (vote2 > 0 && cnt2 > flag) {
    ans.push(element2);
  }
  return ans;
};


majorityElement([3, 2, 3])
