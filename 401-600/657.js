var judgeCircle = function (moves) {
  let x = 0,
    y = 0;
  for (let ch of moves) {
    if (ch == "U") {
      y++;
    } else if (ch == "D") {
      y--;
    } else if (ch == "L") {
      x--;
    } else if (ch == "R") {
      x++;
    }
  }
  return x == 0 && y == 0;
};
