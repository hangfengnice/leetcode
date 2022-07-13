var asteroidCollision = function (asteroids) {
  const stack = [];
  for (const aster of asteroids) {
    let alive = true;
    while (
      alive &&
      aster < 0 &&
      stack.length > 0 &&
      stack[stack.length - 1] > 0
    ) {
      alive = stack[stack.length - 1] < -aster;
      if (stack[stack.length - 1] <= -aster) {
        stack.pop();
      }
    }
    if (alive) {
      stack.push(aster);
    }
  }
  return stack;
};
