var topKFrequent = function(nums, k) {
  let map = new Map()

  for(let num of nums) {
    let count = map.get(num)
    map.set(num, count ? count + 1 : 1)
  }

   return [...map.keys()].sort((a, b) => map.get(b) - map.get(a)).slice(0, k).map(i => +i)
};

let res = topKFrequent([4,1,-1,2,-1,2,3],
  2)

console.log(res);
