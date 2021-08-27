var numRescueBoats = function (people, limit) {
  let ans = 0;
  people.sort((a, b) => a - b);

  let light = 0,
    heavy = people.length - 1;
  while (light <= heavy) {
    if (people[light] + people[heavy] <= limit) {
      ++light;
    }
    --heavy;
    ans++;
  }
  return ans;
};
