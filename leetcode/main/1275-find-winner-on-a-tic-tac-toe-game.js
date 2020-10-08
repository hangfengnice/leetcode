var tictactoe = function (moves) {
  let a = 0,
    b = 0,
    len = moves.length,
    ac = [7, 56, 448, 73, 146, 292, 273, 84];
  for (let i = 0; i < len; i++) {
    if (i & 1) {
      b ^= 1 << (3 * moves[i][0] + moves[i][1]);
    } else {
      a ^= 1 << (3 * moves[i][0] + moves[i][1]);
    }
  }

  for (let i of ac) {
    if ((a & i) == i) return "A";
    if ((b & i) == i) return "B";
  }

  return len == 9 ? "Draw" : "Pending";
};
