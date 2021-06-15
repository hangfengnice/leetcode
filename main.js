var peakIndexInMountainArray = function (arr) {
  const n = arr.length;

  let left = 1,
    right = n - 2;

  while (left <= right) {
    let mid = ((right - left) >> 1) + left;
    console.log(mid, 'mid');

    if (arr[mid] > arr[mid + 1]) {
      if (mid === 0 || arr[mid - 1] < arr[mid]) {
        return mid;
      } else {
        right = mid - 1;
      }
    } else {
      left = mid + 1;
    }
  }
};

let res = peakIndexInMountainArray([0, 1, 0]);

console.log(res, "res");
