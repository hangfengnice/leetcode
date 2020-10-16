var sortedSquares = function (A) {
  return A.map(i => i * i).sort((a, b) => a - b)
}
